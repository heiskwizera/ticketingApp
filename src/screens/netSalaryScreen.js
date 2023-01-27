import React from "react";
import { useState } from "react";
import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";

// netSalaryCalculator component where  Maximum salary is 100000 per month and minimum salary is 30000 per month, input salary and calculate net salary where minimum tax is 20% and maximum tax is 30. below 30000 is 0% tax and above 100000 is 30% tax, Validate input salary and show error message if input salary is not valid.

const NetSalaryCalculator = () => {
    const [salary, setSalary] = useState(0);
    const [tax, setTax] = useState(0);
    const [netSalary, setNetSalary] = useState(0);
    const [error, setError] = useState("");
    
    const calculateNetSalary = () => {

        // Reset the tax and net salary
        setTax(0);
        setNetSalary(0);
        setError("");

        if (salary < 30000 || salary > 100000) {
        setError("Salary must be between 30000 and 100000");
        return;
        }
        if (salary >= 30000 && salary <= 50000) {
        setTax(20);
        } else if (salary > 50000 && salary <= 100000) {
        setTax(30);
        }
        setNetSalary(salary - (salary * tax) / 100);
    };
    
    return (
        <View style={styles.container}>

        <Text style={styles.title}>Net Salary Calculator</Text>

        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="Enter Salary"
            keyboardType="numeric"
            onChangeText={(value) => {
                setSalary(value);
                setError("");
            }}
            />
            <Text style={styles.error}>{error}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Pressable
            style={styles.button}
            onPress={() => {
                calculateNetSalary();
            }}
            >
            <Text style={styles.buttonText}>Calculate</Text>
            </Pressable>
        </View>
        <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Tax: {tax}%</Text>
            <Text style={styles.resultText}>Net Salary: {netSalary}</Text>
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 20,
    },

    inputContainer: {
        width: "80%",
        marginVertical: 10,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        width: "80%",
        marginVertical: 10,
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    resultContainer: {
        width: "80%",
        marginVertical: 10,
    },
    resultText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    error: {
        color: "red",
    },
    });

    export default NetSalaryCalculator;
