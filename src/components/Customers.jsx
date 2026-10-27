import { Building2 } from 'lucide-react';

const CUSTOMER_LOGOS = [
  {
    name: 'SBI Life Insurance',
    logo: '/sbi-life.png',
  },
  {
    name: 'City Union Bank',
    logo: '/city-union-bank.png',
  },
  {
    name: 'Ruloans',
    logo: '/ruloans.png',
  },
  {
    name: 'Rupeelife',
    logo: '/rupeelife.png',
  },
  {
    name: 'B-Fit',
    logo: '/b-fit.png',
  },
  {
    name: 'VIP City',
    logo: '/vip-city.png',
  },
  {
    name: 'NR IAS Academy',
    logo: '/nr-ias-academy.png',
  },
  {
    name: 'Propshell',
    logo: '/propshell-logo.png',
  },
  {
    name: 'Raaju Property',
    logo: '/raju-properties.jpg',
  },
  {
    name: 'Velchoice Properties Pvt. Ltd.',
    logo: '/velchoice-properties.png',
  },
  {
    name: 'Rotary Club of Tiruchirappalli Success',
    logo: '/rotary-success.png',
  },
  {
    name: 'Sri Prasanna Properties',
    logo: '/sri-prasanna-properties.png',
  },
  {
    name: 'Shine Academy',
    logo: '/shine-academy.png',
  },
];

export default function Customers() {
  // Duplicate array to create seamless infinite running marquee
  const marqueeLogos = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS];

  return (
    <section id="customers" className="py-9 sm:py-12 bg-[#fffefc] border-b border-slate-200 overflow-hidden" aria-label="Our Customer Companies">
      <div className="container">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-xl mx-auto mb-5 sm:mb-6">
          <div className="section-badge-compact mx-auto mb-1.5">
            <Building2 size={11} className="text-amber-800" />
            Our Customer Companies
          </div>
          <h2 className="section-title-compact text-center mb-1 text-xl sm:text-2xl">
            Trusted by Leading Brands
          </h2>
          <p className="section-subtitle-compact mx-auto text-center text-xs text-slate-500">
            Proud to design, manufacture, and install signage solutions for reputed enterprises.
          </p>
        </div>

      </div>

      {/* Compact Single Row Running Marquee Display */}
      <div className="relative w-full overflow-hidden py-1">
        
        {/* Left & Right gradient edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-[#fffefc] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-[#fffefc] to-transparent z-10" />

        {/* Running Track in Single Row with Compact Padding */}
        <div className="marquee-track flex items-center gap-4 sm:gap-5 px-3">
          {marqueeLogos.map((client, index) => (
            <div
              key={index}
              className="bg-white border-2 border-slate-200 hover:border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-center h-24 sm:h-28 md:h-32 w-52 sm:w-64 md:w-72 flex-shrink-0 shadow-xs transition-all duration-150 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 sm:max-h-20 md:max-h-24 w-auto max-w-[90%] object-contain transition-transform duration-150 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
