import { useState, useEffect } from 'react';
import { X, ArrowUpRight, Eye, ChevronLeft, ChevronRight, MessageCircle, Layers } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

// 3D & LED Signboards
const LED_SIGNBOARDS = [
  { id: 'led-1', category: '3D & LED', title: 'Commercial LED Shop Signboard', src: '/signs/sign-1.jpg' },
  { id: 'led-2', category: '3D & LED', title: '3D Acrylic Letters Workshop Fabrication', src: '/signs/sign-2.jpg' },
  { id: 'led-3', category: '3D & LED', title: 'Illuminated LED Signboard Night Display', src: '/signs/sign-3.jpg' },
  { id: 'led-4', category: '3D & LED', title: 'Storefront LED Signboard Installation', src: '/signs/sign-4.jpg' },
  { id: 'led-5', category: '3D & LED', title: 'Backlit Box Signboard Architecture', src: '/signs/sign-5.jpg' },
  { id: 'led-6', category: '3D & LED', title: 'Chrome SS Backlit 3D Dimensional Sign', src: '/signs/sign-6.jpg' },
  { id: 'led-7', category: '3D & LED', title: 'Golden Mirror Backlit Letters Sign', src: '/signs/sign-7.jpg' },
  { id: 'led-8', category: '3D & LED', title: 'Pylon Crane Roadside Commercial Board', src: '/signs/sign-8.jpg' },
  { id: 'led-9', category: '3D & LED', title: 'Glossy ACP Directional Signage Board', src: '/signs/sign-9.jpg' },
  { id: 'led-10', category: '3D & LED', title: 'Illuminated Channel Letter Variations', src: '/signs/sign-10.jpg' },
];

// Backlight Boards (Glow Signs / Lightboxes)
const BACKLIGHT_BOARDS = [
  { id: 'bl-1', category: 'Backlight', title: 'Chiya Bakery & Snacks Red Backlight Board', src: '/signs/backlight-1.jpg' },
  { id: 'bl-2', category: 'Backlight', title: 'Sri Krishna Bakery Wide Backlight Storefront', src: '/signs/backlight-2.jpg' },
  { id: 'bl-3', category: 'Backlight', title: 'Sri Krishna Bakery Vertical Tea & Coffee Glow Board', src: '/signs/backlight-3.jpg' },
  { id: 'bl-4', category: 'Backlight', title: 'Sri Kumaran Ac Dormitory Pillar Glow Board', src: '/signs/backlight-4.jpg' },
  { id: 'bl-5', category: 'Backlight', title: 'Nini Bridal Destination Illuminated Board', src: '/signs/backlight-5.jpg' },
  { id: 'bl-6', category: 'Backlight', title: 'RP Traders Authorized Dealer Glow Board', src: '/signs/backlight-6.jpg' },
  { id: 'bl-7', category: 'Backlight', title: 'Thiruvalluvar Arivalayam Wide Backlight Sign', src: '/signs/backlight-7.jpg' },
  { id: 'bl-8', category: 'Backlight', title: "D'Cars Illuminated Lightbox Showroom Display", src: '/signs/backlight-8.jpg' },
];

// Flex Advertising (Banners & Hoardings)
const FLEX_ADVERTISING = [
  { id: 'fl-1', category: 'Flex Ads', title: 'Chendur Enclave Roadside Flex Banner', src: '/signs/flex-1.jpg' },
  { id: 'fl-2', category: 'Flex Ads', title: 'Propshell Panjappur Pole Flex Board', src: '/signs/flex-2.jpg' },
  { id: 'fl-3', category: 'Flex Ads', title: 'Rotary Mega Star Night Wide Outdoor Hoarding', src: '/signs/flex-3.jpg' },
  { id: 'fl-4', category: 'Flex Ads', title: 'B-Fit Sports Arena Flex Banner Stand', src: '/signs/flex-4.jpg' },
  { id: 'fl-5', category: 'Flex Ads', title: 'Rotary Mega Star Night Street Hoarding Night', src: '/signs/flex-5.jpg' },
];

// Roll Up Banners (Standees / Display Stands)
const ROLLUP_BANNERS = [
  { id: 'ru-1', category: 'Roll Up', title: 'MetaBot AI & VR Awareness Roll Up Standee', src: '/signs/rollup-1.jpg' },
  { id: 'ru-2', category: 'Roll Up', title: 'GetAssist & LandMarket Activator Program Standee', src: '/signs/rollup-2.jpg' },
  { id: 'ru-3', category: 'Roll Up', title: 'The Boys Burger Franchise Opportunity Standee', src: '/signs/rollup-3.jpg' },
  { id: 'ru-4', category: 'Roll Up', title: 'RP Traders Authorized Dealer Roll Up Display Stand', src: '/signs/rollup-4.jpg' },
  { id: 'ru-5', category: 'Roll Up', title: 'The Boys Burger Franchise Opportunity Graphic Standee', src: '/signs/rollup-5.jpg' },
];

