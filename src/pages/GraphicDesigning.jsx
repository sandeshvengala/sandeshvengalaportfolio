import { useMemo, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import InteractiveCard from '../components/InteractiveCard';
import { categories, projects } from '../data/projects';

export default function GraphicDesigning() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-20 md:py-24">
      <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        Design Portfolio
      </p>
      <SectionTitle title="Graphic Designing" subtitle="Design Portfolio" />

      <InteractiveCard className="mb-8 rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/30">
        <p className="max-w-3xl text-lg leading-relaxed text-ink/80 dark:text-paper/80">
          Creative design work across branding, social media, UI/UX, event posters, wedding invitations, birthday
          creatives, and more.
        </p>
      </InteractiveCard>

      <div className="mb-10 flex flex-wrap gap-2 rounded-2xl border border-ink/10 bg-white/70 p-3 dark:border-paper/10 dark:bg-ink/30">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            type="button"
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
              activeCategory === category
                ? 'bg-accent text-white'
                : 'border border-ink/20 bg-white/75 hover:border-accent hover:text-accent dark:border-paper/20 dark:bg-ink/35'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
