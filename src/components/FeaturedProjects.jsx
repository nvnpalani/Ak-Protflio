import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/projects';

const FEATURED = PROJECTS.filter((p) => p.featured).slice(0, 4);

export default function FeaturedProjects() {
  const [activeId, setActiveId] = useState(FEATURED[0]?.id || 1);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="featured" className="py-20 border-b border-slate-200 bg-white" aria-label="Featured work">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-badge">
              <Sparkles size={12} />
              Selected Works
            </div>
            <h2 className="section-title">
              Featured Case Studies
            </h2>
            <p className="section-subtitle">
              A curated look at our highest-impact graphic design deliverables and commercial signboard installations.
            </p>
          </div>
          <button
            onClick={() => go('portfolio')}
            className="btn-secondary self-start md:self-auto"
            id="view-all-featured"
          >
            <span>Explore All Projects</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {FEATURED.map((project, idx) => {
            const isWide = idx === 0 || idx === 3;
            const colSpan = isWide ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={project.id}
                className={`${colSpan} group relative rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-slate-200/60 flex flex-col`}
                onMouseEnter={() => setActiveId(project.id)}
              >
                {/* Visual Media Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="tag-chip shadow-xs bg-white text-blue-700 font-semibold border-slate-200">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Top-right index */}
                  <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-xs font-mono font-medium text-slate-700 border border-slate-200 shadow-xs">
                    0{idx + 1}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                      <CheckCircle2 size={14} />
                      Delivered & Installed
                    </span>
                    <button
                      onClick={() => go('portfolio')}
                      className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                    >
                      View Specs <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
