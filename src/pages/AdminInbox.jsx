import { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';

const ACCESS_STORAGE_KEY = 'portfolio-admin-unlocked';

export default function AdminInbox() {
  const [accessKey, setAccessKey] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(() => sessionStorage.getItem(ACCESS_STORAGE_KEY) === 'true');
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const adminAccessKey = import.meta.env.VITE_ADMIN_ACCESS_KEY;

  useEffect(() => {
    if (!isUnlocked) return;

    const loadMessages = async () => {
      if (!supabaseUrl || !supabaseAnonKey) {
        setStatus({
          type: 'error',
          message: 'Supabase env vars are missing. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.'
        });
        return;
      }

      setStatus({ type: 'loading', message: 'Loading submitted messages...' });

      try {
        const response = await fetch(`${supabaseUrl}/rest/v1/contacts?select=*&order=created_at.desc`, {
          headers: {
            apikey: supabaseAnonKey,
            Authorization: `Bearer ${supabaseAnonKey}`,
            Accept: 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Unable to fetch messages');
        }

        const data = await response.json();
        setMessages(Array.isArray(data) ? data : []);
        setStatus({ type: 'success', message: `Loaded ${Array.isArray(data) ? data.length : 0} message(s).` });
      } catch (error) {
        setStatus({
          type: 'error',
          message:
            'Could not load messages. Make sure the contacts table allows reads for the key you are using, or connect this page to a private backend endpoint.'
        });
      }
    };

    loadMessages();
  }, [isUnlocked, supabaseAnonKey, supabaseUrl]);

  const unlockInbox = (event) => {
    event.preventDefault();

    if (!adminAccessKey) {
      setStatus({
        type: 'error',
        message: 'Set VITE_ADMIN_ACCESS_KEY in .env to enable the hidden inbox.'
      });
      return;
    }

    if (accessKey !== adminAccessKey) {
      setStatus({ type: 'error', message: 'Invalid access key.' });
      return;
    }

    sessionStorage.setItem(ACCESS_STORAGE_KEY, 'true');
    setIsUnlocked(true);
    setStatus({ type: 'success', message: 'Access granted.' });
  };

  const formatDate = (value) => {
    if (!value) return 'Unknown date';
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? value : date.toLocaleString();
  };

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20 md:py-24">
      <div className="mb-4 flex items-center justify-between">
        <BackButton />
      </div>

      <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        Private Inbox
      </p>

      <div className="mb-8 space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Contact Submissions</h1>
        <p className="max-w-3xl text-base leading-relaxed text-ink/75 dark:text-paper/75">
          This page is intentionally not linked in the public navigation. It is meant for private review of form submissions.
        </p>
      </div>

      {!isUnlocked ? (
        <form
          onSubmit={unlockInbox}
          className="max-w-xl rounded-3xl border border-ink/10 bg-white/85 p-6 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35"
        >
          <label htmlFor="admin-access-key" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em]">
            Access Key
          </label>
          <input
            id="admin-access-key"
            type="password"
            value={accessKey}
            onChange={(event) => setAccessKey(event.target.value)}
            className="mb-4 w-full rounded-xl border border-ink/20 bg-white/70 px-4 py-3 outline-none transition focus:border-accent dark:border-paper/20 dark:bg-ink/30"
            placeholder="Enter the private access key"
          />
          <button
            type="submit"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:-translate-y-0.5"
          >
            Unlock Inbox
          </button>

          {status.message && (
            <p
              className={`mt-4 text-sm ${
                status.type === 'error' ? 'text-red-600 dark:text-red-400' : 'text-emerald-700 dark:text-emerald-400'
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      ) : (
        <div className="space-y-4">
          {status.message && (
            <p className={`text-sm ${status.type === 'error' ? 'text-red-600 dark:text-red-400' : 'text-emerald-700 dark:text-emerald-400'}`}>
              {status.message}
            </p>
          )}

          <div className="grid gap-4">
            {messages.length === 0 ? (
              <div className="rounded-3xl border border-ink/10 bg-white/85 p-6 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35">
                <p className="text-sm text-ink/70 dark:text-paper/70">No messages found yet.</p>
              </div>
            ) : (
              messages.map((message) => (
                <article
                  key={message.id}
                  className="rounded-3xl border border-ink/10 bg-white/85 p-6 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35"
                >
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-semibold">{message.name}</h2>
                      <p className="text-sm text-ink/70 dark:text-paper/70">{message.email}</p>
                    </div>
                    <time className="text-xs uppercase tracking-[0.16em] text-ink/60 dark:text-paper/60">
                      {formatDate(message.created_at)}
                    </time>
                  </div>

                  <p className="mb-4 whitespace-pre-wrap rounded-2xl border border-ink/10 bg-paper/70 px-4 py-3 text-sm leading-relaxed text-ink/85 dark:border-paper/10 dark:bg-ink/25 dark:text-paper/85">
                    {message.message}
                  </p>

                  {message.source && (
                    <p className="text-xs uppercase tracking-[0.16em] text-ink/55 dark:text-paper/55">
                      Source: {message.source}
                    </p>
                  )}
                </article>
              ))
            )}
          </div>
        </div>
      )}
    </section>
  );
}