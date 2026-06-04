export const palette = {
  primary: "#155EEF",
  primaryDark: "#0E3EA8",
  secondary: "#22C7A9",
  accent: "#FF8A34",
  background: "#FFFFFF",
  surface: "#F8FAFC",
  surfaceSoft: "#F1F5F9",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",
  darkBackground: "#08111F",
  darkSurface: "#111827",
  darkCard: "#172033",
  white: "#FFFFFF"
};

export const gradients = {
  primary: [palette.primary, "#3B82F6"] as const,
  teal: [palette.secondary, "#5EEAD4"] as const,
  sunset: [palette.accent, "#FDBA74"] as const,
  dark: ["#0F172A", "#1E293B"] as const
};
