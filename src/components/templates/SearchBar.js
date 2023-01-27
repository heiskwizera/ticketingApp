import { Text, View, StyleSheet, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

const SearchBar = () => {
  return (
    <View style={styles.main}>
      <View style={styles.searchIcon}>
        <Ionicons name="search-outline" size={30} color="gray" />
      </View>
      <View style={styles.searchInput}>
        <TextInput style={styles.placeholder} placeholder="Search..."></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 40,
    backgroundColor: "#fff",
    marginLeft: 17,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "gray",
    marginTop: -13,
  },
  searchIcon: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    borderRadius: 100,
    marginLeft: 80,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  placeholder: {
    fontSize: 12,
    color: "#000",
    opacity: 0.5,
  },
});

export default SearchBar;
