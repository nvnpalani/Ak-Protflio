import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { WORK_CATEGORIES } from '../data/worksData';

export default function WorkCategoryPage() {
  const { categorySlug } = useParams();
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Touch swipe support for mobile devices
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Current category data
  const currentCategory = WORK_CATEGORIES.find((c) => c.slug === categorySlug) || WORK_CATEGORIES[0];
  const items = currentCategory.items || [];

  // Scroll to top and reset lightbox on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedIndex(null);
  }, [categorySlug]);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  }, [items.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  }, [items.length]);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        showNext();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex, showNext, showPrev]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      showNext();
    } else if (distance < -minSwipeDistance) {
      showPrev();
    }
  };

  const activeItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="container">

        {/* Top Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-300 px-3 py-1.5 rounded-md transition-colors no-underline"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>

          {/* Compact Category Switcher (No Count) */}
          <div className="flex flex-wrap gap-1.5">
            {WORK_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/works/${cat.slug}`}
                className={`px-2.5 py-1 rounded text-xs font-semibold border transition-colors no-underline ${
                  cat.slug === currentCategory.slug
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="border-b border-slate-200 pb-3 mb-5">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
            {currentCategory.title}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Signboard &amp; advertising works by AK Creation &bull; Click any image to view full screen
          </p>
        </div>

        {/* Compact Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col hover:border-slate-400 hover:shadow-md transition-all cursor-pointer group"
              role="button"
              tabIndex={0}
              aria-label={`View full image: ${item.alt || item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedIndex(index);
                }
              }}
            >
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                <img
                  src={item.src}
                  alt={item.alt || item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2 rounded-full bg-slate-950/70 text-white shadow-lg backdrop-blur-xs">
                    <ZoomIn size={18} />
                  </span>
                </div>
              </div>
              <div className="p-2.5 bg-slate-50 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-800 truncate" title={item.alt || item.title}>
                  {item.alt || item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Back Button */}
        <div className="pt-4 border-t border-slate-200">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-300 px-3 py-1.5 rounded-md transition-colors no-underline"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>

      </div>

      {/* Big Image Lightbox Modal */}
      {selectedIndex !== null && activeItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col justify-between select-none"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview: ${activeItem.title}`}
          onClick={() => setSelectedIndex(null)}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-slate-950/50 backdrop-blur-sm z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5 text-white min-w-0 pr-3">
              <span className="bg-yellow-400 text-slate-950 text-[11px] font-bold px-2 py-0.5 rounded shadow-xs shrink-0">
                {currentCategory.title}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-200 truncate">
                {activeItem.title}
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono font-medium text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                {selectedIndex + 1} / {items.length}
              </span>
              <button
                onClick={() => setSelectedIndex(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                aria-label="Close image preview"
                title="Close (Esc)"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Center Display Area with Prev/Next Controls */}
          <div
            className="relative flex-1 flex items-center justify-center p-3 sm:p-6 overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Previous Button */}
            {items.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-3 sm:left-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center border border-white/20 shadow-xl backdrop-blur-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Previous image"
                title="Previous (Left Arrow)"
              >
                <ChevronLeft size={26} />
              </button>
            )}

            {/* Big Image Display */}
            <div
              className="relative max-w-5xl max-h-[75vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                key={activeItem.src}
                src={activeItem.src}
                alt={activeItem.alt || activeItem.title}
                className="max-h-[72vh] sm:max-h-[78vh] max-w-full w-auto h-auto object-contain rounded-lg shadow-2xl border border-white/15 anim-slide-down"
              />
            </div>

            {/* Next Button */}
            {items.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 sm:right-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center border border-white/20 shadow-xl backdrop-blur-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Next image"
                title="Next (Right Arrow)"
              >
                <ChevronRight size={26} />
              </button>
            )}
          </div>

          {/* Bottom Bar Caption */}
          <div
            className="px-4 py-2.5 bg-slate-950/50 border-t border-white/10 text-center text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-1 sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-medium text-white truncate max-w-lg">
              {activeItem.title}
            </p>
            <p className="text-slate-400 text-[11px] hidden sm:block">
              Use Left &amp; Right arrows to navigate &bull; Press Esc to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
