import { NavigatorScreenParams } from "@react-navigation/native";

export type BoardType = "CBSE" | "ICSE" | "State Board" | "International";

export type Facility =
  | "Smart Classes"
  | "Transport"
  | "Sports Complex"
  | "STEM Lab"
  | "Library"
  | "Cafeteria"
  | "Swimming"
  | "Counselling";

export type AdmissionStatus = "Open" | "Limited Seats" | "Closed";

export type School = {
  id: string;
  name: string;
  tagline: string;
  board: BoardType;
  locality: string;
  distanceKm: number;
  rating: number;
  reviewCount: number;
  annualFees: string;
  admissionStatus: AdmissionStatus;
  image: string;
  gallery: string[];
  facilities: Facility[];
  address: string;
  phone: string;
  website: string;
  established: number;
  studentTeacherRatio: string;
  grades: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
};

export type Category = {
  id: BoardType;
  label: string;
  icon: string;
  count: number;
};

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  Signup: undefined;
  MainTabs: NavigatorScreenParams<BottomTabParamList> | undefined;
  SchoolListing: { title?: string; board?: BoardType } | undefined;
  SchoolDetail: { schoolId: string };
  CompareSchools: { selectedIds?: string[] } | undefined;
  AdminDashboard: undefined;
  AddSchool: undefined;
  EditSchool: { schoolId?: string } | undefined;
  UploadImages: undefined;
  ManageAdmissions: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Favorites: undefined;
  Profile: undefined;
};
