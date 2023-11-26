import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

export default function ActionCard() {
  const openWebsite = (link) => {
    Linking.openURL(link);
  };
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingCon}>
          <Text style={styles.headerText}>What's new in JavaScript ES6</Text>
        </View>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMM43IDqseBSgyJCxsbUzgpr-4P_KxCDcEg&usqp=CAU",
          }}
          style={styles.cardImage}
          resizeMode="stretch"
        />
        <View style={styles.bodyCon}>
          <Text numberOfLines={3}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            repellat nihil id debitis, sint deserunt reprehenderit ratione quo
            vero explicabo tempore minima quia distinctio odio aliquid nulla
            quidem corporis sed?
          </Text>
        </View>
        <View style={styles.footerCon}>
          <TouchableOpacity
            onPress={() => openWebsite("https://javascript.info/")}
          >
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
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
    height: 340,
    marginVertical: 12,
    marginLeft: 16,
    borderRadius: 6,
  },
  elevatedCard: {
    backgroundColor: "#E07C24",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.4,
  },
  headingCon: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  cardImage: {
    height: 180,
  },
  bodyCon: {
    padding: 10,
  },
  footerCon: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  socialLinks: {
    fontSize: 16,
    color: "#000000",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
