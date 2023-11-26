import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>For</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Scroll</Text>
        </View>
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
    padding: 8,
    marginRight: 8,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 5,
  },
  elevatedCard: {
    backgroundColor: "#cad5e2",
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});
