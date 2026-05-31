import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import type { Exercise } from "../constants/workout-data";
import { getExerciseImageSource } from "../lib/getExerciseImageSource";
import { colors, radius } from "../theme/colors";
import { IntensityBadge } from "./IntensityBadge";

type ExerciseModalProps = {
  exercise: Exercise | null;
  onClose: () => void;
};

export function ExerciseModal({ exercise, onClose }: ExerciseModalProps) {
  if (!exercise) return null;

  return (
    <Modal visible animationType="fade" transparent onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable style={styles.card} onPress={(e) => e.stopPropagation()}>
          <Pressable style={styles.close} onPress={onClose} hitSlop={12}>
            <MaterialCommunityIcons
              name="close"
              size={22}
              color={colors.foreground}
            />
          </Pressable>

          <View style={styles.imageWrap}>
            <Image
              source={getExerciseImageSource(exercise)}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <View style={styles.meta}>
            <Text style={styles.title}>{exercise.name}</Text>
            <View style={styles.row}>
              <Text style={styles.sets}>{exercise.sets}</Text>
              <IntensityBadge intensity={exercise.intensity} />
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    overflow: "hidden",
    maxHeight: "85%",
  },
  close: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 2,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrap: {
    height: 300,
    backgroundColor: colors.muted,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  meta: {
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.foreground,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
  },
  sets: {
    fontSize: 15,
    color: colors.mutedForeground,
  },
});
