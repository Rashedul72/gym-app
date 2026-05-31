import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import type { Exercise } from "../constants/workout-data";
import { getExerciseImageSource } from "../lib/getExerciseImageSource";
import { colors, radius } from "../theme/colors";
import { shadows } from "../theme/shadows";
import { spacing } from "../theme/spacing";
import { IntensityBadge } from "./IntensityBadge";

type ExerciseRowProps = {
  exercise: Exercise;
  onPress: () => void;
};

export function ExerciseRow({ exercise, onPress }: ExerciseRowProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        shadows.sm,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.thumbWrap}>
        <Image
          source={getExerciseImageSource(exercise)}
          style={styles.thumb}
          resizeMode="contain"
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.name} numberOfLines={2}>
          {exercise.name}
        </Text>
        <Text style={styles.sets}>{exercise.sets}</Text>
      </View>
      <View style={styles.trailing}>
        <IntensityBadge intensity={exercise.intensity} />
        <MaterialCommunityIcons
          name="chevron-right"
          size={20}
          color={colors.border}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderRadius: radius.xl,
    backgroundColor: colors.card,
  },
  pressed: {
    opacity: 0.95,
    transform: [{ scale: 0.99 }],
  },
  thumbWrap: {
    width: 56,
    height: 56,
    borderRadius: radius.lg,
    backgroundColor: colors.muted,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  thumb: {
    width: 52,
    height: 52,
  },
  body: {
    flex: 1,
    minWidth: 0,
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.foreground,
    letterSpacing: -0.2,
  },
  sets: {
    marginTop: 3,
    fontSize: 13,
    color: colors.mutedForeground,
  },
  trailing: {
    alignItems: "flex-end",
    gap: spacing.sm,
  },
});
