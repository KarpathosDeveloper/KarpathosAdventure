import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { type Activity } from "../data/activities";
import { I } from "./Icon";

export function ActivityCard({
  activity,
  onPress,
}: {
  activity: Activity;
  onPress: () => void;
}) {
  const priceLabel =
    activity.priceType === "quote"
      ? "On Request"
      : activity.priceType === "per_group"
      ? `From €${activity.fromPrice} / grp`
      : `From €${activity.fromPrice} / pp`;

  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: activity.imageUrls?.[0] || "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg" }}
          style={styles.image}
        />
        {activity.badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{activity.badge.toUpperCase()}</Text>
          </View>
        )}
      </View>
      
      <View style={styles.content}>
        <Text style={styles.category}>{activity.category.toUpperCase()}</Text>
        <Text numberOfLines={1} style={styles.title}>{activity.title}</Text>
        
        <View style={styles.meta}>
          <View style={styles.metaItem}>
            <I.Pin size={12} color="#008080" />
            <Text style={styles.metaText}>{activity.locationName}</Text>
          </View>
          <View style={styles.metaItem}>
            <I.Clock size={12} color="#008080" />
            <Text style={styles.metaText}>{activity.duration}</Text>
          </View>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.price}>{priceLabel}</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Book</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  imageContainer: {
    height: 160,
    backgroundColor: "#E2E8F0",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#F5EBE6",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#0F172A",
    letterSpacing: 0.5,
  },
  content: {
    padding: 14,
  },
  category: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#008080",
    letterSpacing: 1,
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 8,
  },
  meta: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    fontSize: 11,
    color: "#475569",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#FAF9F6",
    paddingTop: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#008080",
  },
  button: {
    backgroundColor: "#0F172A",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
export default ActivityCard;
