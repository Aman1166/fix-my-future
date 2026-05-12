export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category?: string;
  carat?: string;
  sign?: string;
}

export const gemstoneProducts: Product[] = [
  { id: 201, name: 'Blue Sapphire (Neelam)', price: '₹12,999', image: '/product/blue-sapphire.jpg', category: 'gemstones', carat: '5.2 Ct' },
  { id: 202, name: 'Emerald (Panna)', price: '₹15,999', image: '/product/emerald.jpg', category: 'gemstones', carat: '4.8 Ct' },
  { id: 203, name: 'Ruby (Manik)', price: '₹18,999', image: '/product/ruby.jpg', category: 'gemstones', carat: '6.1 Ct' },
  { id: 204, name: 'Yellow Sapphire (Pukhraj)', price: '₹14,999', image: '/product/yellow-sapphire.jpg', category: 'gemstones', carat: '5.5 Ct' },
  { id: 205, name: 'Diamond Ring', price: '₹25,999', image: '/product/jewelry-ring.jpg', category: 'gemstones', carat: '1.2 Ct' },
  { id: 206, name: 'Premium Gemstone Set', price: '₹35,999', image: '/product/a9.webp', category: 'gemstones' },
];

export const rudrakshaProducts: Product[] = [
  { id: 301, name: '5 Mukhi Rudraksha', price: '₹1,499', image: '/product/rudraksha.jpg', category: 'rudraksha' },
  { id: 302, name: '7 Mukhi Rudraksha', price: '₹2,499', image: '/product/a3.avif', category: 'rudraksha' },
  { id: 303, name: '9 Mukhi Rudraksha', price: '₹3,999', image: '/product/a4.webp', category: 'rudraksha' },
  { id: 304, name: '11 Mukhi Rudraksha', price: '₹5,999', image: '/product/a5.webp', category: 'rudraksha' },
  { id: 305, name: 'Gauri Shankar Rudraksha', price: '₹4,499', image: '/product/a6.webp', category: 'rudraksha' },
  { id: 306, name: 'Mala (108 Beads)', price: '₹2,999', image: '/product/a7.webp', category: 'rudraksha' },
];

export const braceletProducts: Product[] = [
  { id: 401, name: 'Dhan Yog Bracelet', price: '₹1,999', image: '/product/a1.jpg', category: 'bracelets' },
  { id: 402, name: 'Rudraksha Bracelet', price: '₹1,499', image: '/product/a2.jpg', category: 'bracelets' },
  { id: 403, name: 'Crystal Bracelet', price: '₹999', image: '/product/a8.webp', category: 'bracelets' },
  { id: 404, name: 'Gold Plated Bracelet', price: '₹2,499', image: '/product/a3.avif', category: 'bracelets' },
  { id: 405, name: 'Silver Bracelet', price: '₹1,799', image: '/product/a4.webp', category: 'bracelets' },
  { id: 406, name: 'Premium Bracelet Set', price: '₹3,999', image: '/product/a5.webp', category: 'bracelets' },
];
