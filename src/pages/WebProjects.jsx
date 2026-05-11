import { useMemo, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import InteractiveCard from '../components/InteractiveCard';
import BackButton from '../components/BackButton';
import InProgressCard from '../components/InProgressCard';
import { inProgressWebProjects, webProjects } from '../data/webProjects';

export default function WebProjects() {
  // No filtering, show all
  const filteredInProgress = inProgressWebProjects;
  const filteredCompleted = webProjects;

  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-8 md:py-10">
      <div className="mb-4 flex items-center justify-between">
        <BackButton />
      </div>
      <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        Development Portfolio
      </p>
      <SectionTitle title="Web Projects" subtitle="Full Stack Development" />

      <InteractiveCard className="mb-8 rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/30">
        <p className="max-w-3xl text-lg leading-relaxed text-ink/80 dark:text-paper/80">
          Explore my full-stack web applications and e-commerce platforms built with modern technologies. Each project demonstrates responsive design, scalable architecture, and real-world functionality.
        </p>
      </InteractiveCard>



      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Completed Projects */}
        {filteredCompleted.map((project, index) => (
          <InteractiveCard key={project.id} className="relative rounded-3xl border border-ink/10 bg-white/85 p-7 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/35">
            {/* Completed Badge */}
            <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-green-600/90 px-3 py-1 text-xs font-bold text-white shadow">✔ Completed</span>
            <p className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">{index + 1}</p>
            <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
            <p className="mb-4 text-sm text-ink/75 dark:text-paper/80">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies && project.technologies.map((tech) => (
                <span key={tech} className="rounded bg-accent/10 px-2 py-1 text-xs text-accent font-semibold">{tech}</span>
              ))}
            </div>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 w-full rounded-lg border border-accent/10 bg-white"
                style={{ height: 180, objectFit: 'contain', background: 'white' }}
              />
            )}
            {(project.link || project.note) && (
              <div className="mt-3 flex flex-col items-start gap-2">
                {project.note && (
                  <div className="inline-flex items-center gap-2 rounded bg-blue-50 px-3 py-1 text-xs text-blue-700 font-medium">
                    <svg className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487A9.001 9.001 0 013 12c0 4.991 4.029 9.02 9.02 9.02 2.387 0 4.57-.93 6.25-2.45M15 9h6m0 0v6m0-6l-9 9-4-4-6 6" /></svg>
                    <span>{project.note}</span>
                  </div>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition shadow"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            )}
          </InteractiveCard>
        ))}
        {/* In Progress Projects */}
        {filteredInProgress.map((project, index) => (
          <InProgressCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
