import { Check, Sparkles, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function Hero() {

  return (
    <section id="home" className="pt-16 pb-8 sm:pt-20 sm:pb-10 bg-[#fffefc] border-b border-slate-200" aria-label="Hero">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Compact Text */}
          <div className="lg:col-span-7">
            
            <div className="section-badge-compact">
              <Sparkles size={12} className="text-amber-800" />
              Creative Design &amp; Signboard Maker
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-slate-900 tracking-tight mb-3">
              The Secret to Great Design is{' '}
              <span className="bg-yellow-300 px-2 py-0.5 rounded border border-slate-900 inline-block text-slate-950 mt-1">
                Consistency!
              </span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5 max-w-lg">
              We specialize in custom <strong className="text-slate-900">Graphic Design, Brand Logos</strong>, and durable commercial <strong className="text-slate-900">LED &amp; 3D ACP Signboards</strong> manufactured in our own workshop.
            </p>

            {/* Compact feature list */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6 text-xs sm:text-sm font-bold text-slate-800">
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center text-slate-950">
                  <Check size={11} className="stroke-[3]" />
                </span>
                3D LED Channel Letters
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center text-slate-950">
                  <Check size={11} className="stroke-[3]" />
                </span>
                ACP Shop Front Boards
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center text-slate-950">
                  <Check size={11} className="stroke-[3]" />
                </span>
                Logo &amp; Social Media Kits
              </span>
            </div>

            {/* Action Buttons: WhatsApp */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-slate-900 transition-colors no-underline shadow-xs"
              >
                <MessageCircle size={16} />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Compact Photo Showcase */}
          <div className="lg:col-span-5">
            <div className="relative max-w-[260px] sm:max-w-xs lg:max-w-sm mx-auto">
              
              {/* Card with Dark Border & Yellow Shadow like About section */}
              <div className="bg-white p-2.5 rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_#facc15]">
                <div className="rounded-lg overflow-hidden aspect-square bg-slate-100">
                  <img
                    src="/founder.jpg"
                    alt="AK Creation Co-Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-xs font-black text-slate-900 mt-2">
                  &quot;It's not inspiration, It's consistency!&quot;
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
