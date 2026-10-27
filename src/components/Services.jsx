import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import { WORK_CATEGORIES } from '../data/worksData';

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 bg-white border-b border-slate-200" aria-label="Our Works">
      <div className="container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <div className="section-badge-compact">Our Works</div>
          <h2 className="section-title-compact">Signboard &amp; Advertising Works</h2>
          <p className="section-subtitle-compact text-xs sm:text-sm text-slate-500 mt-1">
            Click on any category below to navigate to that work category gallery screen.
          </p>
        </div>

        {/* 4 Category Text Cards (Using Routing, No Dialog Box) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WORK_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              to={`/works/${cat.slug}`}
              className="bg-white border-2 border-slate-200 hover:border-slate-900 rounded-2xl p-6 cursor-pointer transition-all duration-200 hover:shadow-md group flex flex-col justify-between no-underline"
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
                <span>View {cat.count} Images</span>
                <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-yellow-400 flex items-center justify-center transition-colors">
                  <ArrowRight size={14} className="text-slate-950" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
