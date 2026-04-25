import { useMemo, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import InteractiveCard from '../components/InteractiveCard';
import BackButton from '../components/BackButton';
import InProgressCard from '../components/InProgressCard';
import { webProjectCategories, inProgressWebProjects } from '../data/webProjects';

export default function WebProjects() {
    const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return inProgressWebProjects;
    return inProgressWebProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-20 md:py-24">
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

      <div className="mb-10 flex flex-wrap gap-2 rounded-2xl border border-ink/10 bg-white/70 p-3 dark:border-paper/10 dark:bg-ink/30">
        {/* 
          Project Categories:
          - All: Shows all web projects
          - Full Stack: Complete MERN/MEAN stack applications
          - E-Commerce: E-commerce and shopping platforms
          - MERN Stack: MongoDB, Express, React, Node.js projects
        */}
        {webProjectCategories.map((category) => (
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

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <InProgressCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
