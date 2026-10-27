import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ZoomIn, X } from 'lucide-react';
import { WORK_CATEGORIES } from '../data/worksData';

const PROMOTIONAL_WORKS = [
  {
    id: 'hero-barricade',
    title: 'Traffic Barricade Ads',
    category: 'Barricade Ads',
    src: '/signs/barricade-propshell.png',
    description: 'Propshell Panjappur Venkateshwara Nagar high-visibility road barricade advertising board.',
  },
  {
    id: 'hero-bus',
    title: 'Bus Backside Branding',
    category: 'Bus Backside Ads',
    src: '/signs/bus-sri-vannamayil.jpg',
    description: 'Sri Vannamayil Chits public transit bus backside promotional advertising.',
  },
  {
    id: 'hero-auto',
    title: 'Auto Backside & Side Ads',
    category: 'Auto Backside Ads',
    src: '/signs/roadshow-auto-propshell.jpg',
    description: 'Propshell Panjappur dual-angle passenger auto rickshaw transit advertisement.',
  },
  {
    id: 'hero-canopy',
    title: 'Canopy Tent & Standees',
    category: 'Canopy Ads',
    src: '/signs/canopy-tent.jpg',
    description: 'MY3 Overseas Education promotional canopy booth with matching roll-up standees.',
  },
  {
    id: 'hero-flags',
    title: 'Feather Flag Banners',
    category: 'Flag Ads',
    src: '/signs/flag-ads.jpg',
    description: 'Teardrop and feather flag banner advertising stands for outdoor events.',
  },
  {
    id: 'hero-billboard',
    title: 'Highway Unipole Billboard',
    category: 'Hoarding & Flex',
    src: '/signs/propshell-billboard.jpg',
    description: 'Propshell Panjappur Venkateshwara Nagar high-visibility illuminated highway hoarding.',
  },
  {
    id: 'hero-umbrella',
    title: 'Promotional Branding Umbrella',
    category: 'Umbrella Ads',
    src: '/signs/umbrella-ads.jpg',
    description: 'Dansberg branded outdoor umbrella with sturdy steel tripod stand.',
  },
];

export default function Hero() {
  const [showMore, setShowMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="home"
      className="pt-16 pb-8 sm:pt-20 sm:pb-10 bg-[#fffefc] border-b border-slate-200"
      aria-label="Hero"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Column: Equal Column Space */}
          <div className="flex flex-col justify-center lg:pr-6">
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.14] text-slate-900 tracking-tight">
              AK CREATION{' '}
              <br />
              <span className="text-yellow-500 text-xl sm:text-2xl font-bold">
                LED Signage &amp; Outdoor Advertising
              </span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mb-4">
              We provide high-quality and professional advertising and signage solutions to meet all your branding and promotional needs
            </p>

            {/* Our Services Horizontal Display */}
            <div className="pt-3 border-t border-slate-200/80">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 bg-yellow-100 border border-yellow-300 px-2 py-0.5 rounded">
                  Our Services
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  Explore work categories:
                </span>
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                {WORK_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/works/${cat.slug}`}
                    className="inline-flex items-center px-2.5 py-1.5 bg-slate-50 hover:bg-yellow-400 text-slate-900 border border-slate-200 hover:border-slate-900 rounded-lg font-bold text-xs transition-all no-underline shadow-2xs hover:-translate-y-0.5"
                  >
                    <span>{cat.title}</span>
                  </Link>
                ))}

                {/* Read More button directly next to Roadshow */}
                <button
                  type="button"
                  onClick={() => setShowMore(!showMore)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer shadow-2xs ${
                    showMore
                      ? 'bg-yellow-400 text-slate-950 border border-slate-900 ring-2 ring-yellow-400/30'
                      : 'bg-yellow-100 hover:bg-yellow-200 text-amber-900 border border-yellow-300'
                  }`}
                  aria-expanded={showMore}
                >
                  <span>{showMore ? 'Show Less' : 'Read More'}</span>
                  {showMore ? (
                    <ChevronUp size={13} className="shrink-0" />
                  ) : (
                    <ChevronDown size={13} className="shrink-0" />
                  )}
                </button>
              </div>

              {/* Default hidden: displayed when Read More is clicked */}
              {showMore && (
                <div className="mt-3.5 p-3 sm:p-3.5 bg-white rounded-xl border border-slate-200/90 shadow-xs anim-slide-down">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                      Promotional &amp; Outdoor Displays
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Click to enlarge</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5">
                    {PROMOTIONAL_WORKS.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setSelectedImage(item)}
                        className="group relative rounded-lg overflow-hidden border border-slate-200 bg-slate-50 hover:border-slate-900 transition-all cursor-pointer shadow-2xs hover:shadow-xs"
                      >
                        <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-white/95 text-slate-900 p-1 rounded-full shadow-xs">
                              <ZoomIn size={13} />
                            </span>
                          </div>
                        </div>
                        <div className="p-1.5 bg-white">
                          <p className="text-[11px] font-bold text-slate-900 truncate leading-snug">
                            {item.title}
                          </p>
                          <p className="text-[10px] text-yellow-600 font-semibold truncate">
                            {item.category}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Right Column: Founder with Left Dividing Line */}
          <div className="flex justify-center items-center lg:border-l lg:border-slate-200 lg:pl-10">
            <div className="relative max-w-[260px] sm:max-w-xs lg:max-w-sm w-full mx-auto">

              {/* Card with Photo */}
              <div className="bg-white p-2 sm:p-2.5 rounded-xl shadow-xs border border-slate-200/80">
                <div className="rounded-lg overflow-hidden aspect-square bg-slate-100">
                  <img
                    src="/founder.jpg"
                    alt="AK Creation Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal for Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 anim-slide-down"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div className="bg-slate-950 max-h-[65vh] flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-4 bg-white">
              <span className="inline-block px-2 py-0.5 bg-yellow-100 border border-yellow-300 text-amber-900 font-bold text-[10px] rounded mb-1">
                {selectedImage.category}
              </span>
              <h3 className="font-bold text-base text-slate-900">{selectedImage.title}</h3>
              <p className="text-xs text-slate-600 mt-1">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
