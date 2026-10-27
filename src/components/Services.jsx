import { 
  Zap, Sun, Sparkles, Tv, Layers, Printer, ShieldAlert,
  FileText, Flag, Bus, Car, Footprints, Truck, 
  FileImage, Umbrella, Construction, MessageCircle, ArrowUpRight
} from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export const ALL_SERVICES = [
  { id: 1,  name: 'LED Sign Board',                          category: 'Signage',      icon: Zap },
  { id: 2,  name: 'UV Fabric Backlight Board',               category: 'Glow Sign',    icon: Sun },
  { id: 3,  name: 'UV Flex Backlight Board',                 category: 'Glow Sign',    icon: Sparkles },
  { id: 4,  name: 'Indoor & Outdoor LED Video Wall Display', category: 'Digital LED',  icon: Tv },
  { id: 5,  name: 'Acrylic Board',                           category: 'Signage',      icon: Layers },
  { id: 6,  name: 'Vinyl Printing',                          category: 'Printing',     icon: Printer },
  { id: 7,  name: 'Reflective Board',                        category: 'Signage',      icon: ShieldAlert },
  { id: 8,  name: 'Foam Sheet',                              category: 'Branding',     icon: FileText },
  { id: 9,  name: 'Sunpack Sheet',                           category: 'Outdoor',      icon: Flag },
  { id: 10, name: 'Bus Backside Ads',                        category: 'Transit',      icon: Bus },
  { id: 11, name: 'Auto Backside Ads',                       category: 'Transit',      icon: Car },
  { id: 12, name: 'Look Walker Ads',                         category: 'BTL Promo',    icon: Footprints },
  { id: 13, name: 'Road Show Ads',                           category: 'Mobile Promo', icon: Truck },
  { id: 14, name: 'Roll Up Standee',                         category: 'Display',      icon: Layers },
  { id: 15, name: 'Wall Poster & Flayer',                    category: 'Print Media',  icon: FileImage },
  { id: 16, name: 'Canopy Ads',                              category: 'Outdoor',      icon: Umbrella },
  { id: 17, name: 'Flag Ads',                                category: 'Outdoor',      icon: Flag },
  { id: 18, name: 'Umbrella Ads',                            category: 'Outdoor',      icon: Umbrella },
  { id: 19, name: 'Barricade Ads',                           category: 'Outdoor',      icon: Construction },
];

export default function Services() {
  return (
    <section id="services" className="py-8 sm:py-12 bg-white border-b border-slate-200" aria-label="Our Full Services">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <div>
            <div className="section-badge-compact mb-2">Our Services &amp; Solutions</div>
            <h2 className="section-title-compact text-2xl sm:text-3xl">
              Complete Signage &amp; Outdoor Advertising
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
              From 3D illuminated boards to transit bus &amp; auto branding, we design, fabricate, and install across Tamil Nadu.
            </p>
          </div>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi AK Creation, I need a quotation for signage and advertising work.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3.5 py-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 rounded-lg text-xs font-bold border border-slate-900 transition-colors shadow-2xs no-underline shrink-0"
          >
            <MessageCircle size={14} />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>

        {/* 19 Services Modern Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {ALL_SERVICES.map((service) => {
            const Icon = service.icon;
            const waText = encodeURIComponent(`Hi AK Creation, I am interested in ${service.name}. Can you share details and pricing?`);
            return (
              <a
                key={service.id}
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-slate-50/80 hover:bg-yellow-300/30 text-slate-900 border border-slate-200/90 hover:border-slate-900 rounded-xl transition-all duration-150 group no-underline hover:shadow-xs"
                title={`Enquire about ${service.name}`}
              >
                <div className="flex items-center gap-2.5 min-w-0 pr-1">
                  <span className="w-8 h-8 rounded-lg bg-yellow-100 group-hover:bg-yellow-400 flex items-center justify-center text-amber-900 group-hover:text-slate-950 transition-colors shrink-0">
                    <Icon size={16} />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug group-hover:text-slate-950 truncate">
                      {service.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>
                </div>

                <ArrowUpRight size={15} className="text-slate-300 group-hover:text-slate-950 transition-colors shrink-0" />
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
