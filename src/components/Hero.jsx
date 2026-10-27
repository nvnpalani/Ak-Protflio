import { Sparkles } from 'lucide-react';

export default function Hero() {

  return (
    <section
      id="home"
      style={{ marginTop: '0px', height: '100vh' }}
      className="pt-14 flex items-center bg-[#fffefc] border-b border-slate-200 overflow-hidden"
      aria-label="Hero"
    >
      <div className="container py-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Column: Equal Column Space */}
          <div className="flex flex-col justify-center">
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.14] text-slate-900 tracking-tight mb-3">
              AK CREATION{' '}
              <br />
              <span className="text-yellow-500 text-xl sm:text-2xl font-bold">
                LED Signage &amp; Outdoor Advertising
              </span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
              We provide high-quality and professional advertising and signage solutions to meet all your branding and promotional needs
            </p>

          </div>

          {/* Right Column: Equal Column Space */}
          <div className="flex justify-center items-center">
            <div className="relative max-w-[260px] sm:max-w-xs lg:max-w-sm w-full mx-auto">

              {/* Card with Dark Border & Yellow Shadow */}
              <div className="bg-white p-3 rounded-xl">
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
