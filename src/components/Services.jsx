import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { WORK_CATEGORIES } from '../data/worksData';

export default function Services() {
  return (
    <section id="services" className="py-6 sm:py-8 bg-white border-b border-slate-200" aria-label="Our Works">
      <div className="container">
        
        {/* Section Header */}
        <div className="mb-4">
          <div className="section-badge-compact">Our Works</div>
          <h2 className="section-title-compact">Signboard &amp; Advertising Works</h2>
        </div>

        {/* Compact Text Only Categories (Count Removed) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
          {WORK_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              to={`/works/${cat.slug}`}
              className="flex items-center justify-between p-3 bg-slate-50 hover:bg-yellow-400 text-slate-900 border border-slate-200 hover:border-slate-900 rounded-lg font-bold text-xs sm:text-sm transition-colors no-underline group"
            >
              <span>{cat.title}</span>
              <ArrowRight size={14} className="text-slate-400 group-hover:text-slate-950 transition-colors" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
