import { StyleSheet, Text, View, type ViewStyle } from "react-native";

import { colors, radius } from "../theme/colors";
import { spacing } from "../theme/spacing";

type BadgeVariant = "secondary" | "outline";

type BadgeProps = {
  children: string;
  variant?: BadgeVariant;
  style?: ViewStyle;
};

export function Badge({ children, variant = "secondary", style }: BadgeProps) {
  const isOutline = variant === "outline";

  return (
    <View
      style={[
        styles.badge,
        isOutline ? styles.outline : styles.secondary,
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          isOutline ? styles.outlineText : styles.secondaryText,
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.full,
  },
  secondary: {
    backgroundColor: colors.primaryMuted,
  },
  outline: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  secondaryText: {
    color: colors.primary,
  },
  outlineText: {
    color: colors.mutedForeground,
  },
});
