import { StyleSheet, Text, View } from "react-native";

import type { Exercise } from "../constants/workout-data";
import { colors, radius } from "../theme/colors";

type IntensityBadgeProps = {
  intensity: Exercise["intensity"];
};

export function IntensityBadge({ intensity }: IntensityBadgeProps) {
  const palette = colors.intensity[intensity];

  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: palette.bg, borderColor: palette.border },
      ]}
    >
      <Text style={[styles.text, { color: palette.text }]}>{intensity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: radius.sm,
  },
  text: {
    fontSize: 11,
    fontWeight: "600",
  },
});
