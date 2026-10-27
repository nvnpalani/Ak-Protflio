// 3D & LED Signboards
export const LED_SIGNBOARDS = [
  { id: 'led-1', category: '3D & LED', title: 'Commercial LED Shop Signboard', src: '/signs/sign-1.jpg' },
  { id: 'led-2', category: '3D & LED', title: '3D Acrylic Letters Workshop', src: '/signs/sign-2.jpg' },
  { id: 'led-3', category: '3D & LED', title: 'Illuminated LED Signboard Night', src: '/signs/sign-3.jpg' },
  { id: 'led-4', category: '3D & LED', title: 'Storefront LED Signboard Installation', src: '/signs/sign-4.jpg' },
  { id: 'led-5', category: '3D & LED', title: 'Backlit Box Signboard', src: '/signs/sign-5.jpg' },
  { id: 'led-6', category: '3D & LED', title: 'Chrome SS Backlit 3D Sign', src: '/signs/sign-6.jpg' },
  { id: 'led-7', category: '3D & LED', title: 'Golden Mirror Backlit Letters', src: '/signs/sign-7.jpg' },
  { id: 'led-8', category: '3D & LED', title: 'Pylon Crane Roadside Installation', src: '/signs/sign-8.jpg' },
  { id: 'led-9', category: '3D & LED', title: 'Glossy ACP Directional Board', src: '/signs/sign-9.jpg' },
  { id: 'led-10', category: '3D & LED', title: 'Illuminated Channel Letter Types', src: '/signs/sign-10.jpg' },
];

// Backlight Boards (Glow Signs / Lightboxes)
export const BACKLIGHT_BOARDS = [
  { id: 'bl-1', category: 'Backlight', title: 'Chiya Bakery & Snacks Red Backlight Board', src: '/signs/backlight-1.jpg' },
  { id: 'bl-2', category: 'Backlight', title: 'Sri Krishna Bakery Wide Backlight Board', src: '/signs/backlight-2.jpg' },
  { id: 'bl-3', category: 'Backlight', title: 'Sri Krishna Bakery Vertical Tea Coffee Backlight Board', src: '/signs/backlight-3.jpg' },
  { id: 'bl-4', category: 'Backlight', title: 'Sri Kumaran Ac Dormitory Pillar Backlight Board', src: '/signs/backlight-4.jpg' },
  { id: 'bl-5', category: 'Backlight', title: 'Nini Bridal Destination Backlight Board', src: '/signs/backlight-5.jpg' },
  { id: 'bl-6', category: 'Backlight', title: 'RP Traders Authorized Dealer Backlight Board', src: '/signs/backlight-6.jpg' },
  { id: 'bl-7', category: 'Backlight', title: 'Thiruvalluvar Arivalayam Wide Pink Backlight Board', src: '/signs/backlight-7.jpg' },
  { id: 'bl-8', category: 'Backlight', title: "D'Cars Illuminated Lightbox Display", src: '/signs/backlight-8.jpg' },
];

// Flex Advertising (Banners & Hoardings)
export const FLEX_ADVERTISING = [
  { id: 'fl-1', category: 'Flex Ads', title: 'Chendur Enclave Roadside Flex Banner', src: '/signs/flex-1.jpg' },
  { id: 'fl-2', category: 'Flex Ads', title: 'Propshell Panjappur Pole Flex Board', src: '/signs/flex-2.jpg' },
  { id: 'fl-3', category: 'Flex Ads', title: 'Rotary Mega Star Night Wide Outdoor Hoarding', src: '/signs/flex-3.jpg' },
  { id: 'fl-4', category: 'Flex Ads', title: 'B-Fit Sports Arena Flex Banner Stand', src: '/signs/flex-4.jpg' },
  { id: 'fl-5', category: 'Flex Ads', title: 'Rotary Mega Star Night Street Hoarding Night', src: '/signs/flex-5.jpg' },
];

// Roll Up Banners (Standees / Display Stands)
export const ROLLUP_BANNERS = [
  { id: 'ru-1', category: 'Roll Up', title: 'MetaBot AI & VR Awareness Roll Up Standee', src: '/signs/rollup-1.jpg' },
  { id: 'ru-2', category: 'Roll Up', title: 'GetAssist & LandMarket Activator Program Roll Up Banner', src: '/signs/rollup-2.jpg' },
  { id: 'ru-3', category: 'Roll Up', title: 'The Boys Burger Franchise Opportunity Standee', src: '/signs/rollup-3.jpg' },
  { id: 'ru-4', category: 'Roll Up', title: 'RP Traders Authorized Dealer Roll Up Display Stand', src: '/signs/rollup-4.jpg' },
  { id: 'ru-5', category: 'Roll Up', title: 'The Boys Burger Franchise Opportunity Graphic Standee', src: '/signs/rollup-5.jpg' },
];

// Sunpack Sheets (Pole Advertising / Real Estate / Promotional Boards)
export const SUNPACK_BOARDS = [
  { id: 'sp-1', category: 'Sunpack', title: 'Badminton Academy Summer Camp Pole Board', src: '/signs/sunpack-1.jpg' },
  { id: 'sp-2', category: 'Sunpack', title: 'Sri Prasanna Properties Perumal Avenue Pole Board', src: '/signs/sunpack-2.jpg' },
  { id: 'sp-3', category: 'Sunpack', title: 'Sri Prasanna Properties Venkateshwara Nagar Pole Board', src: '/signs/sunpack-3.jpg' },
  { id: 'sp-4', category: 'Sunpack', title: 'Velchoice Properties Plot Promotion Pole Board', src: '/signs/sunpack-4.jpg' },
  { id: 'sp-5', category: 'Sunpack', title: 'Velchoice Properties Real Estate Sunpack Board', src: '/signs/sunpack-5.jpg' },
  { id: 'sp-6', category: 'Sunpack', title: 'Propshell Venkateshwara Nagar Villa Plots Pole Board', src: '/signs/sunpack-6.jpg' },
];

export const WORK_CATEGORIES = [
  {
    slug: 'flex-ads',
    title: 'Flex Ads',
    items: FLEX_ADVERTISING,
  },
  {
    slug: 'backlight',
    title: 'Backlight',
    items: BACKLIGHT_BOARDS,
  },
  {
    slug: 'led-signboards',
    title: '3D & LED',
    items: LED_SIGNBOARDS,
  },
  {
    slug: 'roll-up',
    title: 'Roll Up',
    items: ROLLUP_BANNERS,
  },
  {
    slug: 'sunpack',
    title: 'Sunpack',
    items: SUNPACK_BOARDS,
  },
];
