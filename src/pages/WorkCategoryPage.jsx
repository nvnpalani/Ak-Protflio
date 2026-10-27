import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Sparkles, Building2, ExternalLink } from 'lucide-react';
import { WORK_CATEGORIES } from '../data/worksData';
import { SITE_CONFIG } from '../data/config';

export default function WorkCategoryPage() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  const currentCategory = WORK_CATEGORIES.find((c) => c.slug === categorySlug) || WORK_CATEGORIES[0];

  const waLink = (workTitle) =>
    `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      `Hello AK Creation! I am interested in: ${workTitle} (${currentCategory.title}). Please provide a quote.`
    )}`;

  return (
    <div className="min-h-screen bg-[#fffefc] pt-20 pb-16">
      <div className="container">

        {/* Top Breadcrumb & Navigation */}
        <div className="flex items-center justify-between gap-4 mb-6 pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-950 bg-white border border-slate-200 hover:border-slate-400 px-3.5 py-2 rounded-lg transition-all shadow-xs no-underline"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              `Hello AK Creation! I would like to get a quote for ${currentCategory.title}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-compact-yellow text-xs py-2 px-4 no-underline"
          >
            <MessageCircle size={14} />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>

        {/* Screen Header */}
        <div className="bg-white border-2 border-slate-900 rounded-2xl p-6 sm:p-8 mb-8 shadow-[4px_4px_0px_#0f172a]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="section-badge-compact mb-2">
                <Sparkles size={11} className="text-amber-800" />
                Work Category Screen
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2">
                {currentCategory.title} ({currentCategory.count} Works)
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
                {currentCategory.desc} Designed, manufactured, and installed by AK Creation.
              </p>
            </div>

            {/* Quick Category Switcher Tabs */}
            <div className="flex flex-wrap gap-2">
              {WORK_CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/works/${cat.slug}`}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all no-underline ${
                    cat.slug === currentCategory.slug
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
                  }`}
                >
                  {cat.title} ({cat.count})
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* The Images Gallery for this Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {currentCategory.items.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-slate-200 hover:border-slate-900 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-200">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Card Details */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <h3 className="text-sm font-bold text-slate-900 mb-3 leading-snug">
                  {item.alt}
                </h3>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-slate-500 uppercase">
                    {currentCategory.title}
                  </span>
                  <a
                    href={waLink(item.alt)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md transition-colors no-underline"
                  >
                    <MessageCircle size={13} />
                    <span>Quote</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Back & Call To Action */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1">
              Need custom {currentCategory.title} signage for your business?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Get direct factory prices, premium weather-resistant materials, and on-site fitting across Tamil Nadu.
            </p>
          </div>
          <div className="flex gap-2.5 flex-shrink-0">
            <Link
              to="/"
              className="btn-compact-dark text-xs py-2 px-4 no-underline"
            >
              Back to Home
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                `Hello AK Creation! I need a quote for ${currentCategory.title}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-compact-yellow text-xs py-2 px-4 no-underline"
            >
              Get Custom Quote
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
