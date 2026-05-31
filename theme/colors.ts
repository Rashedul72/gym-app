/** Modern fitness app palette */
export const colors = {
  background: "#F4F6FB",
  backgroundAlt: "#EEF2FF",
  foreground: "#0F172A",
  card: "#FFFFFF",
  cardForeground: "#0F172A",
  primary: "#4F46E5",
  primaryDark: "#4338CA",
  primaryLight: "#818CF8",
  primaryForeground: "#FFFFFF",
  primaryMuted: "#EEF2FF",
  secondary: "#F1F5F9",
  secondaryForeground: "#475569",
  muted: "#F8FAFC",
  mutedForeground: "#64748B",
  border: "#E2E8F0",
  borderLight: "#F1F5F9",
  accent: "#06B6D4",
  destructive: "#EF4444",
  overlay: "rgba(15, 23, 42, 0.65)",
  gradient: {
    start: "#4F46E5",
    end: "#7C3AED",
  },
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
