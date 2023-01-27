import { TextInput, View, StyleSheet, TouchableOpacity,Text,Image,Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";



export default function LoginScreen() {
    const navigation = useNavigation();
    return (

        <View style={styles.container}>
        <View style={styles.loginContainer}>
        
            <Image
            style={{ width: 152, height: 110 }}
            source={require("../../assets/job-logo.png")}
            />

            <TextInput style={styles.textInput} placeholder="Email" />
            <TextInput style={styles.textInput} placeholder="Password" />
            <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate("Home")} >
            <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate("Register")} >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.socialLoginContainer}>
            <TouchableOpacity style={styles.socialLoginButton}>
            <Ionicons name="logo-google" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialLoginButton}>
            <Ionicons name="logo-facebook" size={24} color="black" />
            </TouchableOpacity>
        </View>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dodgerblue",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,   
    },

    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: "dogerblue",
        margin: 10,
    },


    loginContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        width: "80%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        padding: 10,
    },
    forgotPassword: {
        width: "80%",
        alignItems: "flex-end",
        justifyContent: "center",
        margin: 10,
    },
    forgotPasswordText: {
        color: "blue",
    },
    loginButton: {
        width: "80%",
        height: 40,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        margin: 10,
    },
    loginButtonText: {
        color: "white",
    },
    signUpButton: {
        width: "80%",
        height: 40,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        margin: 10,
        borderWidth: 1,
        borderColor: "blue",
    },
    signUpButtonText: {
        color: "blue",
    },
    socialLoginContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    socialLoginButton: {
        width: 40,
        height: 40,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        margin: 10,
        borderWidth: 1,
        borderColor: "gray",
    },
});
