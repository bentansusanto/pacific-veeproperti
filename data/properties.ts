export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  size: string;
  image: string;
  description: string;
  amenities: string[];
  agent: {
    name: string;
    phone: string;
    image: string;
  };
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Villa with Pool",
    location: "Canggu, Bali",
    price: "Rp 5.500.000.000",
    beds: 4,
    baths: 3,
    size: "250m2",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    description: "Experience the epitome of tropical luxury in this stunning modern villa located in the heart of Canggu. Featuring a private pool, open-concept living space, and premium finishes throughout. Perfect as a primary residence or a high-yield vacation rental.",
    amenities: ["Private Pool", "Smart Home System", "24/7 Security", "Fully Furnished", "Tropical Garden", "Private Garage"],
    agent: {
      name: "Sarah Wijaya",
      phone: "+62 811 2345 6789",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
    }
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    location: "Sudirman, Jakarta",
    price: "Rp 12.000.000.000",
    beds: 3,
    baths: 3,
    size: "180m2",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070&auto=format&fit=crop",
    description: "Perched high above the bustling streets of Sudirman, this exclusive penthouse offers breathtaking panoramic city views. Designed with sophisticated elegance, it features floor-to-ceiling windows, a private terrace, and access to world-class building amenities.",
    amenities: ["City View", "Private Elevator", "Gym Access", "Concierge Service", "Infinity Pool", "Smart Access"],
    agent: {
      name: "Budi Santoso",
      phone: "+62 812 9876 5432",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop"
    }
  },
  {
    id: 3,
    title: "Family House Garden",
    location: "BSD City, Tangerang",
    price: "Rp 3.200.000.000",
    beds: 3,
    baths: 2,
    size: "150m2",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    description: "A beautifully designed family home situated in a peaceful, family-friendly neighborhood in BSD City. It boasts a spacious lush garden, bright living areas, and is located just minutes away from top schools and shopping centers.",
    amenities: ["Spacious Garden", "Playground Area", "Clubhouse Access", "24/7 Security", "Carport", "Near Schools"],
    agent: {
      name: "Linda Kusuma",
      phone: "+62 813 4567 8901",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    }
  },
  {
    id: 4,
    title: "Minimalist Townhouse",
    location: "Kemang, Jakarta",
    price: "Rp 4.800.000.000",
    beds: 3,
    baths: 2,
    size: "165m2",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    description: "Located in the highly sought-after expatriate area of Kemang, this modern minimalist townhouse offers a blend of style and convenience. Features a sleek kitchen, cozy outdoor patio, and easy access to international schools and trendy cafes.",
    amenities: ["Private Patio", "Modern Kitchen", "Gated Community", "Maid Quarter", "2 Car Garage", "Near Cafes"],
    agent: {
      name: "Sarah Wijaya",
      phone: "+62 811 2345 6789",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
    }
  },
  {
    id: 5,
    title: "Seaview Private Estate",
    location: "Nusa Dua, Bali",
    price: "Rp 15.500.000.000",
    beds: 5,
    baths: 4,
    size: "450m2",
    image: "https://images.unsplash.com/photo-1613490900233-141c5560d75d?q=80&w=1967&auto=format&fit=crop",
    description: "An extraordinary private estate offering uninterrupted views of the Indian Ocean. This massive property features traditional Balinese architecture mixed with modern comforts, massive living areas, a 20-meter infinity pool, and direct beach access.",
    amenities: ["Ocean View", "20m Infinity Pool", "Direct Beach Access", "Billiard Room", "Private Chef Kitchen", "Spa Room"],
    agent: {
      name: "Budi Santoso",
      phone: "+62 812 9876 5432",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop"
    }
  },
  {
    id: 6,
    title: "Compact Urban Studio",
    location: "Kuningan, Jakarta",
    price: "Rp 1.500.000.000",
    beds: 1,
    baths: 1,
    size: "45m2",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    description: "Perfect for young professionals, this compact yet highly functional studio apartment is right in the CBD. It offers smart storage solutions, a built-in workspace, and access to premium facilities like a sky gym and co-working lounge.",
    amenities: ["Sky Gym", "Co-working Space", "Direct Mall Access", "Smart Lock", "Fully Furnished", "City View"],
    agent: {
      name: "Linda Kusuma",
      phone: "+62 813 4567 8901",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    }
  }
];
