import type { ImageSourcePropType } from "react-native";

import type { Exercise } from "../constants/workout-data";
import { exerciseImageFiles } from "./exerciseImages";
import { resolveExerciseImage } from "./imageRegistry";

export function getExerciseImageSource(exercise: Exercise): ImageSourcePropType {
  const fileKey = exerciseImageFiles[exercise.name];
  return resolveExerciseImage(fileKey, exercise.image ?? "");
}
