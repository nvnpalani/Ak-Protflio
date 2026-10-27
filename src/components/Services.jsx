import { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, ZoomIn, MessageCircle, Layers, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

// 3D & LED Signboards
const LED_SIGNBOARDS = [
  { id: 'led-1', src: '/signs/sign-1.jpg', alt: 'Commercial LED Shop Signboard' },
  { id: 'led-2', src: '/signs/sign-2.jpg', alt: '3D Acrylic Letters Workshop' },
  { id: 'led-3', src: '/signs/sign-3.jpg', alt: 'Illuminated LED Signboard Night' },
  { id: 'led-4', src: '/signs/sign-4.jpg', alt: 'Storefront LED Signboard Installation' },
  { id: 'led-5', src: '/signs/sign-5.jpg', alt: 'Backlit Box Signboard' },
  { id: 'led-6', src: '/signs/sign-6.jpg', alt: 'Chrome SS Backlit 3D Sign' },
  { id: 'led-7', src: '/signs/sign-7.jpg', alt: 'Golden Mirror Backlit Letters' },
  { id: 'led-8', src: '/signs/sign-8.jpg', alt: 'Pylon Crane Roadside Installation' },
  { id: 'led-9', src: '/signs/sign-9.jpg', alt: 'Glossy ACP Directional Board' },
  { id: 'led-10', src: '/signs/sign-10.jpg', alt: 'Illuminated Channel Letter Types' },
];

// Backlight Boards (Glow Signs / Lightboxes)
const BACKLIGHT_BOARDS = [
  { id: 'bl-1', src: '/signs/backlight-1.jpg', alt: 'Chiya Bakery & Snacks Red Backlight Board' },
  { id: 'bl-2', src: '/signs/backlight-2.jpg', alt: 'Sri Krishna Bakery Wide Backlight Board' },
  { id: 'bl-3', src: '/signs/backlight-3.jpg', alt: 'Sri Krishna Bakery Vertical Tea Coffee Backlight Board' },
  { id: 'bl-4', src: '/signs/backlight-4.jpg', alt: 'Sri Kumaran Ac Dormitory Pillar Backlight Board' },
  { id: 'bl-5', src: '/signs/backlight-5.jpg', alt: 'Nini Bridal Destination Backlight Board' },
  { id: 'bl-6', src: '/signs/backlight-6.jpg', alt: 'RP Traders Authorized Dealer Backlight Board' },
  { id: 'bl-7', src: '/signs/backlight-7.jpg', alt: 'Thiruvalluvar Arivalayam Wide Pink Backlight Board' },
  { id: 'bl-8', src: '/signs/backlight-8.jpg', alt: "D'Cars Illuminated Lightbox Display" },
];

// Flex Advertising (Banners & Hoardings)
const FLEX_ADVERTISING = [
  { id: 'fl-1', src: '/signs/flex-1.jpg', alt: 'Chendur Enclave Roadside Flex Banner' },
  { id: 'fl-2', src: '/signs/flex-2.jpg', alt: 'Propshell Panjappur Pole Flex Board' },
  { id: 'fl-3', src: '/signs/flex-3.jpg', alt: 'Rotary Mega Star Night Wide Outdoor Hoarding' },
  { id: 'fl-4', src: '/signs/flex-4.jpg', alt: 'B-Fit Sports Arena Flex Banner Stand' },
  { id: 'fl-5', src: '/signs/flex-5.jpg', alt: 'Rotary Mega Star Night Street Hoarding Night' },
];

// Roll Up Banners (Standees / Display Stands)
const ROLLUP_BANNERS = [
  { id: 'ru-1', src: '/signs/rollup-1.jpg', alt: 'MetaBot AI & VR Awareness Roll Up Standee' },
  { id: 'ru-2', src: '/signs/rollup-2.jpg', alt: 'GetAssist & LandMarket Activator Program Roll Up Banner' },
  { id: 'ru-3', src: '/signs/rollup-3.jpg', alt: 'The Boys Burger Franchise Opportunity Standee' },
  { id: 'ru-4', src: '/signs/rollup-4.jpg', alt: 'RP Traders Authorized Dealer Roll Up Display Stand' },
  { id: 'ru-5', src: '/signs/rollup-5.jpg', alt: 'The Boys Burger Franchise Opportunity Graphic Standee' },
];

const CATEGORIES = [
  {
    key: 'flex',
    title: 'Flex Ads',
    count: FLEX_ADVERTISING.length,
    desc: 'Roadside hoardings, outdoor flex banners & promotional event displays.',
    items: FLEX_ADVERTISING,
  },
  {
    key: 'backlight',
    title: 'Backlight',
    count: BACKLIGHT_BOARDS.length,
    desc: 'Illuminated glow signboards, storefront lightboxes & acrylic displays.',
    items: BACKLIGHT_BOARDS,
  },
  {
    key: 'led',
    title: '3D & LED',
    count: LED_SIGNBOARDS.length,
    desc: '3D acrylic channel letters, titanium chrome finishes & illuminated LED boards.',
    items: LED_SIGNBOARDS,
  },
  {
    key: 'rollup',
    title: 'Roll Up',
    count: ROLLUP_BANNERS.length,
    desc: 'Retractable roll-up banners, event standees & showroom display stands.',
    items: ROLLUP_BANNERS,
  },
];

export default function Services() {
  const [activeCategoryKey, setActiveCategoryKey] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);

  const selectedCategory = CATEGORIES.find((c) => c.key === activeCategoryKey);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (previewImg) {
          setPreviewImg(null);
        } else if (activeCategoryKey) {
          setActiveCategoryKey(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewImg, activeCategoryKey]);

  const waLink = (title) =>
    `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      `Hello AK Creation! I would like to get a quote and details for: ${title}.`
    )}`;

  return (
    <section id="services" className="py-12 sm:py-16 bg-white border-b border-slate-200" aria-label="Our Works">
      <div className="container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <div className="section-badge-compact">Our Works</div>
          <h2 className="section-title-compact">Signboard &amp; Advertising Works</h2>
          <p className="section-subtitle-compact text-xs sm:text-sm text-slate-500 mt-1">
            Click on any category below to view our completed installation works on the next screen.
          </p>
        </div>

        {/* 4 Category Text Cards (Only Text on Page) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.key}
              onClick={() => setActiveCategoryKey(cat.key)}
              className="bg-white border-2 border-slate-200 hover:border-slate-900 rounded-2xl p-6 cursor-pointer transition-all duration-200 hover:shadow-md group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    Category
                  </span>
                  <span className="text-xs font-black bg-yellow-400 text-slate-950 px-2.5 py-0.5 rounded border border-slate-900">
                    {cat.count} Works
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 group-hover:text-amber-800 transition-colors mb-2">
                  {cat.title} ({cat.count})
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-slate-950">
                <span>View {cat.count} Photos</span>
                <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-yellow-400 flex items-center justify-center transition-colors">
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* NEXT SCREEN DISPLAY: Category Image Gallery Modal */}
      {selectedCategory && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setActiveCategoryKey(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-2xl border-2 border-yellow-400 shadow-2xl flex flex-col my-auto overflow-hidden max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar on Next Screen */}
            <div className="p-4 px-5 bg-slate-950 flex items-center justify-between border-b border-slate-800 text-white">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveCategoryKey(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 cursor-pointer transition-colors"
                >
                  <ArrowLeft size={14} />
                  <span>Back</span>
                </button>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                    {selectedCategory.title} ({selectedCategory.count} Works)
                  </h3>
                  <p className="text-[11px] text-slate-400 hidden sm:block">
                    Click any photo to zoom in full size
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveCategoryKey(null)}
                className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center border border-slate-700 cursor-pointer hover:bg-slate-700"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Next Screen Images Grid */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-950/60">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {selectedCategory.items.map((img) => (
                  <div
                    key={img.id}
                    onClick={() => setPreviewImg(img)}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-slate-800 bg-slate-950 cursor-pointer shadow-md hover:border-yellow-400 transition-all duration-200"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <span className="w-8 h-8 rounded-full bg-yellow-400 text-slate-950 flex items-center justify-center shadow-md">
                        <ZoomIn size={16} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Bar with WhatsApp Enquiry */}
            <div className="p-3.5 px-5 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800">
              <span className="text-xs text-slate-400 text-center sm:text-left">
                Need a {selectedCategory.title} signboard or banner for your company?
              </span>
              <a
                href={waLink(`${selectedCategory.title} Signboards`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-compact-yellow text-xs py-1.5 px-4 no-underline flex items-center gap-1.5"
              >
                <MessageCircle size={14} />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* FULL ZOOM SINGLE IMAGE LIGHTBOX */}
      {previewImg && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-5"
          onClick={() => setPreviewImg(null)}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImg(null)}
              className="absolute -top-11 right-0 w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center border border-slate-700 cursor-pointer hover:bg-slate-700 z-10"
              aria-label="Close zoom"
            >
              <X size={18} />
            </button>

            <img
              src={previewImg.src}
              alt={previewImg.alt}
              className="w-auto h-auto max-w-full max-h-[82vh] object-contain rounded-xl border border-slate-800 shadow-2xl"
            />

            <div className="mt-3 flex items-center justify-between w-full px-2 text-white">
              <span className="text-xs text-slate-300 truncate max-w-md">
                {previewImg.alt}
              </span>
              <a
                href={waLink(previewImg.alt)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-compact-yellow text-xs py-1.5 px-3 no-underline inline-flex items-center gap-1.5"
              >
                <MessageCircle size={13} />
                <span>Quote for this Work</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
