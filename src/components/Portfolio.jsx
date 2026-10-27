import { useState, useMemo } from 'react';
import { X, ZoomIn, ArrowUpRight, Search, CheckCircle2, MessageCircle, Layers } from 'lucide-react';
import { PROJECTS, CATEGORIES } from '../data/projects';
import { SITE_CONFIG } from '../data/config';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const waEnquiry = encodeURIComponent(
    `Hi! I'm interested in a project similar to "${project.title}" (${project.categoryLabel}). Can you provide a quote?`
  );
  const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${waEnquiry}`;

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.title}`}
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 anim-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          id="lightbox-close"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center border border-slate-200 shadow-md cursor-pointer transition-colors"
          aria-label="Close project preview"
        >
          <X size={18} />
        </button>

        {/* Project Image */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-slate-100 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="tag-chip bg-white text-blue-700 font-semibold border-slate-200 shadow-sm">
              {project.categoryLabel}
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="font-display font-bold text-2xl text-slate-900 leading-tight">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-blue-600 mt-1">
                Category: {project.categoryLabel}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full self-start sm:self-auto">
              <CheckCircle2 size={13} />
              Production Verified
            </span>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">Deliverable</span>
              <span className="font-semibold text-slate-800">Custom Finished Work</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Execution</span>
              <span className="font-semibold text-slate-800">Direct In-House</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-400 block mb-0.5">Turnaround</span>
              <span className="font-semibold text-slate-800">2 - 5 Days Standard</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto justify-center text-sm py-2.5 px-6 no-underline"
            >
              <MessageCircle size={15} />
              <span>Get Similar Project Quote</span>
            </a>
            <button
              onClick={onClose}
              className="btn-secondary w-full sm:w-auto justify-center text-sm py-2.5 px-5"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeCat, setActiveCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState(null);

  // Filtered projects
  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchCat = activeCat === 'all' || p.category === activeCat;
      const matchSearch =
        !searchQuery.trim() ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCat, searchQuery]);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200" aria-label="Portfolio works">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-badge mx-auto">
            <Layers size={13} />
            Our Portfolio
          </div>
          <h2 className="section-title">
            Commercial Works & Design Showcase
          </h2>
          <p className="section-subtitle mx-auto">
            Browse through real projects spanning high-resolution brand identities, 3D LED signage, ACP shopboards, and promotional graphics.
          </p>
        </div>

        {/* Filter bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const count = cat.id === 'all'
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(cat.id)}
                  className={`filter-tab flex items-center gap-2 ${activeCat === cat.id ? 'active' : ''}`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    activeCat === cat.id ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64 flex-shrink-0">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search works..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 border-none bg-transparent cursor-pointer p-0 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500 text-sm">No projects matched your criteria.</p>
            <button
              onClick={() => { setActiveCat('all'); setSearchQuery(''); }}
              className="btn-ghost mt-2 text-xs"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <article
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group card overflow-hidden cursor-pointer flex flex-col"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveProject(project)}
                aria-label={`View ${project.title}`}
              >
                {/* Image Container */}
                <div className="relative aspect-project overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="tag-chip bg-white/95 text-blue-700 font-semibold border-slate-200 shadow-xs">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Zoom Overlay on hover */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-slate-900 text-xs font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                      <ZoomIn size={14} className="text-blue-600" />
                      Quick Preview
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="text-[11px] text-slate-400">View Specs & Pricing</span>
                    <span className="text-blue-600 font-semibold inline-flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      Details <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
