/** Matches gym-web iWeekly Split theme */
export const colors = {
  background: "#ffffff",
  foreground: "#111827",
  card: "#ffffff",
  cardForeground: "#111827",
  primary: "#2563eb",
  primaryForeground: "#ffffff",
  primaryMuted: "#dbeafe",
  secondary: "#f3f4f6",
  secondaryForeground: "#374151",
  muted: "#f9fafb",
  mutedForeground: "#6b7280",
  border: "#e5e7eb",
  destructive: "#dc2626",
  intensity: {
    Heavy: { bg: "#fef2f2", text: "#b91c1c", border: "#fecaca" },
    Moderate: { bg: "#fffbeb", text: "#b45309", border: "#fde68a" },
    Light: { bg: "#f0fdf4", text: "#15803d", border: "#bbf7d0" },
    Bodyweight: { bg: "#eff6ff", text: "#1d4ed8", border: "#bfdbfe" },
  },
} as const;

export const radius = {
  sm: 6,
  md: 8,
  lg: 10,
  xl: 14,
} as const;
