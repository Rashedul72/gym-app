import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens/HomeScreen";
import { WorkoutScreen } from "../screens/WorkoutScreen";
import { CustomTabBar } from "./CustomTabBar";

export type RootTabParamList = {
  Home: undefined;
  Workout: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export function AppTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Workout" component={WorkoutScreen} />
    </Tab.Navigator>
  );
}
