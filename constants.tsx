
import { ServiceItem, MaterialStat } from './types';

export const KENYAN_COLORS = {
  black: '#000000',
  red: '#BB0000',
  green: '#006600',
  white: '#FFFFFF',
};

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Heavy Gauge Gothic Link Chain',
    description: 'Forged from solid .925 sterling silver, each link is hand-hammered and oxidized for a weathered industrial finish.',
    price: 48000,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Chrome Hearts Style "Nairobi" Frames',
    description: 'Premium black acetate frames with cold-welded sterling silver gothic cross detailing and signature dagger hinges.',
    price: 82000,
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Gothic Cross Stud Earrings',
    description: 'Hand-etched .925 sterling silver crosses. Available in both Magnetic (clip-on) and Non-Magnetic (pierced) versions.',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Industrial Bolt Earrings',
    description: 'Forged silver bolt silhouettes with an oxidized charcoal finish. Choose between Magnetic and Traditional Non-Magnetic backing.',
    price: 9800,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b13b244252?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Raw Silver Cross Aviators',
    description: 'Surgical grade steel frames with hand-forged silver cross inserts. Each temple is uniquely distressed by our smiths.',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format&fit=crop'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    title: 'Forged Heavy Links',
    category: 'Chains',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'g2',
    title: 'The Shadow Look',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-[2/3]'
  },
  {
    id: 'g3',
    title: 'Surgical Gothic Frames',
    category: 'Eyewear',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-square'
  },
  {
    id: 'g4',
    title: 'Oxidized Silver Detail',
    category: 'Chains',
    image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-[2/3]'
  },
  {
    id: 'g5',
    title: 'Avant-Garde Silhouette',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'g6',
    title: 'The Alchemist Link',
    category: 'Chains',
    image: 'https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 'g7',
    title: 'Gothic Stud Details',
    category: 'Earrings',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-square'
  },
  {
    id: 'g8',
    title: 'Monochrome Rebellion',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-[9/16]'
  },
  {
    id: 'g9',
    title: 'Cold-Welded Silver Frames',
    category: 'Eyewear',
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-video'
  },
  {
    id: 'g10',
    title: 'The Hand of the Smith',
    category: 'Studio',
    image: 'https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-square'
  },
  {
    id: 'g11',
    title: 'Margiela Inspired Dark Wear',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-[2/3]'
  },
  {
    id: 'g12',
    title: 'Industrial Silver Motif',
    category: 'Chains',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-[9/16]'
  }
];

export const MATERIAL_STATS: MaterialStat[] = [
  { name: 'Oxidized Silver', popularity: 98 },
  { name: 'Surgical Steel', popularity: 75 },
  { name: 'Black Acetate', popularity: 92 },
  { name: 'Magnetic Backings', popularity: 65 }
];
