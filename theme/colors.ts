/** Modern fitness app palette — solid blue theme */
export const colors = {
  background: "#F4F8FF",
  backgroundAlt: "#EFF6FF",
  foreground: "#0F172A",
  card: "#FFFFFF",
  cardForeground: "#0F172A",
  primary: "#2563EB",
  primaryDark: "#1D4ED8",
  primaryLight: "#60A5FA",
  primaryForeground: "#FFFFFF",
  primaryMuted: "#EFF6FF",
  secondary: "#F1F5F9",
  secondaryForeground: "#475569",
  muted: "#F8FAFC",
  mutedForeground: "#64748B",
  border: "#E2E8F0",
  borderLight: "#F1F5F9",
  accent: "#2563EB",
  destructive: "#EF4444",
  overlay: "rgba(15, 23, 42, 0.65)",
  imageOverlay: "rgba(15, 23, 42, 0.85)",
  intensity: {
    Heavy: { bg: "#FEF2F2", text: "#DC2626", border: "#FECACA" },
    Moderate: { bg: "#FFFBEB", text: "#D97706", border: "#FDE68A" },
    Light: { bg: "#F0FDF4", text: "#16A34A", border: "#BBF7D0" },
    Bodyweight: { bg: "#EFF6FF", text: "#2563EB", border: "#BFDBFE" },
  },
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  full: 999,
} as const;
