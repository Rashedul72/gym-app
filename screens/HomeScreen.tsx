import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Badge } from "../components/Badge";
import { colors, radius } from "../theme/colors";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80";

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Badge variant="secondary">Structured Training Program</Badge>

      <Text style={styles.brandMuted}>iWeekly Split</Text>
 

      <Text style={styles.lead}>
        A structured 6-day workout plan for strength, muscle growth, and
        consistency. Built for those who take training seriously.
      </Text>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <MaterialCommunityIcons
            name="calendar-week"
            size={18}
            color={colors.primary}
          />
          <Text style={styles.statText}>6 Training Days</Text>
        </View>
        <View style={styles.stat}>
          <MaterialCommunityIcons
            name="moon-waning-crescent"
            size={18}
            color={colors.primary}
          />
          <Text style={styles.statText}>1 Rest Day</Text>
        </View>
        <View style={styles.stat}>
          <MaterialCommunityIcons
            name="target"
            size={18}
            color={colors.primary}
          />
          <Text style={styles.statText}>Strength + Hypertrophy</Text>
        </View>
      </View>

      <View style={styles.heroCard}>
        <Image source={{ uri: HERO_IMAGE }} style={styles.heroImage} />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroCaption}>Weekly Volume</Text>
          <Text style={styles.heroValue}>6 Days + Rest</Text>
        </View>
      </View>

      {/* <Text style={styles.hint}>
        Open the Workout tab to view all 7 days — exercise lists, sets, and
        illustration images (same as the gym-web app).
      </Text> */}
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 32,
    gap: 12,
  },
  brandMuted: {
    fontSize: 36,
    fontWeight: "800",
    letterSpacing: -1,
    color: colors.foreground,
    marginTop: 8,
  },
  brand: {
    fontSize: 36,
    fontWeight: "800",
    letterSpacing: -1,
    color: colors.primary,
    marginTop: -8,
  },
  lead: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.mutedForeground,
    marginTop: 4,
  },
  stats: {
    marginTop: 12,
    gap: 8,
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.muted,
  },
  statText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.foreground,
  },
  heroCard: {
    marginTop: 16,
    borderRadius: radius.xl,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border,
    height: 220,
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  heroCaption: {
    fontSize: 12,
    color: "#d1d5db",
  },
  heroValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
  hint: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: colors.mutedForeground,
  },
});
