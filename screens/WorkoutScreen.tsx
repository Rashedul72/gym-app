import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, type ComponentProps } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ExerciseModal } from "../components/ExerciseModal";
import { ExerciseRow } from "../components/ExerciseRow";
import { ScreenBackground } from "../components/ScreenBackground";
import { SectionHeader } from "../components/SectionHeader";
import { WeeklyOverview } from "../components/WeeklyOverview";
import {
  restDay,
  workoutDays,
  type Exercise,
} from "../constants/workout-data";
import { colors, radius } from "../theme/colors";
import { shadows } from "../theme/shadows";
import { spacing } from "../theme/spacing";

export function WorkoutScreen() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null,
  );

  const isRest = selectedDay === 6;
  const day = !isRest ? workoutDays[selectedDay] : null;

  return (
    <>
      <ScreenBackground>
        <SafeAreaView style={styles.safe} edges={["top"]}>
          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            <SectionHeader
              eyebrow="Your schedule"
              title="Training Program"
              subtitle="Pick a day, then tap any exercise to view the illustration"
            />

            <WeeklyOverview
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
            />

            {isRest ? (
              <View style={[styles.restPanel, shadows.md]}>
                <View style={styles.restContent}>
                  <View style={styles.restIcon}>
                    <MaterialCommunityIcons
                      name="moon-waning-crescent"
                      size={32}
                      color={colors.primary}
                    />
                  </View>
                  <Text style={styles.restTitle}>Day 7 — Rest & Recovery</Text>
                  <Text style={styles.restDesc}>{restDay.description}</Text>
                  <View style={styles.tips}>
                    {restDay.tips.map((tip) => (
                      <View key={tip} style={styles.tip}>
                        <Text style={styles.tipText}>{tip}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            ) : (
              day && (
                <>
                  <View style={[styles.dayHero, shadows.md]}>
                    <Image
                      source={{ uri: day.image }}
                      style={styles.dayImage}
                      resizeMode="cover"
                    />
                    <View style={styles.dayOverlayBg} />
                    <View style={styles.dayOverlay}>
                      <View style={styles.dayPill}>
                        <Text style={styles.dayPillText}>Day {day.day}</Text>
                      </View>
                      <Text style={styles.dayLabel}>{day.label}</Text>
                    </View>
                  </View>

                  <View style={[styles.focusCard, shadows.sm]}>
                    <View style={styles.focusHeader}>
                      <MaterialCommunityIcons
                        name="target"
                        size={20}
                        color={colors.primary}
                      />
                      <Text style={styles.focusTitle}>Workout focus</Text>
                    </View>
                    <Text style={styles.focusText}>{day.description}</Text>
                    <View style={styles.focusMeta}>
                      <MetaChip icon="timer-outline" text="~60 min" />
                      <MetaChip
                        icon="dumbbell"
                        text={`${day.exercises.length} exercises`}
                      />
                    </View>
                  </View>

                  <Text style={styles.exercisesHeading}>Exercises</Text>
                  {day.exercises.map((exercise) => (
                    <ExerciseRow
                      key={exercise.name}
                      exercise={exercise}
                      onPress={() => setSelectedExercise(exercise)}
                    />
                  ))}
                </>
              )
            )}
          </ScrollView>
        </SafeAreaView>
      </ScreenBackground>

      <ExerciseModal
        exercise={selectedExercise}
        onClose={() => setSelectedExercise(null)}
      />
    </>
  );
}

type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

function MetaChip({ icon, text }: { icon: IconName; text: string }) {
  return (
    <View style={styles.metaChip}>
      <MaterialCommunityIcons
        name={icon}
        size={14}
        color={colors.primary}
      />
      <Text style={styles.metaText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: {
    paddingHorizontal: spacing.xl,
    paddingBottom: 110,
  },
  dayHero: {
    marginTop: spacing.xl,
    height: 200,
    borderRadius: radius["2xl"],
    overflow: "hidden",
    backgroundColor: colors.card,
  },
  dayImage: {
    width: "100%",
    height: "100%",
  },
  dayOverlayBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.imageOverlay,
  },
  dayOverlay: {
    position: "absolute",
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.lg,
  },
  dayPill: {
    alignSelf: "flex-start",
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    marginBottom: spacing.sm,
  },
  dayPillText: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.primaryForeground,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  dayLabel: {
    fontSize: 24,
    fontWeight: "800",
    color: "#fff",
    letterSpacing: -0.5,
  },
  focusCard: {
    marginTop: spacing.lg,
    padding: spacing.lg,
    borderRadius: radius.xl,
    backgroundColor: colors.card,
  },
  focusHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  focusTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.foreground,
  },
  focusText: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.mutedForeground,
  },
  focusMeta: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  metaChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.full,
    backgroundColor: colors.primaryMuted,
  },
  metaText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.primaryDark,
  },
  exercisesHeading: {
    marginTop: spacing.xl,
    marginBottom: spacing.md,
    fontSize: 18,
    fontWeight: "800",
    color: colors.foreground,
    letterSpacing: -0.3,
  },
  restPanel: {
    marginTop: spacing.xl,
    borderRadius: radius["2xl"],
    overflow: "hidden",
    backgroundColor: colors.card,
  },
  restContent: {
    padding: spacing["2xl"],
    alignItems: "center",
    backgroundColor: colors.primaryMuted,
  },
  restIcon: {
    width: 72,
    height: 72,
    borderRadius: radius.xl,
    backgroundColor: colors.card,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.lg,
    ...shadows.sm,
  },
  restTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.foreground,
    textAlign: "center",
  },
  restDesc: {
    marginTop: spacing.md,
    fontSize: 14,
    lineHeight: 22,
    color: colors.mutedForeground,
    textAlign: "center",
  },
  tips: {
    marginTop: spacing.lg,
    gap: spacing.sm,
    width: "100%",
  },
  tip: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.card,
    ...shadows.sm,
  },
  tipText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: colors.foreground,
  },
});
