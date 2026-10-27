import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { WORK_CATEGORIES } from '../data/worksData';

export default function WorkCategoryPage() {
  const { categorySlug } = useParams();

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  const currentCategory = WORK_CATEGORIES.find((c) => c.slug === categorySlug) || WORK_CATEGORIES[0];

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

          {/* Compact Category Switcher (Count Removed) */}
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

        {/* Header (Count Removed) */}
        <div className="border-b border-slate-200 pb-3 mb-5">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
            {currentCategory.title}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Signboard &amp; advertising works by AK Creation
          </p>
        </div>

        {/* Compact Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {currentCategory.items.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col hover:border-slate-400 transition-colors"
            >
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt || item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-2.5 bg-slate-50 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-800 truncate" title={item.title}>
                  {item.title}
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
    </div>
  );
}
