import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Linking, ActivityIndicator } from "react-native";
import { activitiesService } from "../services/activitiesService";
import { type Activity } from "../data/activities";
import { I } from "../components/Icon";

export function DetailScreen({ route, navigation }: any) {
  const { slug } = route.params;
  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    activitiesService.getActivities().then((list) => {
      const found = list.find((a) => a.slug === slug);
      if (found) {
        setActivity(found);
      }
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#008080" />
        <Text style={styles.centerText}>Loading details...</Text>
      </View>
    );
  }

  if (!activity) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFoundText}>Experience not found.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.btnHome}>
          <Text style={styles.btnHomeText}>Back Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const priceLabel =
    activity.priceType === "quote"
      ? "Price on Request"
      : activity.priceType === "per_group"
      ? `From €${activity.fromPrice} / group`
      : `From €${activity.fromPrice} / person`;

  const getWhatsappMessage = () => {
    if (activity.whatsappPrefillTemplate) {
      return activity.whatsappPrefillTemplate
        .replace("[dates]", "[dates]")
        .replace("[number]", "2")
        .replace("[area]", activity.locationName || "[area]");
    }
    return `Hi! I'd like to book "${activity.title}" on Karpathos. Can you confirm availability?`;
  };

  const handleWhatsappPress = () => {
    const msg = encodeURIComponent(getWhatsappMessage());
    const phone = "306943666243"; // Concierge WhatsApp phone
    Linking.openURL(`https://wa.me/${phone}?text=${msg}`);
  };

  const handleMapPress = () => {
    if (activity.googleMapsUrl) {
      Linking.openURL(activity.googleMapsUrl);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {/* Main Gallery */}
        <View style={styles.gallery}>
          <Image source={{ uri: activity.imageUrls?.[activeImg] }} style={styles.mainImage} />
          <ScrollView horizontal style={styles.thumbnails} contentContainerStyle={styles.thumbContent} showsHorizontalScrollIndicator={false}>
            {activity.imageUrls?.map((url, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveImg(index)}
                style={[styles.thumbBox, activeImg === index && styles.thumbBoxActive]}
              >
                <Image source={{ uri: url }} style={styles.thumbImage} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Info */}
        <View style={styles.content}>
          <Text style={styles.category}>{activity.category.toUpperCase()}</Text>
          <Text style={styles.title}>{activity.title}</Text>
          
          <View style={styles.metaRow}>
            <View style={styles.metaBadge}>
              <I.Pin size={10} color="#008080" />
              <Text style={styles.metaBadgeText}>{activity.locationName}</Text>
            </View>
            <View style={styles.metaBadge}>
              <I.Clock size={10} color="#008080" />
              <Text style={styles.metaBadgeText}>{activity.duration}</Text>
            </View>
            <View style={styles.metaBadge}>
              <I.Users size={10} color="#008080" />
              <Text style={styles.metaBadgeText}>Up to {activity.maxGuests}</Text>
            </View>
          </View>

          {/* Pricing Panel */}
          <View style={styles.pricePanel}>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.priceValue}>{priceLabel}</Text>
            {activity.priceNote ? (
              <Text style={styles.priceNote}>{activity.priceNote}</Text>
            ) : null}
          </View>

          {/* About */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About this experience</Text>
            <Text style={styles.descText}>{activity.fullDescription}</Text>
          </View>

          {/* Highlights */}
          {activity.highlights && activity.highlights.length > 0 ? (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Highlights</Text>
              {activity.highlights.map((h, i) => (
                <View key={i} style={styles.listItem}>
                  <I.Check size={14} color="#008080" />
                  <Text style={styles.listText}>{h}</Text>
                </View>
              ))}
            </View>
          ) : null}

          {/* What to bring */}
          {activity.whatToBring && activity.whatToBring.length > 0 ? (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>What to bring</Text>
              {activity.whatToBring.map((w, i) => (
                <View key={i} style={styles.listItem}>
                  <View style={styles.bullet} />
                  <Text style={styles.listText}>{w}</Text>
                </View>
              ))}
            </View>
          ) : null}

          {/* Meeting Point */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Meeting Point & Arrival</Text>
            <Text style={styles.descText}>{activity.meetingPoint}</Text>
            {activity.googleMapsUrl ? (
              <TouchableOpacity onPress={handleMapPress} style={styles.mapButton}>
                <I.Map size={14} color="#008080" />
                <Text style={styles.mapButtonText}>Open in Google Maps</Text>
              </TouchableOpacity>
            ) : null}
          </View>

          {/* Safety */}
          {activity.safetyNotes && activity.safetyNotes.length > 0 ? (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Safety & Notes</Text>
              {activity.safetyNotes.map((s, i) => (
                <View key={i} style={styles.listItem}>
                  <I.Shield size={14} color="#008080" />
                  <Text style={styles.listText}>{s}</Text>
                </View>
              ))}
            </View>
          ) : null}
        </View>
      </ScrollView>

      {/* WhatsApp Booking Floating Footer */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerLabel}>Request availability</Text>
          <Text style={styles.footerPrice}>
            {activity.priceType === "quote" ? "On Request" : `€${activity.fromPrice}`}
          </Text>
        </View>
        <TouchableOpacity onPress={handleWhatsappPress} style={styles.whatsappBtn}>
          <I.Whatsapp size={16} color="#FFFFFF" />
          <Text style={styles.whatsappBtnText}>WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
  },
  scroll: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAF9F6",
    padding: 20,
  },
  centerText: {
    marginTop: 10,
    color: "#0F172A99",
  },
  notFoundText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 12,
  },
  btnHome: {
    backgroundColor: "#008080",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  btnHomeText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  gallery: {
    backgroundColor: "#E2E8F0",
  },
  mainImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  thumbnails: {
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  thumbContent: {
    paddingHorizontal: 20,
    gap: 8,
  },
  thumbBox: {
    width: 60,
    height: 45,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "transparent",
  },
  thumbBoxActive: {
    borderColor: "#008080",
  },
  thumbImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  category: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#008080",
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0F172A",
    lineHeight: 28,
    marginBottom: 10,
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  metaBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0F2F1",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    gap: 4,
  },
  metaBadgeText: {
    fontSize: 11,
    color: "#008080",
    fontWeight: "600",
  },
  pricePanel: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 20,
  },
  priceLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#0F172A66",
    textTransform: "uppercase",
  },
  priceValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0F172A",
    marginTop: 2,
  },
  priceNote: {
    fontSize: 11,
    color: "#0F172A99",
    marginTop: 4,
  },
  section: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F055",
    paddingBottom: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 8,
  },
  descText: {
    fontSize: 13,
    color: "#475569",
    lineHeight: 18,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },
  listText: {
    fontSize: 12,
    color: "#475569",
    flex: 1,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#008080",
  },
  mapButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 8,
  },
  mapButtonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#008080",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
  },
  footerLabel: {
    fontSize: 9,
    color: "#0F172A66",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  footerPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0F172A",
  },
  whatsappBtn: {
    backgroundColor: "#16A34A",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
  },
  whatsappBtnText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },
});
export default DetailScreen;
