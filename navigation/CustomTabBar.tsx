import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, radius } from "../theme/colors";
import { shadows } from "../theme/shadows";
import { spacing } from "../theme/spacing";

type TabConfig = {
  label: string;
  icon: "home-variant" | "dumbbell";
};

const TABS: Record<string, TabConfig> = {
  Home: { label: "Home", icon: "home-variant" },
  Workout: { label: "Workout", icon: "dumbbell" },
};

export function CustomTabBar({
  state,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  // Sit closer to the bottom edge while keeping minimal safe-area clearance
  const bottomPad = insets.bottom > 0 ? Math.max(insets.bottom - 10, 6) : 8;

  return (
    <View style={[styles.wrapper, { paddingBottom: bottomPad }]}>
      <View style={[styles.track, shadows.md]}>
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const config = TABS[route.name] ?? {
            label: route.name,
            icon: "home-variant" as const,
          };

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              style={({ pressed }) => [
                styles.tab,
                focused && styles.tabActive,
                pressed && !focused && styles.tabPressed,
              ]}
              android_ripple={{
                color: "rgba(37, 99, 235, 0.2)",
                borderless: false,
                radius: radius.xl,
              }}
              accessibilityRole="button"
              accessibilityState={focused ? { selected: true } : {}}
              accessibilityLabel={config.label}
            >
              <MaterialCommunityIcons
                name={config.icon}
                size={22}
                color={focused ? colors.primaryForeground : colors.mutedForeground}
              />
              <Text style={[styles.label, focused && styles.labelActive]}>
                {config.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: spacing.xl,
    paddingTop: 0,
    backgroundColor: "transparent",
  },
  track: {
    flexDirection: "row",
    backgroundColor: colors.card,
    borderRadius: radius["2xl"],
    padding: 5,
    borderWidth: 1,
    borderColor: colors.borderLight,
    overflow: "hidden",
  },
  tab: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: radius.xl,
    overflow: "hidden",
  },
  tabActive: {
    backgroundColor: colors.primary,
  },
  tabPressed: {
    opacity: 0.85,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.mutedForeground,
  },
  labelActive: {
    fontWeight: "700",
    color: colors.primaryForeground,
  },
});
