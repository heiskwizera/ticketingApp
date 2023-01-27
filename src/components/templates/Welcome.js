import { Text, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

const Welcome = ({username}) => {
  return (
    <View style={styles.main}>
      <View style={styles.HelloText}>
        <Text style={styles.bio}>Hello, {username} 👋</Text>
        <View>
          <Text  style={styles.description}>Create a better future for your self here</Text>
        </View>
      </View>

      <View style={styles.notificationIcon}>
        <Ionicons name="notifications" size={24} color="gray" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    padding: 30,
  },
  HelloText: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "70%",
    height: "100%",
  },
  bio: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  textTransform: "capitalize",
  },
  description: {
    fontSize: 12,
    color: "#000",
    opacity: 0.5,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 100,
  },
});

export default Welcome;
