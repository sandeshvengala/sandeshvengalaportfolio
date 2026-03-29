import { useMemo, useState } from 'react';
import InteractiveCard from './InteractiveCard';

const sampleThemes = {
  realistic: [
    {
      title: 'Indian Wedding Photography',
      src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Diwali Festival Lights',
      src: 'https://images.unsplash.com/photo-1608500218802-4f58e8e5b7f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Indian Street Market',
      src: 'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&w=800&q=80'
    }
  ],
  poster: [
    {
      title: 'Bollywood Style Poster',
      src: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Holi Color Poster',
      src: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Indian Product Ad',
      src: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=800&q=80'
    }
  ]
};

const sampleVideos = [
  {
    title: 'Indian Wedding Style Reel',
    src: 'https://cdn.coverr.co/videos/coverr-indian-wedding-5176/1080p.mp4'
  },
  {
    title: 'Festival Celebration (India vibe)',
    src: 'https://cdn.coverr.co/videos/coverr-holi-colors-1576/1080p.mp4'
  },
  {
    title: 'Product Ad Style',
    src: 'https://cdn.coverr.co/videos/coverr-happy-woman-shopping-5173/1080p.mp4'
  }
];

export default function ScrollMediaSection() {
  const [theme, setTheme] = useState('realistic');

  const sampleImages = useMemo(() => sampleThemes[theme] ?? sampleThemes.realistic, [theme]);

  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-14 md:py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-accent">Media Showcase</p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">Sample Images and Videos</h2>
        </div>

        <div className="inline-flex rounded-full border border-ink/15 bg-white/75 p-1 text-xs font-semibold uppercase tracking-[0.12em] shadow-sm dark:border-paper/15 dark:bg-ink/60">
          <button
            type="button"
            onClick={() => setTheme('realistic')}
            className={`rounded-full px-3 py-2 transition ${
              theme === 'realistic'
                ? 'bg-accent text-white'
                : 'text-ink/70 hover:text-accent dark:text-paper/70 dark:hover:text-accent'
            }`}
            aria-pressed={theme === 'realistic'}
          >
            Realistic Photo
          </button>
          <button
            type="button"
            onClick={() => setTheme('poster')}
            className={`rounded-full px-3 py-2 transition ${
              theme === 'poster'
                ? 'bg-accent text-white'
                : 'text-ink/70 hover:text-accent dark:text-paper/70 dark:hover:text-accent'
            }`}
            aria-pressed={theme === 'poster'}
          >
            Graphic Poster
          </button>
        </div>
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-3">
        {sampleImages.map((item, index) => (
          <InteractiveCard
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card dark:border-paper/10 dark:bg-ink/40"
          >
            <img src={item.src} alt={item.title} className="h-56 w-full object-cover" loading="lazy" />
            <p className="px-4 py-3 text-sm font-semibold">{item.title}</p>
          </InteractiveCard>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {sampleVideos.map((item, index) => (
          <InteractiveCard
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="overflow-hidden rounded-2xl border border-ink/10 bg-black shadow-card dark:border-paper/10"
          >
            <video
              className="h-56 w-full object-cover"
              src={item.src}
              controls
              preload="metadata"
              playsInline
            />
            <p className="px-4 py-3 text-sm font-semibold text-white/90">{item.title}</p>
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
}

