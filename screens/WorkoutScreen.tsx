import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ExerciseModal } from "../components/ExerciseModal";
import { ExerciseRow } from "../components/ExerciseRow";
import { WeeklyOverview } from "../components/WeeklyOverview";
import {
  restDay,
  workoutDays,
  type Exercise,
} from "../constants/workout-data";
import { colors, radius } from "../theme/colors";

export function WorkoutScreen() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null,
  );

  const isRest = selectedDay === 6;
  const day = !isRest ? workoutDays[selectedDay] : null;

  return (
    <>
      <SafeAreaView style={styles.safe} edges={["top"]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Training Program</Text>
        <Text style={styles.subtitle}>
          Your complete 7-day schedule — tap a day, then tap an exercise for the
          full image
        </Text>

        <WeeklyOverview
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
        />

        {isRest ? (
          <View style={styles.restPanel}>
            <View style={styles.restIcon}>
              <MaterialCommunityIcons
                name="moon-waning-crescent"
                size={36}
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
        ) : (
          day && (
            <>
              <View style={styles.dayHero}>
                <Image
                  source={{ uri: day.image }}
                  style={styles.dayImage}
                  resizeMode="cover"
                />
                <View style={styles.dayOverlay}>
                  <Text style={styles.dayBadge}>Day {day.day}</Text>
                  <Text style={styles.dayLabel}>{day.label}</Text>
                </View>
              </View>

              <View style={styles.focusCard}>
                <Text style={styles.focusTitle}>Workout Focus</Text>
                <Text style={styles.focusText}>{day.description}</Text>
                <View style={styles.focusMeta}>
                  <MaterialCommunityIcons
                    name="timer-outline"
                    size={16}
                    color={colors.mutedForeground}
                  />
                  <Text style={styles.metaText}>~60 min</Text>
                  <MaterialCommunityIcons
                    name="dumbbell"
                    size={16}
                    color={colors.mutedForeground}
                  />
                  <Text style={styles.metaText}>
                    {day.exercises.length} exercises
                  </Text>
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

      <ExerciseModal
        exercise={selectedExercise}
        onClose={() => setSelectedExercise(null)}
      />
    </>
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
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.foreground,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 16,
    fontSize: 14,
    lineHeight: 20,
    color: colors.mutedForeground,
  },
  dayHero: {
    marginTop: 20,
    height: 200,
    borderRadius: radius.xl,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border,
  },
  dayImage: {
    width: "100%",
    height: "100%",
  },
  dayOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  dayBadge: {
    alignSelf: "flex-start",
    fontSize: 12,
    fontWeight: "600",
    color: "#93c5fd",
    marginBottom: 4,
  },
  dayLabel: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
  focusCard: {
    marginTop: 16,
    padding: 16,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.muted,
  },
  focusTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.foreground,
    marginBottom: 8,
  },
  focusText: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.mutedForeground,
  },
  focusMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 12,
  },
  metaText: {
    fontSize: 12,
    color: colors.mutedForeground,
    marginRight: 8,
  },
  exercisesHeading: {
    marginTop: 20,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "700",
    color: colors.foreground,
  },
  restPanel: {
    marginTop: 24,
    padding: 24,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: "#93c5fd",
    backgroundColor: "#eff6ff",
    alignItems: "center",
  },
  restIcon: {
    width: 64,
    height: 64,
    borderRadius: radius.lg,
    backgroundColor: colors.primaryMuted,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  restTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1d4ed8",
    textAlign: "center",
    textTransform: "uppercase",
  },
  restDesc: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 22,
    color: colors.mutedForeground,
    textAlign: "center",
  },
  tips: {
    marginTop: 16,
    gap: 8,
    width: "100%",
  },
  tip: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  tipText: {
    fontSize: 14,
    textAlign: "center",
    color: colors.foreground,
  },
});
