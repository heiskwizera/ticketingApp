import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen";

import LoginScreen from "../screens/loginScreen";
import SignUpScreen from '../screens/signUpScreen';
import UserProfileScreen from "../screens/userProfileScreen";
import UserUpdateScreen from "../screens/userUpdateScreen";

const Stack = createNativeStackNavigator();

const { Navigator, Screen } = Stack;

export default function AuthNavigator() {
    return (
        <Navigator>
        <Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Screen name="Register" component={SignUpScreen} />
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Profile" component={UserProfileScreen} />
        <Screen name="EditProfile" component={UserUpdateScreen} />
        </Navigator>
    );
    }
