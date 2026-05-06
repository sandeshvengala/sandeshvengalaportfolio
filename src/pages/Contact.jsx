import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import InteractiveCard from '../components/InteractiveCard';
import BackButton from '../components/BackButton';
import { contactEmail, contactEndpoint, contactLocation, contactPhone, socialLinks } from '../data/siteContent';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!contactEndpoint) {
      setSubmitState({
        status: 'error',
        message: 'No submission endpoint configured. Set VITE_CONTACT_ENDPOINT to your private backend or Supabase Edge Function URL.'
      });
      return;
    }

    setSubmitState({ status: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          source: 'portfolio-contact-form'
        })
      });

      if (!response.ok) throw new Error('Request failed');

      setSubmitState({ status: 'success', message: 'Message sent. I will get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitState({ status: 'error', message: 'Failed to send message. Please try again in a moment.' });
    }
  };

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="mb-4 flex items-center justify-between">
        <BackButton />
      </div>
      <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        Get In Touch
      </p>
      <SectionTitle title="Contact" subtitle="Start a Project" />

      <div className="grid gap-10 md:grid-cols-2 items-start">
        <InteractiveCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5 rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35"
        >
          <p className="text-lg leading-relaxed text-ink/80 dark:text-paper/80">
            Let us work together to create something amazing. Reach out for collaborations, freelance work, or project
            discussions.
          </p>

          <div className="grid gap-3">
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white/75 px-4 py-3 text-sm transition hover:border-accent dark:border-paper/10 dark:bg-ink/25"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs uppercase tracking-[0.12em] text-ink/70 dark:text-paper/70">Email</span>
              <span className="ml-auto font-semibold text-ink/90 dark:text-paper/90">{contactEmail}</span>
            </a>

            <a
              href={`tel:${contactPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white/75 px-4 py-3 text-sm transition hover:border-accent dark:border-paper/10 dark:bg-ink/25"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h2.2a2 2 0 011.98 1.6l.36 2a2 2 0 01-.45 1.7L7.1 9.9a11 11 0 005 5l1-1.2a2 2 0 011.7-.45l2 .36A2 2 0 0121 16.8V19a2 2 0 01-2 2H19a16 16 0 01-16-16V5z" />
              </svg>
              <span className="text-xs uppercase tracking-[0.12em] text-ink/70 dark:text-paper/70">Phone</span>
              <span className="ml-auto font-semibold text-ink/90 dark:text-paper/90">{contactPhone}</span>
            </a>

            <div className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white/75 px-4 py-3 text-sm dark:border-paper/10 dark:bg-ink/25">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21s9-5.5 9-11a9 9 0 10-18 0c0 5.5 9 11 9 11z" />
              </svg>
              <span className="text-xs uppercase tracking-[0.12em] text-ink/70 dark:text-paper/70">Location</span>
              <span className="ml-auto font-semibold text-ink/90 dark:text-paper/90">{contactLocation}</span>
            </div>
          </div>

          <div className="mt-3 flex gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition hover:border-accent hover:text-accent dark:border-paper/20"
              >
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </InteractiveCard>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-ink/10 bg-white/85 p-6 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em]">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-xl border border-ink/20 bg-white/70 px-4 py-3 outline-none transition focus:border-accent dark:border-paper/20 dark:bg-ink/30"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-xl border border-ink/20 bg-white/70 px-4 py-3 outline-none transition focus:border-accent dark:border-paper/20 dark:bg-ink/30"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em]">
              Project Brief
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full rounded-xl border border-ink/20 bg-white/70 px-4 py-3 outline-none transition focus:border-accent dark:border-paper/20 dark:bg-ink/30"
              placeholder="Tell me about your project goals"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:-translate-y-1"
            disabled={submitState.status === 'loading'}
          >
            {submitState.status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {submitState.message && (
            <p
              className={`mt-4 text-sm ${
                submitState.status === 'error'
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-emerald-700 dark:text-emerald-400'
              }`}
            >
              {submitState.message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
