import { useMemo, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import BackButton from '../components/BackButton';
import MediaGallery from '../components/MediaGallery';
import PhotoLightbox from '../components/PhotoLightbox';
import { photographyMedia } from '../data/creativeMedia';

export default function Photography() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(null);
  const categories = useMemo(
    () => ['All', ...new Set(photographyMedia.map((photo) => photo.category).filter(Boolean))],
    []
  );
  const filteredPhotos = useMemo(
    () => activeCategory === 'All' ? photographyMedia : photographyMedia.filter((photo) => photo.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-8 md:py-10">
      <div className="mb-4 flex items-center justify-between">
        <BackButton />
      </div>
      <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        Visual Stories
      </p>
      <SectionTitle title="Photography" subtitle="Visual Stories" />

      <div className="mb-8 rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-card backdrop-blur-sm dark:border-paper/10 dark:bg-ink/30">
        <p className="max-w-3xl text-lg leading-relaxed text-ink/80 dark:text-paper/80">
          A curated home for original portrait, wedding, birthday, street, nature, and product work, supported by a hands-on
          photo editing workflow in retouching, color correction, composition, and visual storytelling. Only locally verified
          media is published here.
        </p>
      </div>

      {categories.length > 1 && (
        <div className="mb-8 flex flex-wrap gap-2" aria-label="Photography categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                activeCategory === category
                  ? 'border-accent bg-accent text-white'
                  : 'border-ink/15 bg-white/70 text-ink/70 hover:border-accent hover:text-accent dark:border-paper/15 dark:bg-ink/25 dark:text-paper/70'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <MediaGallery
        items={filteredPhotos}
        onOpen={(index) => setActiveIndex(index)}
      />

      {activeIndex !== null && (
        <PhotoLightbox
          photos={filteredPhotos}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChange={setActiveIndex}
        />
      )}
    </section>
  );
}
