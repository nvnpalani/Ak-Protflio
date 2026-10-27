import { Sparkles } from 'lucide-react';

export default function Hero() {

  return (
    <section id="home" className="pt-16 pb-8 sm:pt-20 sm:pb-10 bg-[#fffefc] border-b border-slate-200" aria-label="Hero">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Compact Text */}
          <div className="lg:col-span-7">

            <div className="section-badge-compact">
              <Sparkles size={12} className="text-amber-800" />
              Architectural Signage &amp; Brand Identity
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.14] text-slate-900 tracking-tight mb-3">
              The Secret to Powerful Brand Impact is{' '}
              <span className="bg-yellow-300 px-2.5 py-0.5 rounded border border-slate-900 inline-block text-slate-950 mt-1">
                Consistency!
              </span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
              We engineer complete visual identity systems — bridging custom <strong className="text-slate-900">Graphic Design &amp; Brand Strategy</strong> with direct in-house manufacturing of commercial <strong className="text-slate-900">3D LED, Acrylic &amp; ACP Signboards</strong> built for enduring visibility.
            </p>

          </div>

          {/* Right Column: Compact Photo Showcase */}
          <div className="lg:col-span-5">
            <div className="relative max-w-[260px] sm:max-w-xs lg:max-w-sm mx-auto">

              {/* Card with Dark Border & Yellow Shadow */}
              <div className="bg-white p-3 rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_#facc15]">
                <div className="rounded-lg overflow-hidden aspect-square bg-slate-100">
                  <img
                    src="/founder.jpg"
                    alt="Aijith Kumar - Founder & Creative Director"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Founder Profile Details */}
                <div className="pt-2.5 text-center">
                  <h3 className="font-display font-extrabold text-base text-slate-900 leading-tight">
                    Aijith Kumar
                  </h3>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full my-1">
                    Founder &amp; Creative Director
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                    Signage &amp; Fabrication Specialist
                  </p>
                  
                  <div className="bg-yellow-100/80 border border-yellow-300 rounded px-2 py-1 mt-2">
                    <p className="text-[10px] sm:text-[11px] font-black text-slate-900 tracking-tight">
                      &quot;It's not inspiration, It's consistency!&quot;
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
