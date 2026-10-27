import { MessageSquare, PenTool, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Consultation & Scope',
    description: 'We align on your project objectives, dimensions, brand guidelines, and location specs.',
    tag: 'Stage 1',
  },
  {
    step: '02',
    icon: PenTool,
    title: 'Design & 3D Drafting',
    description: 'We develop high-fidelity vector artworks, 3D signboard mockups, and material palettes.',
    tag: 'Stage 2',
  },
  {
    step: '03',
    icon: Wrench,
    title: 'Precision Fabrication',
    description: 'Our workshop cuts ACP, bends acrylic channel letters, and installs Samsung LED modules.',
    tag: 'Stage 3',
  },
  {
    step: '04',
    icon: CheckCircle2,
    title: 'Quality Check & Handover',
    description: 'Rigorous illumination testing, structural checks, and on-site delivery or installation.',
    tag: 'Delivery',
  },
];

export default function WorkProcess() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200" aria-label="Our workflow">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-badge mx-auto">Structured Workflow</div>
          <h2 className="section-title">
            How We Execute From Concept to Delivery
          </h2>
          <p className="section-subtitle mx-auto">
            A transparent four-phase production pipeline built for rapid turnaround, precision tolerances, and zero surprises.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map(({ step, icon: Icon, title, description, tag }, idx) => (
            <div
              key={step}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between relative group hover:border-blue-400 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Step header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold">
                    <Icon size={18} />
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-200 group-hover:text-blue-200 transition-colors">
                    {step}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                  {title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Phase {idx + 1} of 4</span>
                <span className="text-emerald-600 font-medium">Standardized SLA</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-bold text-lg text-slate-900 mb-1">
              Have an upcoming project with a tight deadline?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              We offer expedited turnaround for urgent shop inaugurations and marketing launches.
            </p>
          </div>
          <button
            onClick={() => go('contact')}
            className="btn-primary flex-shrink-0 text-xs py-2.5 px-5"
          >
            <span>Request Fast-Track Quote</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
