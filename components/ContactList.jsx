import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: "Umair Arif",
      status: "React Native Developer",
      imageUrl: require("../assets/um.jpg"),
    },
    {
      uid: 2,
      name: "Umair Arif",
      status: "React Native Developer",
      imageUrl: require("../assets/um.jpg"),
    },
    {
      uid: 3,
      name: "Umair Arif",
      status: "React Native Developer",
      imageUrl: require("../assets/um.jpg"),
    },
    {
      uid: 4,
      name: "Umair Arif",
      status: "React Native Developer",
      imageUrl: require("../assets/um.jpg"),
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={imageUrl}
              style={styles.userImage}
              resizeMode="center"
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  container: {
    padding: 12,
  },
  userCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
    backgroundColor: "#8D3DAF",
    borderRadius: 6,
    padding: 6,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  userStatus: {
    fontSize: 12,
    color: "#fff",
  },
});
