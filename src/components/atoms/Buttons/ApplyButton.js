import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";

const ApplyButton = () => {
  return (
    <View>
      <Pressable style={styles.button}>
        <TouchableOpacity>
          <Text style={styles.text}>Apply Now</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "dodgerblue",
    padding: 8,
    borderRadius: 25,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default ApplyButton;
