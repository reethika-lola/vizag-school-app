import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AddSchoolScreen } from "../screens/admin/AddSchoolScreen";
import { AdminDashboardScreen } from "../screens/admin/AdminDashboardScreen";
import { EditSchoolScreen } from "../screens/admin/EditSchoolScreen";
import { ManageAdmissionsScreen } from "../screens/admin/ManageAdmissionsScreen";
import { UploadImagesScreen } from "../screens/admin/UploadImagesScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { OnboardingScreen } from "../screens/OnboardingScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { SchoolDetailScreen } from "../screens/SchoolDetailScreen";
import { SchoolListingScreen } from "../screens/SchoolListingScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { SignupScreen } from "../screens/SignupScreen";
import { SplashScreen } from "../screens/SplashScreen";
import { CompareSchoolsScreen } from "../screens/CompareSchoolsScreen";
import { BottomTabParamList, RootStackParamList } from "../types";
import { BottomTabBar } from "./BottomTabBar";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator<BottomTabParamList>();

function MainTabs() {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <BottomTabBar {...props} />}>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Search" component={SearchScreen} />
      <Tabs.Screen name="Favorites" component={FavoritesScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
}

export function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="SchoolListing" component={SchoolListingScreen} />
      <Stack.Screen name="SchoolDetail" component={SchoolDetailScreen} />
      <Stack.Screen name="CompareSchools" component={CompareSchoolsScreen} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
      <Stack.Screen name="AddSchool" component={AddSchoolScreen} />
      <Stack.Screen name="EditSchool" component={EditSchoolScreen} />
      <Stack.Screen name="UploadImages" component={UploadImagesScreen} />
      <Stack.Screen name="ManageAdmissions" component={ManageAdmissionsScreen} />
    </Stack.Navigator>
  );
}
