import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { restDay, workoutDays } from "../constants/workout-data";
import { colors, radius } from "../theme/colors";

type WeeklyOverviewProps = {
  selectedDay: number;
  onSelectDay: (day: number) => void;
};

export function WeeklyOverview({
  selectedDay,
  onSelectDay,
}: WeeklyOverviewProps) {
  return (
    <View style={styles.grid}>
      {workoutDays.map((day) => (
        <Pressable
          key={day.id}
          onPress={() => onSelectDay(day.day - 1)}
          style={[
            styles.card,
            selectedDay === day.day - 1 && styles.cardActive,
          ]}
        >
          <View style={styles.cardTop}>
            <View
              style={[
                styles.dayBadge,
                selectedDay === day.day - 1 && styles.dayBadgeActive,
              ]}
            >
              <Text
                style={[
                  styles.dayNum,
                  selectedDay === day.day - 1 && styles.dayNumActive,
                ]}
              >
                {day.day}
              </Text>
            </View>
            <MaterialCommunityIcons
              name="dumbbell"
              size={14}
              color={
                selectedDay === day.day - 1
                  ? colors.primary
                  : colors.mutedForeground
              }
            />
          </View>
          <Text style={styles.label} numberOfLines={2}>
            {day.label}
          </Text>
          <Text style={styles.sub}>{day.exercises.length} exercises</Text>
        </Pressable>
      ))}
      <Pressable
        onPress={() => onSelectDay(6)}
        style={[
          styles.card,
          styles.restCard,
          selectedDay === 6 && styles.restCardActive,
        ]}
      >
        <View style={styles.cardTop}>
          <View style={[styles.dayBadge, styles.restBadge]}>
            <Text style={[styles.dayNum, styles.restNum]}>{restDay.day}</Text>
          </View>
          <MaterialCommunityIcons
            name="moon-waning-crescent"
            size={14}
            color={colors.primary}
          />
        </View>
        <Text style={[styles.label, styles.restLabel]}>{restDay.label}</Text>
        <Text style={styles.sub}>Recovery</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  card: {
    width: "47%",
    flexGrow: 1,
    minWidth: "30%",
    padding: 12,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  cardActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryMuted,
  },
  restCard: {
    borderStyle: "dashed",
    borderColor: "#93c5fd",
    backgroundColor: "#eff6ff",
  },
  restCardActive: {
    borderColor: colors.primary,
    borderStyle: "solid",
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  dayBadge: {
    width: 28,
    height: 28,
    borderRadius: radius.md,
    backgroundColor: colors.primaryMuted,
    alignItems: "center",
    justifyContent: "center",
  },
  dayBadgeActive: {
    backgroundColor: colors.primary,
  },
  restBadge: {
    backgroundColor: "#bfdbfe",
  },
  dayNum: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.primary,
  },
  dayNumActive: {
    color: colors.primaryForeground,
  },
  restNum: {
    color: "#1d4ed8",
  },
  label: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.foreground,
  },
  restLabel: {
    color: "#1d4ed8",
  },
  sub: {
    marginTop: 4,
    fontSize: 11,
    color: colors.mutedForeground,
  },
});
