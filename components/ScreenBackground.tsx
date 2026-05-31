import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, type ViewProps } from "react-native";

import { colors } from "../theme/colors";

type ScreenBackgroundProps = ViewProps & {
  children: React.ReactNode;
};

export function ScreenBackground({ children, style, ...props }: ScreenBackgroundProps) {
  return (
    <View style={[styles.root, style]} {...props}>
      <LinearGradient
        colors={[colors.backgroundAlt, colors.background, colors.background]}
        locations={[0, 0.35, 1]}
        style={StyleSheet.absoluteFill}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
