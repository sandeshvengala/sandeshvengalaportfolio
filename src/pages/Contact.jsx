import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import InteractiveCard from '../components/InteractiveCard';
import BackButton from '../components/BackButton';
import { contactEmail, contactLocation, contactPhone, socialLinks } from '../data/siteContent';

export default function Contact() {
  const socialButtonClasses = {
    LinkedIn:
      'bg-[#0A66C2] text-white shadow-[0_12px_24px_rgba(10,102,194,0.24)] hover:bg-[#0958a8]',
    Instagram:
      'bg-[linear-gradient(135deg,#f58529_0%,#dd2a7b_50%,#8134af_100%)] text-white shadow-[0_12px_24px_rgba(221,42,123,0.24)] hover:opacity-95'
  };

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="mb-4 flex items-center justify-between">
        <BackButton />
      </div>
      <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        Get In Touch
      </p>
      {/* <SectionTitle title="Contact" subtitle="Start a Project" /> */}

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] items-start">
        <InteractiveCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35"
        >
          <div className="space-y-3">
            <h3 className="text-2xl font-display font-bold tracking-tight">Let us build something memorable.</h3>
            <p className="text-base leading-relaxed text-ink/80 dark:text-paper/80">
              Reach out for collaborations, freelance work, or product ideas that need design and development support.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink/60 dark:text-paper/65">
              Connect On
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition hover:-translate-y-0.5 ${socialButtonClasses[item.label] || 'border border-ink/15 bg-white/80 text-ink dark:border-paper/20 dark:bg-ink/35 dark:text-paper'}`}
                >
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </InteractiveCard>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3 rounded-3xl border border-ink/10 bg-white/80 p-5 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35"
        >
          <p className="px-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink/60 dark:text-paper/65">
            Contact Details
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
        </motion.div>
      </div>
    </section>
  );
}
