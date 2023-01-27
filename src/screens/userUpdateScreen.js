import React from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../components/config/colors';



const UserUpdateScreen = () => {
    const navigation = useNavigation();

    return (
        
        <ScrollView showsVerticalScrollIndicator={false} vertical={true}>
        <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image
                source={{
                uri: 'https://avatars.githubusercontent.com/u/43585601?v=4',
                }}
                size={80}
             
            />



            <View style={{marginLeft: 20}}>
                <Title style={[styles.title, {
                marginTop:15,
                marginBottom: 5,
                }]}>Fabrice KWIZERA</Title>
                <Caption style={styles.caption}>@fabrice</Caption>
            </View>
            </View>
        </View>
    
        <View style={styles.userInfoSection}>
            <View style={styles.row}>
            <Icon name="map-marker-radius" color="#777777" size={20} />
            <Text style={{color:"#777777", marginLeft: 20}}>Kigali City</Text>
            </View>
            <View style={styles.row}>
            <Icon name="phone" color="#777777" size={20} />
            <Text style={{color:"#777777", marginLeft: 20}}>+250 789 745 096</Text>
            </View>
            <View style={styles.row}>
            <Icon name="email" color="#777777" size={20} />
            <Text style={{color:"#777777", marginLeft: 20}}>
                he.kwizera@gmail.com
            </Text>

            </View>
        </View>

        <View style={
            {
                flexDirection: 'row',
                padding: 10,
            }
        }>
            <Icon name="account-edit" color="#777777" size={20} />
            <Text style={{color:"#777777", marginLeft: 50}}>
               <TouchableOpacity onPress={() => {navigation.navigate("Profile")}}>
                    <Text style={{color:"#777777", marginLeft: 50}}>Edit Profile</Text>
                </TouchableOpacity>

            </Text>
            </View>
        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
            }]}>
            <Title>140</Title>
            <Caption>Saved</Caption>
            </View>
            <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Reviewed</Caption>
            </View>
        </View>
            
        <View style={styles.menuWrapper}>
            
            
            <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
                <Icon name="account" color={colors.accent} size={25} />
                <Text style={styles.menuItemText}
                onPress={() => {navigation.navigate("Login")}}
                >Starter</Text>
            </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
                <Icon name="delete-outline" color={colors.accent} size={25} />
                <Text style={styles.menuItemText}>Delete Account</Text>
            </View>
            </TouchableRipple>
        </View>
        </SafeAreaView>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // marginTop : 30
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },


});

export default UserUpdateScreen;