import SectionTitle from '../components/SectionTitle';
import InteractiveCard from '../components/InteractiveCard';
import BackButton from '../components/BackButton';
import { creativeMediaProjects } from '../data/creativeMedia';
import { webProjects } from '../data/webProjects';


export default function Projects() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-4 py-12">
      <div className="mb-4 flex items-center justify-between">
        <BackButton />
      </div>
      <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        Creative Sections
      </p>
      <SectionTitle title="Works" subtitle="Portfolio Sections" />

      <div className="mb-8 rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/30">
        <p className="max-w-3xl text-lg leading-relaxed text-ink/80 dark:text-paper/80">
          Explore selected work from 2+ years of visual practice across graphic design, photography, photo editing, video
          editing, videography, and web development. I work with companies, brands, and direct clients to create polished
          visual content. Project records live in data files so new original media can be added without changing the page layout.
        </p>
      </div>

      {creativeMediaProjects.length > 0 && (
        <div className="mb-10 grid gap-6 md:grid-cols-2">
          {creativeMediaProjects.map((project) => (
            <InteractiveCard key={project.id} className="overflow-hidden rounded-3xl border border-ink/10 bg-white/85 shadow-card dark:border-paper/10 dark:bg-ink/35">
              <div className="bg-ink/10 dark:bg-paper/10">
                {project.mediaType === 'video' ? (
                  <video
                    src={project.media}
                    poster={project.thumbnail}
                    controls
                    playsInline
                    preload="metadata"
                    className="block h-auto w-full object-contain"
                    style={{ aspectRatio: '9 / 16' }}
                  />
                ) : (
                  <img src={project.thumbnail} alt={project.title} loading="lazy" className="block h-auto w-full object-contain" />
                )}
              </div>
              <div className="p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{project.category}</p>
                <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm leading-relaxed text-ink/70 dark:text-paper/80">{project.description}</p>
              </div>
            </InteractiveCard>
          ))}
        </div>
      )}

      {creativeMediaProjects.length === 0 && (
        <div className="mb-10 rounded-3xl border border-dashed border-accent/35 bg-accent/5 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Photography and video projects</p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70 dark:text-paper/75">
            Original project media is not available in the workspace yet. Add verified records to the media manifest after
            downloading the Drive folders.
          </p>
        </div>
      )}

      {webProjects.length > 0 && (
        <div className="mb-10 grid gap-6 md:grid-cols-2">
          {webProjects.map((project) => (
            <InteractiveCard key={project.id} className="overflow-hidden rounded-3xl border border-ink/10 bg-white/85 shadow-card dark:border-paper/10 dark:bg-ink/35">
              <img src={project.image} alt={project.title} loading="lazy" className="h-48 w-full object-contain bg-white p-4" />
              <div className="p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{project.category}</p>
                <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-ink/70 dark:text-paper/80">{project.description}</p>
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">Visit project &rarr;</a>}
              </div>
            </InteractiveCard>
          ))}
        </div>
      )}

    </section>
  );
}
