import {
  Pressable,
  StyleSheet,
  Text,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";

import { colors, radius } from "../theme/colors";

type ButtonProps = Omit<PressableProps, "style"> & {
  title: string;
  style?: StyleProp<ViewStyle>;
};

export function Button({ title, style, disabled, ...props }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
      disabled={disabled}
      {...props}
    >
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.9,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    color: colors.primaryForeground,
    fontSize: 14,
    fontWeight: "600",
  },
});
