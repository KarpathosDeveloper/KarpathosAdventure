import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { activitiesService } from "../services/activitiesService";
import { CATEGORIES, type Activity } from "../data/activities";
import { ActivityCard } from "../components/ActivityCard";
import { I } from "../components/Icon";

export function ExploreScreen({ route, navigation }: any) {
  const initialSearch = route.params?.searchQuery || "";
  const initialCategory = route.params?.category || "all";

  const [activities, setActivities] = useState<Activity[]>([]);
  const [search, setSearch] = useState(initialSearch);
  const [selectedCat, setSelectedCat] = useState(initialCategory);
  const [selectedDiff, setSelectedDiff] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    activitiesService.getActivities().then((list) => {
      setActivities(list);
      setLoading(false);
    });
  }, []);

  const filtered = activities.filter((act) => {
    if (selectedCat !== "all" && act.category !== selectedCat) return false;
    if (selectedDiff !== "all" && act.difficulty.toLowerCase() !== selectedDiff.toLowerCase()) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const matchText = (act.title + " " + act.shortDescription + " " + act.locationName + " " + act.category).toLowerCase();
      if (!matchText.includes(q)) return false;
    }
    return true;
  });

  return (
    <View style={styles.container}>
      {/* Search Bar header */}
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <I.Search size={18} color="#0F172A99" />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search experiences..."
            placeholderTextColor="#0F172A66"
            style={styles.searchInput}
          />
          {search ? (
            <TouchableOpacity onPress={() => setSearch("")}>
              <I.X size={16} color="#0F172A66" />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      {/* Horizontal Category Chips */}
      <View style={styles.filterSection}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipsScroll}>
          <TouchableOpacity
            onPress={() => setSelectedCat("all")}
            style={[styles.chip, selectedCat === "all" && styles.chipActive]}
          >
            <Text style={[styles.chipText, selectedCat === "all" && styles.chipTextActive]}>All</Text>
          </TouchableOpacity>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setSelectedCat(cat)}
              style={[styles.chip, selectedCat === cat && styles.chipActive]}
            >
              <Text style={[styles.chipText, selectedCat === cat && styles.chipTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Difficulty Selector Chips */}
        <View style={styles.diffRow}>
          <Text style={styles.diffLabel}>Difficulty:</Text>
          {["all", "Easy", "Moderate", "Hard"].map((d) => (
            <TouchableOpacity
              key={d}
              onPress={() => setSelectedDiff(d)}
              style={[styles.diffChip, selectedDiff === d && styles.diffChipActive]}
            >
              <Text style={[styles.diffChipText, selectedDiff === d && styles.diffChipTextActive]}>{d}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Activities FlatList */}
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#008080" />
          <Text style={styles.loaderText}>Finding experiences...</Text>
        </View>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ActivityCard
              activity={item}
              onPress={() => navigation.navigate("Detail", { slug: item.slug })}
            />
          )}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.emptyTitle}>No experiences match</Text>
              <Text style={styles.emptyDesc}>Try clearing your filters or changing your search terms.</Text>
            </View>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
  },
  header: {
    backgroundColor: "#0F172A",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingLeft: 14,
    paddingRight: 14,
    height: 44,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: "#0F172A",
    marginLeft: 8,
  },
  filterSection: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  chipsScroll: {
    paddingLeft: 20,
    marginBottom: 10,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 14,
    backgroundColor: "#FAF9F6",
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  chipActive: {
    backgroundColor: "#008080",
    borderColor: "#008080",
  },
  chipText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#0F172A",
  },
  chipTextActive: {
    color: "#FFFFFF",
  },
  diffRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 6,
  },
  diffLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#0F172A66",
    marginRight: 4,
    textTransform: "uppercase",
  },
  diffChip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: "#FAF9F6",
  },
  diffChipActive: {
    backgroundColor: "#00808020",
  },
  diffChipText: {
    fontSize: 10,
    color: "#0F172A",
    fontWeight: "500",
  },
  diffChipTextActive: {
    color: "#008080",
    fontWeight: "bold",
  },
  listContent: {
    padding: 20,
    paddingBottom: 40,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderText: {
    marginTop: 12,
    color: "#0F172A99",
    fontSize: 13,
  },
  empty: {
    padding: 40,
    alignItems: "center",
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0F172A",
  },
  emptyDesc: {
    fontSize: 12,
    color: "#0F172A66",
    textAlign: "center",
    marginTop: 6,
  },
});
export default ExploreScreen;
