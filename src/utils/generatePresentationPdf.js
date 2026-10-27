import { SITE_CONFIG } from '../data/config';

// Helper to load image as HTMLImageElement
function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export async function generatePresentationPdf() {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297mm

  // Colors
  const darkNavy = [15, 23, 42];      // #0f172a
  const brightYellow = [250, 204, 21]; // #facc15
  const slate600 = [71, 85, 105];     // #475569
  const slate900 = [15, 23, 42];
  const bgLight = [248, 250, 252];    // #f8fafc

  // Try loading logo
  const logoImg = await loadImage('/ak-logo.png');

  // ==========================================
  // PAGE 1: Corporate Profile & Overview
  // ==========================================

  // Top Dark Header Banner
  doc.setFillColor(...darkNavy);
  doc.rect(0, 0, pageWidth, 52, 'F');

  // Yellow Accent Stripe
  doc.setFillColor(...brightYellow);
  doc.rect(0, 52, pageWidth, 3, 'F');

  // Logo if loaded
  if (logoImg) {
    try {
      doc.addImage(logoImg, 'PNG', 14, 10, 30, 30);
    } catch {
      // fallback if error
    }
  }

  // Header Title
  doc.setTextColor(...brightYellow);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('AK CREATION', 50, 22);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('SIGNBOARD & ADVERTISING WORKS', 50, 29);

  doc.setTextColor(203, 213, 225);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text('Company Profile & Capabilities Presentation', 50, 36);
  doc.text('Tiruchirappalli (Trichy) | Tamil Nadu, India', 50, 42);

  // Intro Callout Box
  let y = 64;
  doc.setFillColor(...bgLight);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(14, y, pageWidth - 28, 30, 2, 2, 'FD');

  doc.setTextColor(...slate900);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('About Our Company', 20, y + 8);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...slate600);
  const aboutText =
    'AK Creation is a premier full-service signboard manufacturer and outdoor advertising specialist based in Trichy, Tamil Nadu. With our modern in-house fabrication facility, CNC router routing, laser cutting, and expert installation crews, we engineer high-visibility, weather-proof signage that helps businesses build iconic physical brand presences.';
  const splitAbout = doc.splitTextToSize(aboutText, pageWidth - 42);
  doc.text(splitAbout, 20, y + 14);

  // 4 Key Strengths
  y = 102;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...slate900);
  doc.text('Why Businesses Partner With AK Creation', 14, y);

  y += 5;
  const strengths = [
    { title: 'In-House Manufacturing', desc: 'Direct factory pricing with strict quality control and zero middlemen markup.' },
    { title: 'Industrial Grade Materials', desc: 'UV-resistant acrylics, rust-proof aluminium/SS, and high-lumen Samsung LEDs.' },
    { title: 'Statewide Installation', desc: 'Dedicated team for swift on-site fitting, structural welding & concrete footing.' },
    { title: 'Turnkey Solution', desc: 'End-to-end design, government clearance compliance, electrical safety & warranty.' },
  ];

  const colWidth = (pageWidth - 28 - 6) / 2; // 2 columns
  strengths.forEach((s, idx) => {
    const cx = 14 + (idx % 2) * (colWidth + 6);
    const cy = y + Math.floor(idx / 2) * 22;

    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(cx, cy, colWidth, 18, 1.5, 1.5, 'FD');

    // Yellow accent pill
    doc.setFillColor(...brightYellow);
    doc.rect(cx, cy, 3, 18, 'F');

    doc.setTextColor(...slate900);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(s.title, cx + 6, cy + 6);

    doc.setTextColor(...slate600);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    const splitDesc = doc.splitTextToSize(s.desc, colWidth - 9);
    doc.text(splitDesc, cx + 6, cy + 11);
  });

  // Solutions Overview Table
  y = 158;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...slate900);
  doc.text('Core Signage & Advertising Capabilities', 14, y);

  y += 5;
  const categoriesOverview = [
    ['1. 3D & LED Signboards', 'Acrylic channel letters, stainless steel titanium chrome finishes, Samsung LED backlit boards.'],
    ['2. Backlight Boards', 'Illuminated storefront glow signboxes, high-visibility night shop fascia, acrylic lightbox fronts.'],
    ['3. Flex Ads & Hoardings', 'Large-format outdoor roadside hoardings, event flex banners, MS structural pole mounting.'],
    ['4. Roll Up Standees', 'Retractable aluminium base banners for expos, conferences, showrooms, and retail stores.'],
    ['5. Sunpack Sheet Boards', 'High-volume fluted PP plastic pole boards for real estate, promotions & citywide campaigns.'],
    ['6. Direction Boards', 'Heavy-duty steel pole directional wayfinding signs with high-visibility arrows for layouts.'],
  ];

  categoriesOverview.forEach(([name, desc], i) => {
    const rowY = y + i * 14.5;
    doc.setFillColor(i % 2 === 0 ? 250 : 255, i % 2 === 0 ? 250 : 255, i % 2 === 0 ? 250 : 255);
    doc.setDrawColor(226, 232, 240);
    doc.rect(14, rowY, pageWidth - 28, 12, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...slate900);
    doc.text(name, 18, rowY + 5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...slate600);
    doc.text(desc, 18, rowY + 9.5);
  });

  // Footer for Page 1
  doc.setFillColor(...darkNavy);
  doc.rect(0, pageHeight - 16, pageWidth, 16, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text(`AK Creation | Phone: ${SITE_CONFIG.phone} | Trichy, Tamil Nadu`, 14, pageHeight - 6.5);
  doc.text('Page 1 of 2', pageWidth - 28, pageHeight - 6.5);

  // ==========================================
  // PAGE 2: Specifications, Process & Contact
  // ==========================================
  doc.addPage();

  // Top Slim Header
  doc.setFillColor(...darkNavy);
  doc.rect(0, 0, pageWidth, 22, 'F');
  doc.setFillColor(...brightYellow);
  doc.rect(0, 22, pageWidth, 2, 'F');

  doc.setTextColor(...brightYellow);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('AK CREATION — PRODUCT SPECIFICATIONS & DETAILS', 14, 14);

  // 6 Detailed Category Specifications
  y = 32;
  const detailedSpecs = [
    {
      title: '3D & LED SIGNBOARDS',
      specs: 'Material: Cast Acrylic, ACP Sheet, Stainless Steel, Titanium Gold.\nLighting: IP67 Waterproof Samsung/Osram LED modules (Cool White / Warm / RGB).\nWarranty: 2-3 Years electrical & LED warranty.\nBest For: Commercial outlets, restaurants, jewelry showrooms, corporate facades.',
    },
    {
      title: 'BACKLIGHT BOARDS (GLOW SIGNS)',
      specs: 'Material: Heavy-gauge GI box / Aluminium profile framing with acrylic / star flex.\nLighting: High-density tube light / LED batten grid for uniform illumination.\nVisibility: 24/7 day & night bright storefront presence.\nBest For: Bakeries, supermarkets, medical centers, pharmacies.',
    },
    {
      title: 'FLEX ADS & OUTDOOR HOARDINGS',
      specs: 'Material: High-DPI UV / eco-solvent printed frontlit & backlit flex (280 - 440 GSM).\nStructure: Custom MS square tube structural truss and anchor bolt footing.\nFinish: Rain-proof and sun-protected anti-fade coatings.\nBest For: Highway promotions, real-estate gated community announcements.',
    },
    {
      title: 'ROLL UP BANNERS & STANDEES',
      specs: 'Mechanism: Premium spring-action aluminium cassette mechanism.\nPrint Media: Tear-resistant matte/gloss non-tear vinyl.\nSize: Standard 6ft x 3ft and 6ft x 2.5ft with protective zip carry bag.\nBest For: Exhibitions, marketing events, trade expos, product demos.',
    },
    {
      title: 'SUNPACK SHEET POLE ADVERTISING',
      specs: 'Material: 3mm - 5mm corrugated flute polypropylene (PP) Sunpack sheets.\nPrinting: Direct screen print / waterproof digital vinyl paste.\nMounting: Heavy-duty galvanized wire / plastic zip cable ties for street poles.\nBest For: High-volume real estate, coaching centers, launch campaigns.',
    },
    {
      title: 'DIRECTION BOARDS (ROAD WAYFINDING)',
      specs: 'Material: Solid MS pipe pole with welded sign tray and ground concrete footing.\nVisibility: High-contrast directional U-turn, straight and turn arrows with phone numbers.\nDurability: Rust-preventive zinc chromate primer and weather-shield enamel paint.\nBest For: Layouts, plots, villa communities, commercial complexes.',
    },
  ];

  detailedSpecs.forEach((spec, index) => {
    const isCol2 = index % 2 === 1;
    const colX = isCol2 ? 14 + colWidth + 6 : 14;
    const boxY = y + Math.floor(index / 2) * 44;

    doc.setFillColor(...bgLight);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(colX, boxY, colWidth, 40, 2, 2, 'FD');

    doc.setFillColor(...brightYellow);
    doc.rect(colX, boxY, 3, 40, 'F');

    doc.setTextColor(...slate900);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text(spec.title, colX + 6, boxY + 7);

    doc.setTextColor(...slate600);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    const splitLines = doc.splitTextToSize(spec.specs, colWidth - 9);
    doc.text(splitLines, colX + 6, boxY + 13);
  });

  // Turnkey Execution Workflow
  y = 172;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...slate900);
  doc.text('Our 4-Step Project Delivery Process', 14, y);

  y += 5;
  const workflow = [
    { num: '01', title: 'Consultation & Site Survey', sub: 'On-site measurement & dimension analysis.' },
    { num: '02', title: '2D/3D Graphic Mockup', sub: 'Client approval of scale, colors & lighting.' },
    { num: '03', title: 'Precision Fabrication', sub: 'Laser cut, welding, LED circuit wiring & test.' },
    { num: '04', title: 'Safe Installation', sub: 'Rigid mounting, electrical setup & handover.' },
  ];

  const stepW = (pageWidth - 28 - 9) / 4;
  workflow.forEach((step, idx) => {
    const sx = 14 + idx * (stepW + 3);
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(sx, y, stepW, 25, 1.5, 1.5, 'FD');

    doc.setTextColor(...brightYellow);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text(step.num, sx + 4, y + 8);

    doc.setTextColor(...slate900);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.text(step.title, sx + 4, y + 14);

    doc.setTextColor(...slate600);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    const textSplit = doc.splitTextToSize(step.sub, stepW - 6);
    doc.text(textSplit, sx + 4, y + 18.5);
  });

  // Contact & Order Information Box
  y = 212;
  doc.setFillColor(...darkNavy);
  doc.roundedRect(14, y, pageWidth - 28, 56, 2, 2, 'F');

  doc.setTextColor(...brightYellow);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('GET IN TOUCH FOR ORDERS & FREE QUOTATIONS', 20, y + 10);

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text(`Phone / Mobile:  ${SITE_CONFIG.phone}`, 20, y + 19);
  doc.text(`WhatsApp Orders: +${SITE_CONFIG.whatsappNumber}`, 20, y + 26);
  doc.text(`Email Address:   ${SITE_CONFIG.email}`, 20, y + 33);
  doc.text(`Workshop Office: ${SITE_CONFIG.address}`, 20, y + 40);
  doc.text('Service Coverage: Tiruchirappalli, Thanjavur, Karur, Madurai & all districts across Tamil Nadu.', 20, y + 47);

  // Footer for Page 2
  doc.setFillColor(...darkNavy);
  doc.rect(0, pageHeight - 16, pageWidth, 16, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('AK Creation — Commercial Signboards & Outdoor Advertising Works', 14, pageHeight - 6.5);
  doc.text('Page 2 of 2', pageWidth - 28, pageHeight - 6.5);

  // Save the PDF
  doc.save('AK_Creation_Company_Presentation.pdf');
}
