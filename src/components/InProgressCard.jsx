import InteractiveCard from './InteractiveCard';

export default function InProgressCard({ project, index = 0 }) {
  return (
    <InteractiveCard
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group overflow-hidden rounded-3xl border-2 border-dashed border-accent/40 bg-gradient-to-br from-accent/5 to-accent/10 shadow-sm transition dark:from-accent/10 dark:to-accent/20 relative"
    >
      {/* In Progress Badge */}
      <div className="absolute -top-1 -right-1 z-10">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 animate-pulse rounded-full bg-accent/20"></div>
          <div className="relative h-14 w-14 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold uppercase tracking-wider shadow-lg">
            Coming
          </div>
        </div>
      </div>

      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-ink/10 to-ink/5 dark:from-paper/10 dark:to-paper/5">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <svg className="mx-auto h-16 w-16 text-accent/30 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent/50">In Development</p>
          </div>
        </div>
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105 opacity-20 group-hover:opacity-30"
          />
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block h-2 w-2 rounded-full bg-accent/60 animate-pulse"></span>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent/70">In Progress</p>
        </div>
        <h3 className="mb-3 text-2xl font-semibold leading-tight text-ink/80 dark:text-paper">{project.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-ink/60 dark:text-paper/70">{project.description}</p>

        {project.expectedCompletion && (
          <p className="mb-4 text-xs font-medium text-accent/70 uppercase tracking-wider">
            🎯 Expected: {project.expectedCompletion}
          </p>
        )}

        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent/80"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="pt-4 border-t border-accent/20 flex items-center gap-2">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-wider font-semibold text-ink/50 dark:text-paper/50 mb-1">Progress</p>
            <div className="w-full h-2 bg-ink/10 dark:bg-paper/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent to-accent/60 rounded-full transition-all duration-700"
                style={{ width: `${project.progress || 45}%` }}
              ></div>
            </div>
          </div>
          <p className="text-xs font-bold text-accent ml-2">{project.progress || 45}%</p>
        </div>
      </div>
    </InteractiveCard>
  );
}
