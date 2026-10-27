import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function About() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const waLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <section id="about" className="py-12 bg-[#fffefc] border-b border-slate-200" aria-label="About studio">
      <div className="container">
        
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: About Text */}
          <div className="lg:col-span-7">
            <div className="section-badge-compact">About Studio</div>
            <h2 className="section-title-compact">
              Built on Precision &amp; Consistent Craft
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
              We eliminate the gap between digital graphic design and heavy-duty physical signage fabrication. You get artwork that looks stunning on digital screens and translates cleanly onto illuminated 3D storefronts.
            </p>

            {/* Quick stats strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg mb-5 text-xs text-slate-800">
              <div>
                <span className="font-extrabold text-base text-slate-900 block">5+ Years</span>
                <span className="text-[11px] text-slate-600">Active Craft</span>
              </div>
              <div className="border-l border-yellow-300 pl-5">
                <span className="font-extrabold text-base text-slate-900 block">250+</span>
                <span className="text-[11px] text-slate-600">Works Delivered</span>
              </div>
              <div className="border-l border-yellow-300 pl-5">
                <span className="font-extrabold text-base text-slate-900 block">100%</span>
                <span className="text-[11px] text-slate-600">Direct In-House</span>
              </div>
            </div>

            <div className="flex gap-2.5">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-compact-yellow text-xs py-2 px-4 no-underline inline-flex items-center gap-1.5"
              >
                <span>Partner With Us</span>
                <ArrowRight size={13} />
              </a>
              <button
                onClick={() => go('services')}
                className="btn-compact-dark text-xs py-2 px-4"
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* Right: Compact Photo Frame */}
          <div className="lg:col-span-5">
            <div className="max-w-xs mx-auto bg-white border-2 border-slate-900 rounded-xl p-2.5 shadow-[4px_4px_0px_#facc15]">
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
    </section>
  );
}
