import { Text, View, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";

// Welcome header title : Hello, Rafif Dian 👋 flex direction row on main container and column on HelloText container

const Welcome = () => {
    return (
        <View style={styles.main}>

            <View style={styles.HelloText}>
                <Text style={styles.bio}>Hello, Fabrice 👋</Text>
                <View style={styles.description}>
                    <Text>Create a better future for your self</Text>
                </View>
            </View>

            <View style={styles.notificationIcon}>
                <Ionicons name="notifications" size={24} color="black" />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        padding: 20,
        // borderBottomWidth: 1,
        // borderBottomColor: '#e5e5e5'
    },
    HelloText: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '70%',
        height: '100%',
    },
    bio: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10
    },
    description: {
        fontSize: 14,
        color: '#000',
        opacity: 0.5
    },
    notificationIcon: {
        width: '20%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 100,
        
    }
 
});

export default Welcome;