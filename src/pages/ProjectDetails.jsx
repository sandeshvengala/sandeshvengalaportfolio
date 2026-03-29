import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import InteractiveCard from '../components/InteractiveCard';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="mx-auto w-[min(1120px,92vw)] py-24">
        <h1 className="font-display text-5xl">Project not found</h1>
        <Link to="/projects" className="mt-6 inline-block text-accent">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-20 md:py-24">
      <InteractiveCard className="rounded-3xl border border-ink/10 bg-white/80 p-7 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35 md:p-10">
        <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          {project.category}
        </p>
        <h1 className="font-display text-5xl leading-[0.95] md:text-6xl">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/80 dark:text-paper/80">{project.description}</p>
      </InteractiveCard>

      <img
        src={project.image}
        alt={project.title}
        className="mt-10 h-[28rem] w-full rounded-3xl border border-ink/10 object-cover shadow-card dark:border-paper/10"
      />

      {project.video && (
        <div className="mt-8 overflow-hidden rounded-3xl border border-ink/10 bg-black shadow-card dark:border-paper/10">
          <video
            src={project.video}
            className="h-[20rem] w-full object-cover md:h-[28rem]"
            controls
            playsInline
            preload="metadata"
          />
        </div>
      )}

      {project.gallery?.length > 0 && (
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {project.gallery.map((item, index) => (
            <img
              key={`${project.slug}-gallery-${index}`}
              src={item}
              alt={`${project.title} showcase ${index + 1}`}
              className="h-52 w-full rounded-2xl object-cover shadow-card"
              loading="lazy"
            />
          ))}
        </div>
      )}

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <InteractiveCard className="rounded-3xl border border-ink/10 bg-white/85 p-6 backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35">
          <h2 className="mb-3 text-xl font-semibold">Challenge</h2>
          <p className="text-ink/75 dark:text-paper/80">{project.caseStudy.challenge}</p>
        </InteractiveCard>
        <InteractiveCard className="rounded-3xl border border-ink/10 bg-white/85 p-6 backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35">
          <h2 className="mb-3 text-xl font-semibold">Solution</h2>
          <p className="text-ink/75 dark:text-paper/80">{project.caseStudy.solution}</p>
        </InteractiveCard>
        <InteractiveCard className="rounded-3xl border border-ink/10 bg-white/85 p-6 backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35">
          <h2 className="mb-3 text-xl font-semibold">Impact</h2>
          <p className="text-ink/75 dark:text-paper/80">{project.caseStudy.impact}</p>
        </InteractiveCard>
      </div>

      <InteractiveCard className="mt-12 rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/25">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-accent">Tools used</p>
        <div className="flex flex-wrap gap-3">
          {project.tools.map((tool) => (
            <span key={tool} className="rounded-full border border-ink/20 bg-white/75 px-4 py-2 text-sm dark:border-paper/20 dark:bg-ink/30">
              {tool}
            </span>
          ))}
        </div>
      </InteractiveCard>
    </section>
  );
}
