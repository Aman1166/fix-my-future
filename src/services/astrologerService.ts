export interface Astrologer {
  id: number;
  name: string;
  expertise: string[];
  experience: number;
  price: number;
  rating: number;
  consultations: number;
  languages: string[];
  online: boolean;
  busy?: boolean;
  image: string;
}

const MOCK_ASTROLOGERS: Astrologer[] = [
  {
    id: 1,
    name: 'Acharya Rajendra Ji',
    expertise: ['Vedic Astrology', 'Vastu Shastra', 'Gemology'],
    experience: 15,
    price: 35,
    rating: 4.9,
    consultations: 12450,
    languages: ['Hindi', 'English'],
    online: true,
    image: 'https://images.unsplash.com/photo-1542343633-ce3256f2183e?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    name: 'Astro Megha',
    expertise: ['Tarot Card Reading', 'Numerology', 'Love Expert'],
    experience: 8,
    price: 25,
    rating: 4.7,
    consultations: 8900,
    languages: ['Hindi', 'English', 'Punjabi'],
    online: true,
    busy: true,
    image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 3,
    name: 'Swami Shivanand',
    expertise: ['Palmistry', 'Kundali Matching', 'Vedic'],
    experience: 22,
    price: 50,
    rating: 4.95,
    consultations: 25600,
    languages: ['Hindi', 'Sanskrit'],
    online: true,
    image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 4,
    name: 'Dr. Neha Sharma',
    expertise: ['KP Astrology', 'Nadi Astrology', 'Career Advice'],
    experience: 12,
    price: 30,
    rating: 4.8,
    consultations: 11200,
    languages: ['Hindi', 'English'],
    online: true,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 5,
    name: 'Acharya Manish',
    expertise: ['Prashna Kundali', 'Financial Astrology', 'Lal Kitab'],
    experience: 10,
    price: 28,
    rating: 4.6,
    consultations: 7400,
    languages: ['Hindi', 'Gujarati'],
    online: false,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 6,
    name: 'Pandit Suresh Joshi',
    expertise: ['Vedic Astrology', 'Gemstone Healing', 'Vastu Remedies'],
    experience: 18,
    price: 40,
    rating: 4.85,
    consultations: 15800,
    languages: ['Hindi', 'English', 'Marathi'],
    online: true,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80'
  }
];

export const astrologerService = {
  getAstrologers: async (): Promise<Astrologer[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return MOCK_ASTROLOGERS;
  },
  getAstrologerById: async (id: number): Promise<Astrologer | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return MOCK_ASTROLOGERS.find(a => a.id === id);
  }
};
