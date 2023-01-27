import { Text, View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../config/colors";

// Recent Job component having main container row with three view, first view is for twitter icon, second view for job title and location in column flex direction and third view for save icon

const RecentJob = ({ icon, jobTitle, jobLocation}) => {
    return (
        <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Ionicons name={icon} size={24} color={colors.white} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.jobTitle}>{jobTitle}</Text>
            <Text style={styles.jobLocation}>{jobLocation}</Text>
        </View>
        <View style={styles.saveIconContainer}>
            <Ionicons name="bookmark" size={24} color={colors.info} />
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            marginVertical: 5,
            backgroundColor: colors.white,
            borderRadius: 10,
            shadowColor: colors.black,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        iconContainer: {
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: colors.info,
            alignItems: "center",
            justifyContent: "center",
        },
    saveIconContainer: {
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: colors.white,
            alignItems: "center",
            justifyContent: "center",
        },
        textContainer: {
            flex: 1,
            flexDirection: "column",
            marginHorizontal: 10,
        },
        jobTitle: {
            fontSize: 16,
            fontWeight: "bold",
            color: colors.black,
        },
        jobLocation: {
            fontSize: 14,
            color: colors.black,
        },
    });

    export default RecentJob;

