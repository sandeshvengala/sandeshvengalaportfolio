import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import InteractiveCard from '../components/InteractiveCard';
import BackButton from '../components/BackButton';



export default function Projects() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-4 py-12">
      <div className="mb-4 flex items-center justify-between">
        <BackButton />
      </div>
      <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        Creative Sections
      </p>
      <SectionTitle title="Projects" subtitle="Portfolio Sections" />

      <div className="mb-8 rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/30">
        <p className="max-w-3xl text-lg leading-relaxed text-ink/80 dark:text-paper/80">
          Explore my portfolio across design, photography, and web development. Each section includes focused work, category-based
          navigation, and real project storytelling.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <InteractiveCard
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-ink/10 bg-white/85 p-7 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35"
        >
          <p className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">01</p>
          <h3 className="mb-3 text-3xl font-semibold">Graphic Designing</h3>
          <p className="mb-6 text-sm text-ink/75 dark:text-paper/80">
            Explore branding, social media design, reels editing, posters, wedding and birthday invites, UI/UX, and
            case studies.
          </p>
          <Link
            to="/projects/graphic-designing"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:-translate-y-0.5"
          >
            Open
          </Link>
        </InteractiveCard>

        <InteractiveCard
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="rounded-3xl border border-ink/10 bg-white/85 p-7 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35"
        >
          <p className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">02</p>
          <h3 className="mb-3 text-3xl font-semibold">Photography</h3>
          <p className="mb-6 text-sm text-ink/75 dark:text-paper/80">
            Browse portrait, wedding, birthday, street, nature, and product photography collections.
          </p>
          <Link
            to="/photography"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:-translate-y-0.5"
          >
            Open
          </Link>
        </InteractiveCard>

        <InteractiveCard
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="rounded-3xl border border-ink/10 bg-white/85 p-7 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35"
        >
          <p className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">03</p>
          <h3 className="mb-3 text-3xl font-semibold">Web Projects</h3>
          <p className="mb-6 text-sm text-ink/75 dark:text-paper/80">
            Discover full-stack applications, responsive web designs, and modern interactive experiences built with cutting-edge technologies.
          </p>
          <Link
            to="/projects/web-projects"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:-translate-y-0.5"
          >
            Open
          </Link>
        </InteractiveCard>
      </div>
    </section>
  );
}
