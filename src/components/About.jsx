export default function About() {
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
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-lg">
              We eliminate the gap between digital graphic design and heavy-duty physical signage fabrication. You get artwork that looks stunning on digital screens and translates cleanly onto illuminated 3D storefronts.
            </p>
          </div>

          {/* Right: Compact Photo Frame */}
          <div className="lg:col-span-5">
            <div className="max-w-xs mx-auto bg-white border-2 border-slate-900 rounded-xl p-3 shadow-[4px_4px_0px_#facc15]">
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
    </section>
  );
}
