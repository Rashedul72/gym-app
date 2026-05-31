import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Badge } from "../components/Badge";
import { ScreenBackground } from "../components/ScreenBackground";
import { colors, radius } from "../theme/colors";
import { shadows } from "../theme/shadows";
import { spacing } from "../theme/spacing";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80";

const STATS = [
  { icon: "calendar-week" as const, label: "6 Training Days" },
  { icon: "moon-waning-crescent" as const, label: "1 Rest Day" },
  { icon: "target" as const, label: "Strength + Hypertrophy" },
];

export function HomeScreen() {
  return (
    <ScreenBackground>
      <SafeAreaView style={styles.safe} edges={["top"]}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headerRow}>
            <View style={styles.logoMark}>
              <MaterialCommunityIcons
                name="dumbbell"
                size={26}
                color={colors.primaryForeground}
              />
            </View>
            <Badge variant="secondary">6-Day Program</Badge>
          </View>

          <Text style={styles.title}>iWeekly Split</Text>


          <Text style={styles.lead}>
            A structured plan for strength, muscle growth, and consistency —
            built for serious training.
          </Text>

          <View style={styles.statsRow}>
            {STATS.map((stat) => (
              <View key={stat.label} style={[styles.statCard, shadows.sm]}>
                <View style={styles.statIconWrap}>
                  <MaterialCommunityIcons
                    name={stat.icon}
                    size={18}
                    color={colors.primary}
                  />
                </View>
                <Text style={styles.statText} numberOfLines={2}>
                  {stat.label}
                </Text>
              </View>
            ))}
          </View>

          <View style={[styles.heroCard, shadows.md]}>
            <Image source={{ uri: HERO_IMAGE }} style={styles.heroImage} />
            <View style={styles.heroOverlay} />
            <View style={styles.heroContent}>
              <Text style={styles.heroCaption}>Weekly volume</Text>
              <Text style={styles.heroValue}>6 days + rest</Text>
              <View style={styles.heroPill}>
                <MaterialCommunityIcons
                  name="lightning-bolt"
                  size={14}
                  color={colors.primaryLight}
                />
                <Text style={styles.heroPillText}>Stay consistent</Text>
              </View>
            </View>
          </View>

          <View style={[styles.ctaCard, shadows.sm]}>
            <MaterialCommunityIcons
              name="arrow-right-circle"
              size={22}
              color={colors.primary}
            />
            <Text style={styles.ctaText}>
              Open <Text style={styles.ctaBold}>Workout</Text> to browse all 7
              days and exercises
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: {
    paddingHorizontal: spacing.xl,
    paddingBottom: 110,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.lg,
  },
  logoMark: {
    width: 48,
    height: 48,
    borderRadius: radius.lg,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
    letterSpacing: -1.5,
    color: colors.foreground,
    lineHeight: 44,
  },
  titleAccent: {
    fontSize: 40,
    fontWeight: "800",
    letterSpacing: -1.5,
    color: colors.primary,
    marginTop: -4,
    marginBottom: spacing.md,
  },
  lead: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.mutedForeground,
  },
  statsRow: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: spacing.xl,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    alignItems: "flex-start",
    gap: spacing.sm,
  },
  statIconWrap: {
    width: 32,
    height: 32,
    borderRadius: radius.md,
    backgroundColor: colors.primaryMuted,
    alignItems: "center",
    justifyContent: "center",
  },
  statText: {
    fontSize: 11,
    fontWeight: "600",
    color: colors.foreground,
    lineHeight: 15,
  },
  heroCard: {
    marginTop: spacing.xl,
    height: 240,
    borderRadius: radius["2xl"],
    overflow: "hidden",
    backgroundColor: colors.card,
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.imageOverlay,
  },
  heroContent: {
    position: "absolute",
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.lg,
  },
  heroCaption: {
    fontSize: 12,
    fontWeight: "600",
    color: "#94A3B8",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  heroValue: {
    fontSize: 24,
    fontWeight: "800",
    color: "#fff",
    marginTop: 2,
  },
  heroPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: spacing.md,
    alignSelf: "flex-start",
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.full,
    backgroundColor: "rgba(255,255,255,0.12)",
  },
  heroPillText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#E2E8F0",
  },
  ctaCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    marginTop: spacing.xl,
    padding: spacing.lg,
    borderRadius: radius.xl,
    backgroundColor: colors.card,
  },
  ctaText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: colors.mutedForeground,
  },
  ctaBold: {
    fontWeight: "700",
    color: colors.primary,
  },
});
