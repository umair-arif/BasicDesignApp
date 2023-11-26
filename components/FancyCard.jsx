import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1MXhpbNFHFnvLy2rkO8haKNqjP3dZdLLpg&usqp=CAU",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Faisal Mosque</Text>
          <Text style={styles.cardLabel}>Islamabad, Pakistan</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, suscipit.
          </Text>
          <Text style={styles.cardFooter}>14 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  card: {
    width: 330,
    height: 330,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  cardElevated: {
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "black",
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 12,
    color: "#242B2E",
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {},
});
