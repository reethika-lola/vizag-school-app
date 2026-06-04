import { schools } from "../data/schools";

export function getSchoolById(id: string) {
  return schools.find((school) => school.id === id) ?? schools[0];
}

export function getPopularSchools() {
  return [...schools].sort((a, b) => b.reviewCount - a.reviewCount);
}

export function getTrendingSchools() {
  return [...schools].sort((a, b) => b.rating - a.rating);
}
