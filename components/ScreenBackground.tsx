import { StyleSheet, View, type ViewProps } from "react-native";

import { colors } from "../theme/colors";

type ScreenBackgroundProps = ViewProps & {
  children: React.ReactNode;
};

export function ScreenBackground({ children, style, ...props }: ScreenBackgroundProps) {
  return (
    <View style={[styles.root, style]} {...props}>
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
