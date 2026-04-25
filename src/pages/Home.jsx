import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroImageUrl, socialLinks } from '../data/siteContent';

const highlightStats = [
  { value: '1500+', label: 'Graphic Designs' },
  { value: '150+', label: 'Photoshoots' },
  { value: '5+', label: 'Real-World Projects' },
  { value: '1+', label: 'Internship Experience' },
  { value: 'India', label: 'Based In' }
];

const rotatingRoles = [
  'Full Stack Developer',
  'Graphic Designer',
  'Video Editor',
  'Photography & Video',
  'Social Media Editor',
  'Community Builder'
];

const longestRole = rotatingRoles.reduce((longest, current) =>
  current.length > longest.length ? current : longest
);

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = rotatingRoles[roleIndex];
    const typingSpeed = isDeleting ? 45 : 85;
    const endPause = 900;
    const startPause = 220;
    let timer;

    if (!isDeleting && typedText === currentRole) {
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, endPause);
    } else if (isDeleting && typedText.length === 0) {
      timer = window.setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
      }, startPause);
    } else {
      timer = window.setTimeout(() => {
        const nextLength = typedText.length + (isDeleting ? -1 : 1);
        setTypedText(currentRole.slice(0, nextLength));
      }, typingSpeed);
    }

    return () => window.clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <>
      <section className="relative overflow-hidden pb-8">
        <div className="mesh-bg" aria-hidden="true" />
        <div className="heritage-pattern" aria-hidden="true" />
        <div className="section-orb -left-20 top-24 h-40 w-40 bg-accent/30" aria-hidden="true" />
        <div className="section-orb -right-20 bottom-20 h-44 w-44 bg-mint/30" aria-hidden="true" />
        <div className="mx-auto grid w-[min(1120px,92vw)] gap-10 pb-16 pt-8 md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Available For Opportunities
            </p>

            <h1 className="font-display text-4xl leading-[0.95] md:text-7xl">
              Hi, I&apos;m <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Sandesh Vengala</span>
            </h1>

            <div className="mt-5 text-sm font-semibold tracking-[0.04em] text-ink/70 dark:text-paper/75 md:text-base">
              <span className="relative inline-flex h-7 items-center align-middle text-accent md:h-8">
                <span className="invisible whitespace-nowrap">{longestRole}</span>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap">
                  {typedText}
                  <span className="ml-0.5 inline-block h-[1em] w-[2px] bg-accent align-middle animate-pulse" />
                </span>
              </span>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75 dark:text-paper/80">
              Building at the intersection of technology, creativity, and practical execution. I design and develop
              experiences that blend full stack development, visual design, and storytelling to turn ideas into
              real-world digital products.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:scale-105 md:px-7 md:py-3"
              >
                Know More
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-ink/30 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition hover:border-accent hover:text-accent dark:border-paper/30 dark:text-paper/80 dark:hover:text-accent md:px-7 md:py-3"
              >
                Get In Touch
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {highlightStats.map((item, idx) => (
                <article
                  key={item.label}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink/15 bg-white/75 dark:border-paper/20 dark:bg-ink/35">
                    {item.label === 'Graphic Designs' && (
                      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="13.5" cy="6.5" r="2.5" />
                        <circle cx="19" cy="13" r="2" />
                        <circle cx="6" cy="12" r="2" />
                        <circle cx="10" cy="18" r="2" />
                        <path d="M16 21a7 7 0 1 0 0-14h-1" />
                      </svg>
                    )}
                    {item.label === 'Photoshoots' && (
                      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                        <circle cx="12" cy="13" r="3" />
                      </svg>
                    )}
                    {item.label === 'Real-World Projects' && (
                      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <path d="M10 12h4" />
                        <path d="M12 10v4" />
                      </svg>
                    )}
                    {item.label === 'Internship Experience' && (
                      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                      </svg>
                    )}
                    {item.label === 'Based In' && (
                      <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-display font-bold text-ink dark:text-paper">{item.value}</p>
                    <p className="text-xs text-ink/60 dark:text-paper/60">{item.label}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/60 dark:text-paper/65">Find Me</span>
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink/15 bg-white/75 text-ink/60 transition-all duration-300 hover:border-accent hover:text-accent dark:border-paper/20 dark:bg-ink/35 dark:text-paper/70 dark:hover:text-accent"
                  title={item.label}
                >
                  {item.label === 'LinkedIn' && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                    </svg>
                  )}
                  {item.label === 'Instagram' && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[380px] lg:w-[380px]">
              <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl scale-110" />
              <div className="absolute inset-3 rounded-full border border-accent/20" />
              <div className="absolute inset-0 rounded-full border border-accent/15" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/10 shadow-card">
                <img
                  src="/assets/images/designer-profile.JPG"
                  alt="Sandesh Vengala"
                  className="h-full w-full object-cover object-[center_18%]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
