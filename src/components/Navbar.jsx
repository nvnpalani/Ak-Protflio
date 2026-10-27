import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

const NAV_LINKS = [
  { href: 'home',      label: 'Home' },
  { href: 'services',  label: 'Services' },
  { href: 'customers', label: 'Clients' },
  { href: 'about',     label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active,   setActive]   = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setActive('');
      return;
    }
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = ['home', 'services', 'customers', 'about'];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  const go = (id) => {
    setMenuOpen(false);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
          scrolled ? 'bg-white shadow-xs border-b border-slate-200' : 'bg-white border-b border-slate-200'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <button
              onClick={() => go('home')}
              className="flex items-center gap-2 bg-transparent border-none cursor-pointer p-0 text-left min-w-0"
              aria-label="Go to homepage"
            >
              <img
                src="/ak-logo.png"
                alt="AK Creation Logo"
                className="flex-shrink-0 h-9 w-9 rounded-lg object-contain"
              />
              <div className="flex flex-col min-w-0">
                <span className="font-display font-extrabold text-sm sm:text-base text-slate-900 tracking-tight leading-none truncate">
                  {SITE_CONFIG.studioName}
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wide truncate">
                  Printing-Branding-Advertising-LED Signages
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => go(href)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold border-none cursor-pointer transition-colors ${
                    active === href
                      ? 'text-slate-950 bg-yellow-300'
                      : 'text-slate-600 bg-transparent hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Mobile menu toggle */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-8 h-8 rounded-md border border-slate-300 bg-white flex items-center justify-center text-slate-800 cursor-pointer"
                aria-expanded={menuOpen}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={17} /> : <Menu size={17} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Compact Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-white border-b border-slate-200 p-4 md:hidden shadow-lg">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => go(href)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-bold border-none cursor-pointer ${
                  active === href ? 'bg-yellow-300 text-slate-950' : 'bg-transparent text-slate-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
