import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

const HERO_SERVICES = [
  { name: 'LED Sign Board', slug: 'led-signboards' },
  { name: 'UV Fabric Backlight Board', slug: 'backlight' },
  { name: 'UV Flex Backlight Board', slug: 'backlight' },
  { name: 'Indoor & Outdoor LED Video Wall Display', slug: 'led-signboards' },
  { name: 'Acrylic Board', slug: 'acrylic-board' },
  { name: 'Vinyl Printing', slug: 'foam-sheet-vinyl' },
  { name: 'Reflective Board', slug: 'direction-board' },
  { name: 'Foam Sheet', slug: 'foam-sheet-vinyl' },
  { name: 'Sunpack Sheet', slug: 'sunpack' },
  { name: 'Bus Backside Ads', wa: true },
  { name: 'Auto Backside Ads', wa: true },
  { name: 'Look Walker Ads', wa: true },
  { name: 'Road Show Ads', slug: 'roadshow' },
  { name: 'Roll Up Standee', slug: 'roll-up' },
  { name: 'Wall Poster & Flayer', wa: true },
  { name: 'Canopy Ads', wa: true },
  { name: 'Flag Ads', wa: true },
  { name: 'Umbrella Ads', wa: true },
  { name: 'Barricade Ads', wa: true },
];

export default function Hero() {

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

            {/* All 19 Services Display */}
            <div className="pt-3 border-t border-slate-200/80">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 bg-yellow-100 border border-yellow-300 px-2 py-0.5 rounded">
                  Our Services
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  All 19 capabilities:
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {HERO_SERVICES.map((item) => {
                  const isLink = Boolean(item.slug);
                  const Component = isLink ? Link : 'a';
                  const props = isLink
                    ? { to: `/works/${item.slug}` }
                    : {
                        href: `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi AK Creation, I am interested in ${item.name}. Can you share details and pricing?`)}`,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      };

                  return (
                    <Component
                      key={item.name}
                      {...props}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-50 hover:bg-yellow-400 text-slate-800 hover:text-slate-950 border border-slate-200 hover:border-slate-900 rounded-md font-bold text-[11px] sm:text-xs transition-colors no-underline group shadow-2xs"
                    >
                      <span>{item.name}</span>
                      <ArrowRight size={11} className="text-slate-400 group-hover:text-slate-950 transition-colors shrink-0" />
                    </Component>
                  );
                })}
              </div>
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
    </section>
  );
}
