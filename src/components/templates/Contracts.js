import { Text, View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../config/colors";

// Create contract component main container is flex-direction: row it has 3 buttons and 1 view of Salary 120k - 150k / month

const Contracts = () => {
    return (
        <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Fulltime</Text>
            </Pressable>
            <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Remote</Text>
            </Pressable>
            <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Senior</Text>
            </Pressable>
        </View>
        <View style={styles.salaryContainer}>
        <Text style={styles.salary}>
        15$ /
        </Text>
        <Text style={styles.perPeriod}>Month</Text>
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 200,
    },
    button: {
        backgroundColor: colors.info,
        opacity: 0.4,
        borderRadius: 10,
        padding: 10,

    },
    buttonText: {
        color: colors.black,
        fontWeight: "bold",
    },
    salaryContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
    },
    salaryText: {
        color: colors.primary,
        fontWeight: "bold",
    },

    salary: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 17,
    },
    perPeriod: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 10,
    },
    

    });

    export default Contracts;
