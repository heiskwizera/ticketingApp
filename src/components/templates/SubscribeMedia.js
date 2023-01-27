import { Text, View, StyleSheet, Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import SubscribeButton from "../atoms/Buttons/SubscribeButton";
import colors from "../config/colors";
const SubscribeMedia = ({title,logo,description}) => {
  return (
    <View style={styles.card}>
      <View style={styles.twitter}>
        <Ionicons name={logo} size={24} color={colors.white} />
      </View>
      <View>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.text}>
          {description}
        </Text>
      </View>
      <SubscribeButton title="Subscribed" />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "lightblue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 17,
    marginTop: 7,
    borderRadius: 30,
    height: 100,
  },
  twitter: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "dodgerblue",
    padding: 10,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 10,
    backgroundColor: "dodgerblue",
  },
  text: {
    fontSize: 10,
    color: "black",
    marginLeft: 1,
    width: 110,
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    marginLeft: 1,
    width: 110,
  },
});

export default SubscribeMedia;
