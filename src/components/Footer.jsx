import { Sparkles, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SITE_CONFIG } from '../data/config';

function InstagramIcon({ size = 15 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 15 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 15 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const waLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-6 border-t-2 border-yellow-400" role="contentinfo">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-xs sm:flex-row sm:justify-between mb-3">
          
          {/* Logo & copyright */}
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <img
              src="/ak-logo.png"
              alt="AK Creation Logo"
              className="h-7 w-7 rounded object-contain"
            />
            <span className="font-bold text-white">{SITE_CONFIG.studioName}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">© {year} All rights reserved.</span>
          </div>

          {/* Direct phone / whatsapp */}
          <div className="flex items-center gap-3 text-slate-400 flex-wrap justify-center">
            <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-yellow-400 text-slate-300 no-underline">
              {SITE_CONFIG.phone}
            </a>
            <span className="text-slate-600">|</span>
            <div className="flex gap-2">
              <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 text-slate-400" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={SITE_CONFIG.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 text-slate-400" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 text-slate-400" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Back to top */}
          <button
            onClick={() => scrollTo('home')}
            className="inline-flex items-center gap-1 text-slate-400 hover:text-yellow-400 bg-transparent border-none cursor-pointer p-0 text-xs font-bold"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>

        </div>

        {/* Studio & Workshop Address */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-center sm:justify-start gap-1.5 text-[11px] text-slate-400 text-center sm:text-left">
          <MapPin size={13} className="text-yellow-400 flex-shrink-0" />
          <span>Workshop &amp; Studio: <strong className="text-slate-300 font-medium">{SITE_CONFIG.address}</strong></span>
        </div>
      </div>
    </footer>
  );
}
