import React from "react";
import { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

// Create user profile screen component with name, email, profile picture, and bio fields that are editable
const UserProfileScreen = () => {
  const [name, setName] = useState("Fabrice");
  const [email, setEmail] = useState("he.kwizera@gmail.com");
  const [bio, setBio] = useState("I am a software engineer");

  const [profilePicture, setProfilePicture] = useState(
    "https://avatars.githubusercontent.com/u/43585601?v=4"
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false} vertical={true} >
    <View style={styles.container}>
      <View style={styles.profilePictureContainer}>
        <Image style={styles.profilePicture} source={{ uri: profilePicture }} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Name</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={setName}
          value={name}
        />
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.email}>Email</Text>
        <TextInput
          style={styles.emailInput}
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bio}>Bio</Text>
        <TextInput style={styles.bioInput} onChangeText={setBio} value={bio} />
      </View>

      {/* Save changes */}
      <Pressable
        style={{
          backgroundColor: "blue",
          width: "80%",
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          marginTop: 20,
        }}
      >
        <TouchableOpacity>
          <Text style={{ color: "white" }}>Save Changes</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  profilePictureContainer: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: "#e1e2e6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  nameContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  nameInput: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  emailContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  email: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  emailInput: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  bioContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  bio: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bioInput: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export default UserProfileScreen;
