import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/loginScreen";
import SignUpScreen from '../screens/signUpScreen';

const Stack = createNativeStackNavigator();

const { Navigator, Screen } = Stack;

export default function AuthNavigator() {
    return (
        <Navigator>
        <Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Screen name="Register" component={SignUpScreen} />
        </Navigator>
    );
    }
