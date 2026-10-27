import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { WORK_CATEGORIES } from '../data/worksData';

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
          <div className="flex flex-col justify-center">
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.14] text-slate-900 tracking-tight mb-3">
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
              <div className="flex flex-wrap gap-2">
                {WORK_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/works/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-50 hover:bg-yellow-400 text-slate-900 border border-slate-200 hover:border-slate-900 rounded-lg font-bold text-xs transition-all no-underline group shadow-2xs hover:-translate-y-0.5"
                  >
                    <span>{cat.title}</span>
                    <ArrowRight size={12} className="text-slate-400 group-hover:text-slate-950 transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Equal Column Space */}
          <div className="flex justify-center items-center">
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
