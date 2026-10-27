import { useState } from 'react';
import { Send, MessageCircle, Phone, Mail, MapPin, Check } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

const SERVICES = [
  'Logo & Brand Identity',
  '3D LED Channel Letters',
  'ACP Shopfront Signboard',
  'Acrylic & Neon Sign',
  'Posters & Banners',
  'Custom Fabrication',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'Logo & Brand Identity',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Required';
    if (!form.phone.trim()) errs.phone = 'Required';
    if (!form.description.trim()) errs.description = 'Please describe project details';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const msg = [
      `*New Project Enquiry — PixelCraft Studio*`,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Service:* ${form.service}`,
      `*Details:* ${form.description}`,
    ].join('\n');

    window.open(
      `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    );

    setSubmitted(true);
  };

  const waLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <section id="contact" className="py-12 bg-white border-b border-slate-200" aria-label="Contact">
      <div className="container">
        
        {/* Compact Header */}
        <div className="mb-8">
          <div className="section-badge-compact">Get In Touch</div>
          <h2 className="section-title-compact">Request a Free Quote</h2>
          <p className="section-subtitle-compact">
            Send your signboard dimensions or graphic design requirements for an immediate cost estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 space-y-3.5">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-lg bg-emerald-50 border border-emerald-300 text-slate-900 hover:bg-emerald-100 transition-colors no-underline"
            >
              <div className="w-9 h-9 rounded-md bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                <MessageCircle size={18} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-emerald-800 block">Instant Chat</span>
                <span className="font-extrabold text-sm text-slate-900">Chat Directly on WhatsApp</span>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-md bg-yellow-400 text-slate-950 flex items-center justify-center flex-shrink-0 font-bold">
                <Phone size={16} />
              </div>
              <div className="text-xs">
                <span className="text-slate-500 block">Direct Phone</span>
                <a href={`tel:${SITE_CONFIG.phone}`} className="font-bold text-slate-900 hover:underline">
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-md bg-slate-900 text-white flex items-center justify-center flex-shrink-0 font-bold">
                <Mail size={16} />
              </div>
              <div className="text-xs">
                <span className="text-slate-500 block">Email Inquiries</span>
                <a href={`mailto:${SITE_CONFIG.email}`} className="font-bold text-slate-900 hover:underline">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-md bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0 font-bold">
                <MapPin size={16} />
              </div>
              <div className="text-xs">
                <span className="text-slate-500 block">Studio & Workshop</span>
                <span className="font-bold text-slate-800">{SITE_CONFIG.address}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-5">
            {submitted ? (
              <div className="py-6 text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                  <Check size={20} className="stroke-[3]" />
                </div>
                <h4 className="font-bold text-base text-slate-900 mb-1">Inquiry Sent via WhatsApp!</h4>
                <p className="text-xs text-slate-600 mb-4">We will reply to your message immediately.</p>
                <button onClick={() => setSubmitted(false)} className="btn-compact-yellow text-xs py-1.5 px-3">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1.5">
                    Select Service:
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {SERVICES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, service: s }))}
                        className={`text-xs px-2.5 py-1 rounded border cursor-pointer font-medium transition-colors ${
                          form.service === s
                            ? 'bg-yellow-400 text-slate-950 border-slate-900 font-bold'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      className={`compact-input ${errors.name ? 'error' : ''}`}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 mt-0.5">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone / WhatsApp *"
                      className={`compact-input ${errors.phone ? 'error' : ''}`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 mt-0.5">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <textarea
                    rows={3}
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Describe your design needs or signboard size (e.g. 10x3 ft ACP LED board)..."
                    className={`compact-input ${errors.description ? 'error' : ''}`}
                  />
                  {errors.description && (
                    <p className="text-[10px] text-red-500 mt-0.5">{errors.description}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-compact-yellow w-full justify-center py-2.5 text-xs font-bold"
                >
                  <span>Send via WhatsApp</span>
                  <Send size={13} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
