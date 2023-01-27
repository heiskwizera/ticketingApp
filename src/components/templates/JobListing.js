import { Text, View, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ApplyButton from "../atoms/Buttons/ApplyButton";
import colors from "../config/colors";


const JobList = ({
  icon,
  jobTitle,
  jobLocation,
  minSalary,
  maxSalary,
  perTime,
}) => {
  return (
    <View style={styles.main}>
      <View style={styles.roleDetails}>
        <View style={styles.jobIcon}>
          <Ionicons name={icon} size={30} color={colors.grey} />
        </View>
        <View style={styles.roleDescription}>
          <Text style={styles.jobTitle}>{jobTitle}</Text>
          <Text style={styles.jobLocation}>{jobLocation}</Text>
        </View>
        <View style={styles.saveIcon}>
          <Ionicons name="bookmark-outline" size={30} color="white" />
        </View>
      </View>
      <View style={styles.contractJob}>
        <Pressable>
          <Text style={styles.contractBtn}>Fulltime</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.contractBtn}>Remote</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.contractBtn}>Design</Text>
        </Pressable>
      </View>

      <View style={styles.callToAction}>
        <Text style={styles.salary}>
          {minSalary} - {maxSalary}/
        </Text>
        <Text style={styles.perPeriod}>{perTime}</Text>
        <ApplyButton />
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
  main: {
    backgroundColor: "#091a7a",
    padding: 10,
    marginHorizontal: 6,
    borderRadius: 10,
    marginVertical: 30,
    marginBottom: 11,
    marginTop: 3,
    flexDirection: "column",
  },
  roleDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  jobIcon: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
  },

  roleDescription: {
    marginLeft: 10,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  jobLocation: {
    color: "#eee",
  },
  contractJob: {
    flexDirection: "row",
    marginVertical: 10,
  },
  contractBtn: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  callToAction: {
    flexDirection: "row",
    alignItems: "center",
  },
  salary: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
    color: "#fff",
  },
  perPeriod: {
    color: "#eee",
    marginRight: 10,
  },
  saveIcon: {
    padding: 10,
    borderRadius: 10,
    marginLeft: "auto",
  },
});

export default JobList;
