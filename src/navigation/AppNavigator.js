import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/homeScreen";
import NetSalaryCalculator from "../screens/netSalaryScreen";
import UserProfileScreen from "../screens/userProfileScreen";
import UserUpdateScreen from "../screens/userUpdateScreen";
import LoginScreen from "../screens/loginScreen";

const Tab = createBottomTabNavigator();

const { Navigator, Screen } = Tab;

const AppNavigator = () => {
  return (
    <Navigator screenOptions={{
      tabBarHideOnKeyboard : true,
    }}>
      <Screen name="Login" component={LoginScreen} options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" color={color} size={size} />
        ),
        headerShown: false,
      }} />
      

      <Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} />
      <Screen name="Salary" component={NetSalaryCalculator} options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calculator" color={color} size={size} />
        ),
      }} />
      <Screen name="Profile" component={UserUpdateScreen} options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }} />




    </Navigator>
  );
};

export default AppNavigator;
