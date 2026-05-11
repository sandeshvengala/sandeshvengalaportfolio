import { useMemo, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import InteractiveCard from '../components/InteractiveCard';
import BackButton from '../components/BackButton';
import InProgressCard from '../components/InProgressCard';
import { inProgressPhotography } from '../data/photography';

export default function Photography() {
  // No filtering, show all
  const filteredPhotos = inProgressPhotography;

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
          A curated set of portrait, wedding, birthday, street, nature, and product captures focused on composition,
          light, and emotion.
        </p>
      </div>



      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPhotos.map((photo, index) => (
          <InProgressCard key={photo.id} project={photo} index={index} />
        ))}
      </div>
    </section>
  );
}
