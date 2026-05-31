import { StyleSheet, Text, View, type ViewStyle } from "react-native";

import { colors, radius } from "../theme/colors";

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
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.md,
  },
  secondary: {
    backgroundColor: colors.primaryMuted,
    borderWidth: 1,
    borderColor: "#bfdbfe",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
  },
  secondaryText: {
    color: colors.primary,
  },
  outlineText: {
    color: colors.foreground,
  },
});
