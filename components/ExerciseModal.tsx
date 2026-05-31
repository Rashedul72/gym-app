import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
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
import { shadows } from "../theme/shadows";
import { spacing } from "../theme/spacing";
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
        <Pressable
          style={[styles.card, shadows.lg]}
          onPress={(e) => e.stopPropagation()}
        >
          <LinearGradient
            colors={[colors.gradient.start, colors.gradient.end]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.cardAccent}
          />
          <Pressable style={styles.close} onPress={onClose} hitSlop={12}>
            <MaterialCommunityIcons
              name="close"
              size={20}
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
              <View style={styles.setsPill}>
                <MaterialCommunityIcons
                  name="repeat"
                  size={14}
                  color={colors.primary}
                />
                <Text style={styles.sets}>{exercise.sets}</Text>
              </View>
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
    backgroundColor: colors.overlay,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.xl,
  },
  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: colors.card,
    borderRadius: radius["2xl"],
    overflow: "hidden",
    maxHeight: "85%",
  },
  cardAccent: {
    height: 4,
    width: "100%",
  },
  close: {
    position: "absolute",
    top: spacing.md,
    right: spacing.md,
    zIndex: 2,
    width: 36,
    height: 36,
    borderRadius: radius.full,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrap: {
    height: 300,
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl,
    borderRadius: radius.xl,
    backgroundColor: colors.muted,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  meta: {
    padding: spacing.xl,
    gap: spacing.md,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: -0.4,
    color: colors.foreground,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: spacing.md,
  },
  setsPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.full,
    backgroundColor: colors.primaryMuted,
  },
  sets: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.primaryDark,
  },
});
