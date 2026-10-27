// ============================================================
// SERVICES DATA
// ============================================================
import {
  Palette, Layers, Image, Megaphone, Share2, FileImage,
  Zap, Box, Layout, Store, Radio, Settings2,
} from 'lucide-react';

export const SERVICE_GROUPS = [
  {
    id: 'graphic',
    groupTitle: 'Graphic Design',
    groupIcon: Palette,
    groupColor: 'from-purple-600 to-pink-500',
    services: [
      { id: 'logo',     icon: Layers,    title: 'Logo Design',              description: 'Distinctive, timeless logos that capture your brand essence and leave a lasting impression.' },
      { id: 'brand',    icon: Palette,   title: 'Brand Identity',           description: 'Cohesive visual systems — colours, typography, and assets — that speak in one powerful voice.' },
      { id: 'poster',   icon: Image,     title: 'Poster Design',            description: 'Eye-catching promotional posters and event flyers that demand attention.' },
      { id: 'banner',   icon: Megaphone, title: 'Banner Design',            description: 'High-impact digital and print banners crafted for maximum visual impact.' },
      { id: 'social',   icon: Share2,    title: 'Social Media Creatives',   description: 'Scroll-stopping posts, stories and reels templates tailored for your brand voice.' },
      { id: 'advert',   icon: FileImage, title: 'Advertising Materials',    description: 'Brochures, flyers, catalogues and display ads that convert attention into action.' },
    ],
  },
  {
    id: 'signboard',
    groupTitle: 'Signboard Works',
    groupIcon: Store,
    groupColor: 'from-orange-500 to-red-500',
    services: [
      { id: 'led',      icon: Zap,       title: 'LED Signboards',           description: 'Vibrant, energy-efficient LED channel letters and illuminated signs for maximum visibility.' },
      { id: '3d',       icon: Box,       title: '3D Letter Boards',         description: 'Premium raised 3D lettering in stainless steel, acrylic, and foam for striking facades.' },
      { id: 'acp',      icon: Layout,    title: 'ACP Signboards',           description: 'Durable aluminium composite panel signs with UV-printed graphics for indoor and outdoor use.' },
      { id: 'shop',     icon: Store,     title: 'Shop Name Boards',         description: 'Professional shop-front name boards designed to attract customers and reinforce your brand.' },
      { id: 'outdoor',  icon: Radio,     title: 'Outdoor Advertising Boards', description: 'Large-format outdoor boards designed for high-traffic locations and maximum reach.' },
      { id: 'custom',   icon: Settings2, title: 'Custom Signage Solutions', description: 'Bespoke signage designed and fabricated to your unique specifications and environment.' },
    ],
  },
];
