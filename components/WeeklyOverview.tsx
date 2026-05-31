import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { restDay, workoutDays } from "../constants/workout-data";
import { colors, radius } from "../theme/colors";
import { shadows } from "../theme/shadows";
import { spacing } from "../theme/spacing";

type WeeklyOverviewProps = {
  selectedDay: number;
  onSelectDay: (day: number) => void;
};

export function WeeklyOverview({
  selectedDay,
  onSelectDay,
}: WeeklyOverviewProps) {
  const items = [
    ...workoutDays.map((d) => ({
      key: d.id,
      day: d.day,
      label: d.label,
      sub: `${d.exercises.length} exercises`,
      index: d.day - 1,
      isRest: false,
    })),
    {
      key: "rest",
      day: restDay.day,
      label: restDay.label,
      sub: "Recovery",
      index: 6,
      isRest: true,
    },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scroll}
    >
      {items.map((item) => {
        const active = selectedDay === item.index;
        return (
          <Pressable
            key={item.key}
            onPress={() => onSelectDay(item.index)}
            style={({ pressed }) => [
              styles.chip,
              !active && shadows.sm,
              item.isRest && !active && styles.chipRest,
              pressed && styles.chipPressed,
            ]}
          >
            {active ? (
              <View style={styles.chipActive}>
                <ChipContent item={item} active />
              </View>
            ) : (
              <View style={styles.chipInner}>
                <ChipContent item={item} active={false} />
              </View>
            )}
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

function ChipContent({
  item,
  active,
}: {
  item: {
    day: number;
    label: string;
    sub: string;
    isRest: boolean;
  };
  active: boolean;
}) {
  return (
    <>
      <View style={styles.chipTop}>
        <Text style={[styles.dayNum, active && styles.dayNumActive]}>
          {item.day}
        </Text>
        <MaterialCommunityIcons
          name={item.isRest ? "moon-waning-crescent" : "dumbbell"}
          size={14}
          color={active ? "rgba(255,255,255,0.85)" : colors.mutedForeground}
        />
      </View>
      <Text
        style={[styles.label, active && styles.labelActive]}
        numberOfLines={1}
      >
        {item.label}
      </Text>
      <Text style={[styles.sub, active && styles.subActive]}>{item.sub}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    gap: spacing.sm,
    paddingVertical: spacing.xs,
    paddingRight: spacing.xl,
  },
  chip: {
    borderRadius: radius.xl,
    overflow: "hidden",
    minWidth: 120,
  },
  chipRest: {
    borderWidth: 1,
    borderColor: colors.primaryLight,
    borderStyle: "dashed",
  },
  chipPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
  },
  chipActive: {
    padding: spacing.md,
    borderRadius: radius.xl,
    backgroundColor: colors.primary,
  },
  chipInner: {
    padding: spacing.md,
    backgroundColor: colors.card,
    borderRadius: radius.xl,
  },
  chipTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  dayNum: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.primary,
  },
  dayNumActive: {
    color: colors.primaryForeground,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.foreground,
  },
  labelActive: {
    color: colors.primaryForeground,
  },
  sub: {
    marginTop: 2,
    fontSize: 11,
    color: colors.mutedForeground,
  },
  subActive: {
    color: "rgba(255,255,255,0.75)",
  },
});
