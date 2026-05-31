import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import type { Exercise } from "../constants/workout-data";
import { getExerciseImageSource } from "../lib/getExerciseImageSource";
import { colors, radius } from "../theme/colors";
import { IntensityBadge } from "./IntensityBadge";

type ExerciseRowProps = {
  exercise: Exercise;
  onPress: () => void;
};

export function ExerciseRow({ exercise, onPress }: ExerciseRowProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
    >
      <Image
        source={getExerciseImageSource(exercise)}
        style={styles.thumb}
        resizeMode="contain"
      />
      <View style={styles.body}>
        <Text style={styles.name} numberOfLines={2}>
          {exercise.name}
        </Text>
        <Text style={styles.sets}>{exercise.sets}</Text>
      </View>
      <IntensityBadge intensity={exercise.intensity} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.muted,
    marginBottom: 10,
  },
  pressed: {
    opacity: 0.92,
    backgroundColor: colors.secondary,
  },
  thumb: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    backgroundColor: colors.secondary,
  },
  body: {
    flex: 1,
    minWidth: 0,
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.foreground,
  },
  sets: {
    marginTop: 2,
    fontSize: 13,
    color: colors.mutedForeground,
  },
});
