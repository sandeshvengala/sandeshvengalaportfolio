import { socialLinks } from '../data/siteContent';

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white/70 py-10 dark:border-paper/10 dark:bg-ink/40">
      <div className="mx-auto flex w-[min(1120px,92vw)] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-3xl">Let us collaborate and create something amazing together!</p>
          <p className="mt-2 text-sm text-ink/70 dark:text-paper/70">
            Whether it is design or photography, I am always excited to work on creative projects.
          </p>
          <p className="mt-2 text-sm text-ink/70 dark:text-paper/70">2026 Sandesh. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold uppercase tracking-[0.12em]">
          {socialLinks.map((item) => (
            <a key={item.label} className="transition hover:text-accent" href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
