export interface TimelineEvent {
  id: string;
  time: string;
  day: 'day1' | 'day2';
  title: string;
  description: string;
  iconName: 'sparkles' | 'wine' | 'music' | 'heart' | 'sun' | 'camera' | 'utensils' | 'ring';
}

export interface DressCodeSwatch {
  name: string;
  hex: string;
  label: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  src: string;
  category: 'portrait' | 'venue' | 'ceremony' | 'details' | 'reception';
  ratio: 'tall' | 'wide' | 'square';
}

export interface WeddingConfig {
  couple: {
    bride: {
      firstName: string;
      fullName: string;
      parents: string;
    };
    groom: {
      firstName: string;
      fullName: string;
      parents: string;
    };
    hashtag: string;
  };
  events: {
    reception: {
      title: string;
      dateFormatted: string;
      dateISO: string; // YYYY-MM-DD
      dayOfWeek: string;
      time: string;
      venue: string;
      address: string;
      city: string;
      notes: string;
    };
    muhurtham: {
      title: string;
      dateFormatted: string;
      dateISO: string;
      dayOfWeek: string;
      time: string;
      auspiciousTime: string;
      venue: string;
      address: string;
      city: string;
      notes: string;
    };
  };
  venue: {
    name: string;
    subheading: string;
    address: string;
    fullLocation: string;
    description: string;
    googleMapsUrl: string;
    mapCoordinates: {
      lat: number;
      lng: number;
    };
    parkingInfo: string;
  };
  invitationNote: {
    headline: string;
    body: string;
    quote: string;
  };
  timeline: TimelineEvent[];
  dressCode: {
    title: string;
    subtitle: string;
    description: string;
    paletteNotes: string;
    swatches: DressCodeSwatch[];
  };
  gallery: GalleryPhoto[];
  rsvp: {
    deadline: string;
    maxGuests: number;
    mealOptions: string[];
    eventsOptions: string[];
  };
  meta: {
    websiteUrl: string;
    contactPhone: string;
    contactEmail: string;
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    bride: {
      firstName: "Navya",
      fullName: "Navya Rao",
      parents: "Daughter of Smt. Radhika & Sri. Ramesh Rao",
    },
    groom: {
      firstName: "Vijay",
      fullName: "Vijay Krishna",
      parents: "Son of Smt. Lakshmi & Sri. Sundaram Krishna",
    },
    hashtag: "#NavyaWedsVijay",
  },
  events: {
    reception: {
      title: "Wedding Reception & Sangeet",
      dateFormatted: "Friday, August 14, 2026",
      dateISO: "2026-08-14T18:30:00+05:30",
      dayOfWeek: "Friday",
      time: "6:30 PM onwards",
      venue: "The Heritage Pavilion, JP Nagar",
      address: "24th Main Road, JP Nagar 6th Phase, Bengaluru, Karnataka 560078",
      city: "Bengaluru, Karnataka",
      notes: "An evening of laughter, music, heartfelt toasts, and a grand celebratory dinner.",
    },
    muhurtham: {
      title: "Sacred Muhurtham & Kalyanam",
      dateFormatted: "Saturday, August 15, 2026",
      dateISO: "2026-08-15T09:15:00+05:30",
      dayOfWeek: "Saturday",
      time: "8:30 AM to 1:30 PM",
      auspiciousTime: "Muhurtham: 09:15 AM — 10:30 AM (Kanya Lagna)",
      venue: "The Heritage Pavilion, JP Nagar",
      address: "24th Main Road, JP Nagar 6th Phase, Bengaluru, Karnataka 560078",
      city: "Bengaluru, Karnataka",
      notes: "Followed by traditional South Indian banana leaf feast (Vindhu Bhojanam).",
    },
  },
  venue: {
    name: "The Heritage Pavilion",
    subheading: "Courtyard & Grand Botanical Gardens, JP Nagar",
    address: "24th Main Road, JP Nagar 6th Phase, Bengaluru, Karnataka 560078",
    fullLocation: "JP Nagar, Bengaluru, India",
    description: "Nestled in the lush, serene groves of JP Nagar, The Heritage Pavilion blends timeless stone pillars, antique teakwood arches, cascading jasmine trees, and twinkling fairy-lit lawns for a truly magical celebration.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=JP+Nagar+Bangalore",
    mapCoordinates: {
      lat: 12.9063,
      lng: 77.5857,
    },
    parkingInfo: "Complimentary valet parking available at the main courtyard entrance.",
  },
  invitationNote: {
    headline: "Together With Their Families",
    body: "We invite you to witness the union of hearts and families as we begin our lifelong journey together. Your blessings, presence, and warm wishes are the greatest gifts we could cherish.",
    quote: "“Two souls, one destiny — rooted in devotion, blossoming in eternal love.”",
  },
  timeline: [
    {
      id: "ev-1",
      day: "day1",
      time: "18:00",
      title: "Guest Arrival & Welcome Drinks",
      description: "Chilled rose sherbet, tender coconut water, and artisanal canapés in the botanical courtyard.",
      iconName: "wine",
    },
    {
      id: "ev-2",
      day: "day1",
      time: "18:45",
      title: "Grand Entrance & Welcome",
      description: "Navya & Vijay make their grand entrance accompanied by celebratory music and rose petal shower.",
      iconName: "sparkles",
    },
    {
      id: "ev-3",
      day: "day1",
      time: "19:30",
      title: "Celebration & Ring Ceremony",
      description: "Exchange of rings, musical performances by family, and heartfelt toasts.",
      iconName: "ring",
    },
    {
      id: "ev-4",
      day: "day1",
      time: "20:30",
      title: "Royal Banquet Dinner",
      description: "A candlelit multi-cuisine banquet feast under string lights and starry skies.",
      iconName: "utensils",
    },
    {
      id: "ev-5",
      day: "day2",
      time: "08:00",
      title: "Morning Welcome & Nadaswaram",
      description: "Traditional music melodies, piping hot South Indian filter coffee, and morning tiffin.",
      iconName: "sun",
    },
    {
      id: "ev-6",
      day: "day2",
      time: "09:15",
      title: "Auspicious Muhurtham",
      description: "Sacred Vedic rituals, Kanyadaanam, Mangalya Dharanam, and the exchange of jasmine garlands.",
      iconName: "heart",
    },
    {
      id: "ev-7",
      day: "day2",
      time: "11:00",
      title: "Akshata Blessings & Couple Photography",
      description: "Guests bless the newlyweds with akshata rice followed by family portraits at the floral mandap.",
      iconName: "camera",
    },
    {
      id: "ev-8",
      day: "day2",
      time: "12:30",
      title: "Traditional Banana Leaf Feast",
      description: "Authentic, mouthwatering South Indian wedding feast (Vindhu Bhojanam) served on fresh plantain leaves.",
      iconName: "utensils",
    },
  ],
  dressCode: {
    title: "DRESS CODE",
    subtitle: "Harmonious Botanical & Festive Palette",
    description: "We invite our cherished guests to dress in our curated palette of warm neutrals, botanical greens, soft creams, and golden accents.",
    paletteNotes: "Traditional ethnic wear (Kanjeevaram / Silk Sarees, Kurta Pajama / Dhotis) or contemporary formal attire are warmly welcomed.",
    swatches: [
      { name: "Ivory Cream", hex: "#FAF7F0", label: "Pure Silks & Crisp Linens" },
      { name: "Sage Mist", hex: "#9CA789", label: "Soft Botanical Greens" },
      { name: "Muted Olive", hex: "#626B48", label: "Timeless Earth Tones" },
      { name: "Champagne Gold", hex: "#B8A477", label: "Royal & Festive Accents" },
      { name: "Forest Emerald", hex: "#303B26", label: "Deep Velvet & Heritage Silks" },
    ],
  },
  gallery: [
    {
      id: "g1",
      title: "Navya & Vijay",
      caption: "Embraced by ivory roses and the soft golden glow of twilight.",
      src: "/images/hero.jpg",
      category: "portrait",
      ratio: "tall",
    },
    {
      id: "g2",
      title: "The Heritage Pavilion",
      caption: "The stone courtyard illuminated with hundreds of warm fairy lights.",
      src: "/images/venue.jpg",
      category: "venue",
      ratio: "wide",
    },
    {
      id: "g3",
      title: "The Muhurtham Mandap",
      caption: "Cascading tuberose, fragrant jasmine, and gleaming brass oil lamps.",
      src: "/images/muhurtham.jpg",
      category: "ceremony",
      ratio: "wide",
    },
    {
      id: "g4",
      title: "Candlelit Banquet",
      caption: "An enchanting feast prepared for our beloved family and friends.",
      src: "/images/banquet.jpg",
      category: "reception",
      ratio: "wide",
    },
    {
      id: "g5",
      title: "Golden Vows & Details",
      caption: "Timeless heirlooms, wedding rings, and fine paper stationery.",
      src: "/images/rings.jpg",
      category: "details",
      ratio: "square",
    },
    {
      id: "g6",
      title: "Twilight Walk",
      caption: "Laughter, happiness, and footsteps into our forever.",
      src: "/images/evening.jpg",
      category: "portrait",
      ratio: "wide",
    },
  ],
  rsvp: {
    deadline: "July 25, 2026",
    maxGuests: 5,
    mealOptions: [
      "Traditional South Indian Vegetarian",
      "Royal Multi-Cuisine Vegetarian",
      "Non-Vegetarian Banquet",
      "Jain / Special Dietary",
    ],
    eventsOptions: [
      "Both Reception & Muhurtham (Aug 14 & 15)",
      "Wedding Reception only (Aug 14, 6:30 PM)",
      "Sacred Muhurtham only (Aug 15, 8:30 AM)",
    ],
  },
  meta: {
    websiteUrl: typeof window !== "undefined" ? window.location.origin : "https://navyawedsvijay.in",
    contactPhone: "+91 98450 12345",
    contactEmail: "celebrate@navyawedsvijay.in",
  },
};
