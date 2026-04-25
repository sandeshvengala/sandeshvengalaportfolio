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
        message:
          'Submission endpoint is not configured. Add VITE_CONTACT_ENDPOINT in .env and restart the dev server.'
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

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitState({ status: 'success', message: 'Message sent. I will get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitState({
        status: 'error',
        message: 'Something went wrong while sending. Please try again in a moment.'
      });
    }
  };

  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-20 md:py-24">
      <div className="mb-4 flex items-center justify-between">
        <BackButton />
      </div>
      <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        Get In Touch
      </p>
      <SectionTitle title="Contact" subtitle="Start a Project" />

      <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
        <InteractiveCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5 rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35"
        >
          <p className="text-lg leading-relaxed text-ink/80 dark:text-paper/80">
            Let us work together to create something amazing. Feel free to reach out for collaborations, freelance
            work, or project discussions.
          </p>
          <p className="rounded-xl border border-ink/10 bg-white/75 px-4 py-3 font-semibold dark:border-paper/10 dark:bg-ink/25">
            Email: {contactEmail}
          </p>
          <p className="rounded-xl border border-ink/10 bg-white/75 px-4 py-3 font-semibold dark:border-paper/10 dark:bg-ink/25">
            Phone: {contactPhone}
          </p>
          <p className="rounded-xl border border-ink/10 bg-white/75 px-4 py-3 font-semibold dark:border-paper/10 dark:bg-ink/25">
            Location: {contactLocation}
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.15em]">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full border border-ink/15 px-4 py-2 transition hover:border-accent hover:text-accent dark:border-paper/20"
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
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
