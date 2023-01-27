import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import React from "react";

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.signUpContainer}>
        
        <Text style={styles.signUpText}>
          Get started with GoJob
        </Text>
        <TextInput style={styles.textInput} placeholder="Name" />
        <TextInput style={styles.textInput} placeholder="Email" />
        <TextInput style={styles.textInput} placeholder="Password" />
        <TextInput style={styles.textInput} placeholder="Confirm Password" />
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
       




      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  signUpText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "dodgerblue",
    marginBottom: 20,
    marginTop: 40,


  },


  signUpContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textInput: {
    height: 40,
    width: 280,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },

  signUpButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
    width: 200,
    height: 40,
    borderRadius: 5,
    margin: 12,
  },

  signUpButtonText: {
    color: "#fff",
    fontSize: 16,
  },

  signInButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#17a2b8",
    width: 200,
    height: 40,
    borderRadius: 5,
    margin: 12,
  },

  signInButtonText: {
    color: "#fff",
    fontSize: 16,
  },

  orText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "dodgerblue",
    marginBottom: 20,
    marginTop: 40,
  },

});
