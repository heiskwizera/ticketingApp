import { Text, View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

const Explorer = ({title}) => {
  return (
    <View style={styles.main}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.seeAll}>
        
        <Pressable>
          <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "86%",
    height: 30,
    marginLeft: 20,
    marginTop: -12,

  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
  seeAll: {
    justifyContent: "center",
    alignItems: "center",
  },
    seeAllText: {
    color: "dodgerblue",
    opacity: 1,
    },
    titleText: {
    color: "#000",
    opacity: 1,
    fontWeight: "bold",
    fontSize: 16
    },

});

export default Explorer;