const ALL_WORKS = [...LED_SIGNBOARDS, ...BACKLIGHT_BOARDS, ...ROLLUP_BANNERS, ...FLEX_ADVERTISING];

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeImgIndex, setActiveImgIndex] = useState(null);

  const filteredWorks =
    activeTab === 'all'
      ? ALL_WORKS
      : activeTab === 'led'
      ? LED_SIGNBOARDS
      : activeTab === 'backlight'
      ? BACKLIGHT_BOARDS
      : activeTab === 'rollup'
      ? ROLLUP_BANNERS
      : FLEX_ADVERTISING;

  const currentWork = activeImgIndex !== null ? filteredWorks[activeImgIndex] : null;

  // Handle keyboard navigation in next screen modal
  useEffect(() => {
    if (activeImgIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveImgIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveImgIndex((prev) => (prev + 1) % filteredWorks.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveImgIndex((prev) => (prev - 1 + filteredWorks.length) % filteredWorks.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImgIndex, filteredWorks.length]);

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev + 1) % filteredWorks.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev - 1 + filteredWorks.length) % filteredWorks.length);
  };

  const waLink = currentWork
    ? `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
        `Hello AK Creation! I would like to enquire about: ${currentWork.title} (${currentWork.category}).`
      )}`
    : `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
        `Hello AK Creation! I would like to get a quote for signboard works.`
      )}`;

  return (
    <section id="services" className="py-10 sm:py-12 bg-white border-b border-slate-200" aria-label="Our Works">
      <div className="container">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-6">
          <div>
            <div className="section-badge-compact">Our Works</div>
            <h2 className="section-title-compact">Signboard &amp; Advertising Works</h2>
            <p className="section-subtitle-compact text-xs sm:text-sm text-slate-500 mt-1">
              Select any project from the list below to view the full installation photo.
            </p>
          </div>

          {/* Category Filter Tabs (Text-based) */}
          <div className="flex overflow-x-auto pb-1 scrollbar-none gap-1.5">
            <button
              onClick={() => { setActiveTab('all'); setActiveImgIndex(null); }}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold border-none cursor-pointer transition-colors ${
                activeTab === 'all'
                  ? 'bg-yellow-400 text-slate-950 shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              All ({ALL_WORKS.length})
            </button>
            <button
              onClick={() => { setActiveTab('led'); setActiveImgIndex(null); }}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold border-none cursor-pointer transition-colors ${
                activeTab === 'led'
                  ? 'bg-yellow-400 text-slate-950 shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              3D &amp; LED ({LED_SIGNBOARDS.length})
            </button>
            <button
              onClick={() => { setActiveTab('backlight'); setActiveImgIndex(null); }}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold border-none cursor-pointer transition-colors ${
                activeTab === 'backlight'
                  ? 'bg-yellow-400 text-slate-950 shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              Backlight ({BACKLIGHT_BOARDS.length})
            </button>
            <button
              onClick={() => { setActiveTab('rollup'); setActiveImgIndex(null); }}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold border-none cursor-pointer transition-colors ${
                activeTab === 'rollup'
                  ? 'bg-yellow-400 text-slate-950 shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              Roll Up ({ROLLUP_BANNERS.length})
            </button>
            <button
              onClick={() => { setActiveTab('flex'); setActiveImgIndex(null); }}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold border-none cursor-pointer transition-colors ${
                activeTab === 'flex'
                  ? 'bg-yellow-400 text-slate-950 shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              Flex Ads ({FLEX_ADVERTISING.length})
            </button>
          </div>
        </div>

        {/* Text-Only Works List Grid (No Images on Page) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredWorks.map((work, index) => (
            <div
              key={work.id}
              onClick={() => setActiveImgIndex(index)}
              className="bg-white border-1.5 border-slate-200 hover:border-slate-900 rounded-xl p-4 cursor-pointer transition-all duration-150 hover:shadow-xs group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {work.category}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 group-hover:text-slate-900 flex items-center gap-1 transition-colors">
                    View Photo <ArrowUpRight size={13} />
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                  {work.title}
                </h3>
              </div>
              <div className="pt-2.5 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="inline-flex items-center gap-1 text-slate-500">
                  <Eye size={12} className="text-slate-400" /> Click to view photo
                </span>
                <span className="font-semibold text-slate-600">AK Creation</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Next Screen Display: Full-Screen Image Viewer Modal */}
      {currentWork && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5"
          onClick={() => setActiveImgIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border-2 border-yellow-400 shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar on Next Screen */}
            <div className="p-3.5 px-4 bg-slate-950 flex items-center justify-between border-b border-slate-800 text-white">
              <div className="flex items-center gap-2 min-w-0 pr-3">
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-yellow-400 text-slate-950 flex-shrink-0">
                  {currentWork.category}
                </span>
                <h3 className="text-xs sm:text-sm font-bold truncate text-slate-100">
                  {currentWork.title}
                </h3>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-xs text-slate-400 hidden sm:inline">
                  {activeImgIndex + 1} / {filteredWorks.length}
                </span>
                <button
                  onClick={() => setActiveImgIndex(null)}
                  className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center border border-slate-700 cursor-pointer hover:bg-slate-700"
                  aria-label="Close image screen"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Main Image Display Screen */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[72vh] p-2">
              <img
                src={currentWork.src}
                alt={currentWork.title}
                className="w-auto h-auto max-w-full max-h-[70vh] object-contain rounded-md"
              />

              {/* Prev / Next navigation buttons on next screen */}
              {filteredWorks.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center border border-slate-700 cursor-pointer transition-transform hover:scale-110 shadow-lg"
                    aria-label="Previous work photo"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center border border-slate-700 cursor-pointer transition-transform hover:scale-110 shadow-lg"
                    aria-label="Next work photo"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Bar with WhatsApp Enquiry */}
            <div className="p-3 px-4 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800">
              <div className="text-[11px] text-slate-400 text-center sm:text-left">
                Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">→</kbd> to browse, or <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">ESC</kbd> to exit.
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-compact-yellow text-xs py-1.5 px-3.5 no-underline flex items-center gap-1.5 flex-shrink-0"
              >
                <MessageCircle size={14} />
                <span>Enquire About This Work</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
