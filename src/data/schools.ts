import { Category, School } from "../types";

export const categories: Category[] = [
  { id: "CBSE", label: "CBSE", icon: "school-outline", count: 42 },
  { id: "ICSE", label: "ICSE", icon: "library-outline", count: 18 },
  { id: "State Board", label: "State Board", icon: "ribbon-outline", count: 64 },
  { id: "International", label: "International", icon: "earth-outline", count: 9 }
];

export const schools: School[] = [
  {
    id: "oakridge-vizag",
    name: "Oakridge International School",
    tagline: "Global learning with coastal campus energy",
    board: "International",
    locality: "Rushikonda",
    distanceKm: 3.2,
    rating: 4.8,
    reviewCount: 842,
    annualFees: "₹2.4L - ₹4.8L",
    admissionStatus: "Open",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1400&auto=format&fit=crop"
    ],
    facilities: ["Smart Classes", "Transport", "Sports Complex", "STEM Lab", "Library", "Counselling"],
    address: "Near IT SEZ, Rushikonda, Visakhapatnam, Andhra Pradesh",
    phone: "+91 89123 45001",
    website: "https://www.oakridge.in",
    established: 2008,
    studentTeacherRatio: "12:1",
    grades: "Nursery - Grade 12",
    coordinates: { latitude: 17.7827, longitude: 83.3762 }
  },
  {
    id: "timpany-school",
    name: "Timpany School",
    tagline: "Heritage academics with strong values",
    board: "ICSE",
    locality: "Asilmetta",
    distanceKm: 1.8,
    rating: 4.7,
    reviewCount: 1260,
    annualFees: "₹85K - ₹1.7L",
    admissionStatus: "Limited Seats",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1400&auto=format&fit=crop"
    ],
    facilities: ["Library", "Transport", "Sports Complex", "Cafeteria", "Counselling"],
    address: "Asilmetta Junction, Visakhapatnam, Andhra Pradesh",
    phone: "+91 89127 84012",
    website: "https://www.timpanyschool.in",
    established: 1931,
    studentTeacherRatio: "18:1",
    grades: "LKG - Grade 12",
    coordinates: { latitude: 17.7215, longitude: 83.3087 }
  },
  {
    id: "delhi-public-school",
    name: "Delhi Public School Vizag",
    tagline: "Future-focused CBSE campus near the city edge",
    board: "CBSE",
    locality: "Anandapuram",
    distanceKm: 9.4,
    rating: 4.6,
    reviewCount: 936,
    annualFees: "₹1.2L - ₹2.6L",
    admissionStatus: "Open",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop"
    ],
    facilities: ["Smart Classes", "Transport", "STEM Lab", "Sports Complex", "Swimming", "Library"],
    address: "Anandapuram, Visakhapatnam, Andhra Pradesh",
    phone: "+91 89129 33020",
    website: "https://www.dpsvisakhapatnam.org",
    established: 2015,
    studentTeacherRatio: "15:1",
    grades: "Pre-KG - Grade 12",
    coordinates: { latitude: 17.8963, longitude: 83.3931 }
  },
  {
    id: "sri-prakash",
    name: "Sri Prakash Vidyaniketan",
    tagline: "Balanced academics, arts, and sports",
    board: "CBSE",
    locality: "MVP Colony",
    distanceKm: 2.6,
    rating: 4.5,
    reviewCount: 710,
    annualFees: "₹70K - ₹1.5L",
    admissionStatus: "Open",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?q=80&w=1400&auto=format&fit=crop"
    ],
    facilities: ["Smart Classes", "Transport", "Sports Complex", "Library", "Cafeteria"],
    address: "MVP Colony, Visakhapatnam, Andhra Pradesh",
    phone: "+91 89125 11888",
    website: "https://www.sriprakash.org",
    established: 2001,
    studentTeacherRatio: "16:1",
    grades: "Nursery - Grade 10",
    coordinates: { latitude: 17.7404, longitude: 83.3341 }
  },
  {
    id: "visakha-valley",
    name: "Visakha Valley School",
    tagline: "Iconic campus beside Kailasagiri hills",
    board: "State Board",
    locality: "Hanumanthawaka",
    distanceKm: 4.1,
    rating: 4.4,
    reviewCount: 1482,
    annualFees: "₹45K - ₹95K",
    admissionStatus: "Limited Seats",
    image: "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1400&auto=format&fit=crop"
    ],
    facilities: ["Transport", "Sports Complex", "Library", "Counselling"],
    address: "Near Kailasagiri, Hanumanthawaka, Visakhapatnam, Andhra Pradesh",
    phone: "+91 89127 22551",
    website: "https://www.visakhavalleyschool.edu.in",
    established: 1968,
    studentTeacherRatio: "20:1",
    grades: "LKG - Grade 10",
    coordinates: { latitude: 17.7482, longitude: 83.3427 }
  }
];

export const recentSearches = ["CBSE near MVP", "Admissions open", "International schools", "Low fee schools"];

export const suggestions = ["Best schools in Rushikonda", "ICSE schools near Asilmetta", "Schools with transport", "Grade 11 science"];
