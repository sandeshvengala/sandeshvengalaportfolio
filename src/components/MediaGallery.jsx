export default function MediaGallery({ items, onOpen }) {
  if (!items.length) {
    return (
      <div className="rounded-3xl border border-dashed border-ink/20 bg-white/60 px-6 py-16 text-center dark:border-paper/20 dark:bg-ink/25">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Gallery awaiting media</p>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink/65 dark:text-paper/70">
          Add verified photographs to the media manifest to publish them here. The gallery is intentionally empty until your
          original files are available locally.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onOpen(index)}
          className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white text-left shadow-card transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:border-paper/10 dark:bg-ink/35 dark:focus-visible:ring-offset-ink"
          style={{ aspectRatio: item.aspectRatio || '4 / 3' }}
          aria-label={`Open ${item.title}`}
        >
          <img
            src={item.image}
            alt={item.alt || item.title}
            loading={index < 3 ? 'eager' : 'lazy'}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 pb-4 pt-12 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="block text-sm font-semibold">{item.title}</span>
            <span className="mt-1 block text-xs text-white/75">{item.category}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
