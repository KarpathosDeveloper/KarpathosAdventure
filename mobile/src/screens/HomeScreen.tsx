import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from "react-native";
import { activitiesService } from "../services/activitiesService";
import { CATEGORIES, CATEGORY_IMAGES, type Activity } from "../data/activities";
import { ActivityCard } from "../components/ActivityCard";
import { I } from "../components/Icon";

export function HomeScreen({ navigation }: any) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    activitiesService.getActivities().then((list) => {
      setActivities(list);
      setLoading(false);
    });
  }, []);

  const handleSearchSubmit = () => {
    if (search.trim()) {
      navigation.navigate("Explore", { searchQuery: search.trim() });
    }
  };

  const handleCategoryPress = (category: string) => {
    navigation.navigate("Explore", { category });
  };

  const featured = activities.slice(0, 5);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header Banner */}
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <View style={styles.logoIcon}>
            <I.Mountain size={18} color="#FFFFFF" />
          </View>
          <Text style={styles.brand}>Karpathos Adventures</Text>
        </View>
        <Text style={styles.subtitle}>Explore · Book · Experience</Text>
      </View>

      {/* Hero Welcome */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Discover the Wild Beauty of Karpathos</Text>
        <Text style={styles.heroSubtitle}>Book hand-picked, vetted local activities and signature experiences.</Text>
      </View>

      {/* Search Input */}
      <View style={styles.searchBar}>
        <I.Search size={18} color="#0F172A99" />
        <TextInput
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={handleSearchSubmit}
          placeholder="Search wingsurfing, hiking, wineries..."
          placeholderTextColor="#0F172A66"
          style={styles.searchInput}
        />
        {search.trim() ? (
          <TouchableOpacity onPress={handleSearchSubmit} style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Find</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Categories Horizontal */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Browse Categories</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesList}>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat}
            activeOpacity={0.85}
            onPress={() => handleCategoryPress(cat)}
            style={styles.categoryCard}
          >
            <Image source={{ uri: CATEGORY_IMAGES[cat] }} style={styles.categoryImage} />
            <View style={styles.categoryOverlay}>
              <Text style={styles.categoryName} numberOfLines={2}>{cat}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Stats Counter Row */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNum}>30+</Text>
          <Text style={styles.statLabel}>Adventures</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNum}>100%</Text>
          <Text style={styles.statLabel}>Vetted Guides</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNum}>24/7</Text>
          <Text style={styles.statLabel}>Local Support</Text>
        </View>
      </View>

      {/* Featured / Signature Experiences */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Signature Experiences</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#008080" style={{ marginVertical: 30 }} />
      ) : (
        <View style={styles.list}>
          {featured.map((act) => (
            <ActivityCard
              key={act.id}
              activity={act}
              onPress={() => navigation.navigate("Detail", { slug: act.slug })}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
  },
  contentContainer: {
    paddingBottom: 40,
  },
  header: {
    backgroundColor: "#0F172A",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logoIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#008080",
    alignItems: "center",
    justifyContent: "center",
  },
  brand: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 10,
    color: "#008080",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginTop: 4,
    marginLeft: 40,
    fontWeight: "600",
  },
  hero: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0F172A",
    lineHeight: 28,
  },
  heroSubtitle: {
    fontSize: 13,
    color: "#475569",
    marginTop: 6,
    lineHeight: 18,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginHorizontal: 20,
    paddingLeft: 16,
    paddingRight: 6,
    height: 50,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: "#0F172A",
    marginLeft: 8,
  },
  searchButton: {
    backgroundColor: "#008080",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  searchButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 12,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0F172A",
  },
  categoriesList: {
    paddingLeft: 20,
    marginBottom: 24,
  },
  categoryCard: {
    width: 130,
    height: 90,
    borderRadius: 16,
    overflow: "hidden",
    marginRight: 12,
    backgroundColor: "#E2E8F0",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(15, 23, 42, 0.4)",
    justifyContent: "flex-end",
    padding: 10,
  },
  categoryName: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "bold",
    lineHeight: 14,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E0F2F1",
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 16,
    marginBottom: 24,
  },
  statBox: {
    alignItems: "center",
    flex: 1,
  },
  statNum: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#008080",
  },
  statLabel: {
    fontSize: 10,
    color: "#0F172A",
    fontWeight: "500",
    marginTop: 2,
  },
  list: {
    paddingHorizontal: 20,
  },
});
export default HomeScreen;
