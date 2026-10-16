import { useEffect, useRef } from 'react';

export default function PhotoLightbox({ photos, activeIndex, onClose, onChange }) {
  const closeButtonRef = useRef(null);
  const photo = photos[activeIndex];

  useEffect(() => {
    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onChange((activeIndex - 1 + photos.length) % photos.length);
      if (event.key === 'ArrowRight') onChange((activeIndex + 1) % photos.length);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex, onChange, onClose, photos.length]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.title} preview`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative flex max-h-full w-full max-w-6xl flex-col items-center">
        <div className="mb-4 flex w-full items-center justify-between gap-4 text-paper">
          <div>
            <p className="text-sm font-semibold">{photo.title}</p>
            <p className="text-xs text-paper/60">{photo.category} · {activeIndex + 1} of {photos.length}</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="rounded-full border border-paper/25 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition hover:border-paper hover:bg-paper/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Close
          </button>
        </div>

        <div className="flex min-h-0 w-full items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => onChange((activeIndex - 1 + photos.length) % photos.length)}
            className="rounded-full border border-paper/25 px-3 py-2 text-xl text-paper transition hover:bg-paper/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Previous photograph"
          >
            <span aria-hidden="true">&larr;</span>
          </button>
          <img src={photo.image} alt={photo.alt || photo.title} className="max-h-[70vh] max-w-[calc(100%-5rem)] object-contain" />
          <button
            type="button"
            onClick={() => onChange((activeIndex + 1) % photos.length)}
            className="rounded-full border border-paper/25 px-3 py-2 text-xl text-paper transition hover:bg-paper/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Next photograph"
          >
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        {photo.description && <p className="mt-4 max-w-2xl text-center text-sm text-paper/70">{photo.description}</p>}
      </div>
    </div>
  );
}
