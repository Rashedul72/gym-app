import type { ImageSourcePropType } from "react-native";

import type { WorkoutImageKey } from "./exerciseImages";

/** Local PNGs in assets/images/workouts/ (same files as gym-web) */
export const localWorkoutImages: Partial<
  Record<WorkoutImageKey, ImageSourcePropType>
> = {
  "bench-press": require("../assets/images/workouts/bench-press.png"),
  "incline-dumbbell-press": require("../assets/images/workouts/incline-dumbbell-press.png"),
  "chest-fly": require("../assets/images/workouts/chest-fly.png"),
  dips: require("../assets/images/workouts/dips.png"),
  "triceps-pushdown": require("../assets/images/workouts/triceps-pushdown.png"),
  "overhead-triceps-extension": require("../assets/images/workouts/overhead-triceps-extension.png"),
  "lat-pulldown": require("../assets/images/workouts/lat-pulldown.png"),
  "barbell-row": require("../assets/images/workouts/barbell-row.png"),
  "seated-cable-row": require("../assets/images/workouts/seated-cable-row.png"),
  deadlift: require("../assets/images/workouts/deadlift.png"),
  "barbell-curl": require("../assets/images/workouts/barbell-curl.png"),
  "hammer-curl": require("../assets/images/workouts/hammer-curl.png"),
  "shoulder-press": require("../assets/images/workouts/shoulder-press.png"),
  "lateral-raise": require("../assets/images/workouts/lateral-raise.png"),
  "front-raise": require("../assets/images/workouts/front-raise.png"),
  "rear-delt-fly": require("../assets/images/workouts/rear-delt-fly.png"),
  shrugs: require("../assets/images/workouts/shrugs.png"),
  "hanging-leg-raise": require("../assets/images/workouts/hanging-leg-raise.png"),
  plank: require("../assets/images/workouts/plank.png"),
  squat: require("../assets/images/workouts/squat.png"),
  "leg-press": require("../assets/images/workouts/leg-press.png"),
  "leg-extension": require("../assets/images/workouts/leg-extension.png"),
  "leg-curl": require("../assets/images/workouts/leg-curl.png"),
  "calf-raise": require("../assets/images/workouts/calf-raise.png"),
  "incline-bench-press": require("../assets/images/workouts/incline-bench-press.png"),
  "pull-up": require("../assets/images/workouts/pull-up.png"),
  "dumbbell-press": require("../assets/images/workouts/dumbbell-press.png"),
  "t-bar-row": require("../assets/images/workouts/t-bar-row.png"),
  "cable-crossover": require("../assets/images/workouts/cable-crossover.png"),
  "preacher-curl": require("../assets/images/workouts/preacher-curl.png"),
  "triceps-dips": require("../assets/images/workouts/triceps-dips.png"),
  "skull-crusher": require("../assets/images/workouts/skull-crusher.png"),
  "cable-curl": require("../assets/images/workouts/cable-curl.png"),
  "crunch-leg-raise": require("../assets/images/workouts/crunch-leg-raise.png"),
};

export function resolveExerciseImage(
  fileKey: WorkoutImageKey | undefined,
  fallbackUri: string,
): ImageSourcePropType {
  if (fileKey && localWorkoutImages[fileKey]) {
    return localWorkoutImages[fileKey]!;
  }
  return { uri: fallbackUri };
}
