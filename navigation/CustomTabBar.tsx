import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
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
  const bottomPad = Math.max(insets.bottom, spacing.md);

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
              style={styles.tab}
              accessibilityRole="button"
              accessibilityState={focused ? { selected: true } : {}}
              accessibilityLabel={config.label}
            >
              {focused ? (
                <LinearGradient
                  colors={[colors.gradient.start, colors.gradient.end]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.activePill}
                >
                  <MaterialCommunityIcons
                    name={config.icon}
                    size={22}
                    color={colors.primaryForeground}
                  />
                  <Text style={styles.labelActive}>{config.label}</Text>
                </LinearGradient>
              ) : (
                <View style={styles.inactiveContent}>
                  <MaterialCommunityIcons
                    name={config.icon}
                    size={22}
                    color={colors.mutedForeground}
                  />
                  <Text style={styles.labelInactive}>{config.label}</Text>
                </View>
              )}
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
    paddingTop: spacing.sm,
    backgroundColor: "transparent",
  },
  track: {
    flexDirection: "row",
    backgroundColor: colors.card,
    borderRadius: radius["2xl"],
    padding: 5,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  tab: {
    flex: 1,
  },
  activePill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: radius.xl,
  },
  inactiveContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: radius.xl,
  },
  labelActive: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.primaryForeground,
  },
  labelInactive: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.mutedForeground,
  },
});
