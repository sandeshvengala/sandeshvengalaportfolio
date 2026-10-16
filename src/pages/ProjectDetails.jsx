import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { webProjects } from '../data/webProjects';
import InteractiveCard from '../components/InteractiveCard';
import BackButton from '../components/BackButton';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug) || webProjects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="mx-auto w-[min(1120px,92vw)] py-10">
        <div className="mb-6">
          <BackButton />
        </div>
        <h1 className="font-display text-5xl">Project not found</h1>
        <Link to="/projects" className="mt-6 inline-block text-accent">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-8 md:py-10">
      <div className="mb-6">
        <BackButton />
      </div>
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

      {project.liveLink && (
        <InteractiveCard className="mt-8 rounded-3xl border border-accent/30 bg-accent/5 p-8 backdrop-blur-sm dark:border-accent/20 dark:bg-accent/10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.2em] text-accent">Live Project</p>
              <p className="text-lg font-semibold">Visit the live site</p>
            </div>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Open Live Site
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </InteractiveCard>
      )}

      {project.caseStudy?.features && (
        <InteractiveCard className="mt-8 rounded-3xl border border-ink/10 bg-white/80 p-8 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/25">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-accent">Key Features</p>
          <div className="grid gap-4 md:grid-cols-2">
            {project.caseStudy.features.map((feature, index) => (
              <div key={`${project.slug}-feature-${index}`} className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-ink/80 dark:text-paper/80">{feature}</span>
              </div>
            ))}
          </div>
        </InteractiveCard>
      )}
    </section>
  );
}
