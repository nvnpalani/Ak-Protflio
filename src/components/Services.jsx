import { useState } from 'react';
import { X, ZoomIn, MessageCircle } from 'lucide-react';
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

export default function Services() {
  const [activeTab, setActiveTab] = useState('flex');
  const [activeImg, setActiveImg] = useState(null);

  const getCategoryName = () => {
    if (activeTab === 'flex') return 'Flex Advertising & Hoardings';
    if (activeTab === 'backlight') return 'Backlight & Glow Signboards';
    if (activeTab === 'led') return '3D & LED Signboards';
    return 'Signboard & Branding Works';
  };

  const waLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello AK Creation! I would like to request a quotation and proposal for: ${getCategoryName()}.`
  )}`;

  const currentImages =
    activeTab === 'flex'
      ? FLEX_ADVERTISING
      : activeTab === 'backlight'
      ? BACKLIGHT_BOARDS
      : activeTab === 'led'
      ? LED_SIGNBOARDS
      : [...FLEX_ADVERTISING, ...BACKLIGHT_BOARDS, ...LED_SIGNBOARDS];

  return (
    <section id="services" className="py-10 bg-white border-b border-slate-200" aria-label="Signboard Services">
      <div className="container">
        
        {/* Compact Header with Tabs */}
        <div className="flex flex-col gap-4 mb-6">
          <div>
            <div className="section-badge-compact">Our Works</div>
            <h2 className="section-title-compact">Signboard &amp; Advertising Works</h2>
            <p className="section-subtitle-compact text-xs sm:text-sm text-slate-500 mt-1">
              Explore our completed signage, glow boards, and outdoor advertising works.
            </p>
          </div>

          {/* Filter Tabs + Quote */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex overflow-x-auto pb-1 scrollbar-none gap-1.5">
              <button
                onClick={() => setActiveTab('flex')}
                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold border-none cursor-pointer transition-colors ${
                  activeTab === 'flex'
                    ? 'bg-yellow-400 text-slate-950'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
                }`}
              >
                Flex Ads ({FLEX_ADVERTISING.length})
              </button>
              <button
                onClick={() => setActiveTab('backlight')}
                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold border-none cursor-pointer transition-colors ${
                  activeTab === 'backlight'
                    ? 'bg-yellow-400 text-slate-950'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
                }`}
              >
                Backlight ({BACKLIGHT_BOARDS.length})
              </button>
              <button
                onClick={() => setActiveTab('led')}
                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold border-none cursor-pointer transition-colors ${
                  activeTab === 'led'
                    ? 'bg-yellow-400 text-slate-950'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
                }`}
              >
                3D &amp; LED ({LED_SIGNBOARDS.length})
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold border-none cursor-pointer transition-colors ${
                  activeTab === 'all'
                    ? 'bg-yellow-400 text-slate-950'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
                }`}
              >
                All ({FLEX_ADVERTISING.length + BACKLIGHT_BOARDS.length + LED_SIGNBOARDS.length})
              </button>
            </div>
          </div>
        </div>

        {/* Pure Image Grid (Only Images, No Text Clutter) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {currentImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImg(img)}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-slate-900 bg-slate-950 cursor-pointer shadow-xs hover:border-yellow-400 hover:shadow-md transition-all"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <span className="w-8 h-8 rounded-full bg-yellow-400 text-slate-950 flex items-center justify-center shadow-md">
                  <ZoomIn size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-view Lightbox Modal */}
      {activeImg && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveImg(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-slate-900 rounded-xl overflow-hidden border-2 border-yellow-400 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImg(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center border border-slate-700 cursor-pointer hover:bg-slate-800"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <img
              src={activeImg.src}
              alt={activeImg.alt}
              className="w-full max-h-[80vh] object-contain"
            />

            <div className="p-3 bg-slate-950 flex items-center justify-between border-t border-slate-800">
              <span className="text-xs text-slate-300 font-medium">Click outside or âœ• to close</span>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-compact-yellow text-xs py-1.5 px-3 no-underline"
              >
                <MessageCircle size={13} />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

