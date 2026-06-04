import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { FilterModal } from "../components/FilterModal";
import { SearchBar } from "../components/SearchBar";
import { SchoolCard } from "../components/SchoolCard";
import { recentSearches, schools, suggestions } from "../data/schools";
import { palette } from "../theme/colors";
import { radius, spacing } from "../theme/spacing";
import { RootStackParamList } from "../types";

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function SearchScreen() {
  const navigation = useNavigation<Nav>();
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState("");
  const [filtersVisible, setFiltersVisible] = useState(false);

  const results = schools.filter((school) => `${school.name} ${school.locality} ${school.board}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.lg }]} showsVerticalScrollIndicator={false}>
        <Text variant="headlineLarge" style={styles.title}>
          Search schools
        </Text>
        <Text variant="bodyLarge" style={styles.subtitle}>
          Find by name, board, locality, facility, or admission status.
        </Text>
        <View style={styles.searchWrap}>
          <SearchBar value={query} onChangeText={setQuery} onFilterPress={() => setFiltersVisible(true)} />
        </View>
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Recent searches
        </Text>
        <View style={styles.chipWrap}>
          {recentSearches.map((item) => (
            <Pressable key={item} onPress={() => setQuery(item)} style={styles.searchChip}>
              <Ionicons name="time-outline" size={16} color={palette.textSecondary} />
              <Text variant="labelLarge" style={styles.chipText}>
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Smart suggestions
        </Text>
        <View style={styles.suggestionList}>
          {suggestions.map((item) => (
            <Pressable key={item} onPress={() => setQuery(item)} style={styles.suggestion}>
              <Ionicons name="sparkles-outline" size={18} color={palette.secondary} />
              <Text variant="bodyMedium" style={styles.suggestionText}>
                {item}
              </Text>
              <Ionicons name="chevron-forward" size={18} color={palette.textSecondary} />
            </Pressable>
          ))}
        </View>
        <Text variant="titleMedium" style={styles.sectionTitle}>
          {query ? "Matching schools" : "Recommended schools"}
        </Text>
        <View style={styles.results}>
          {(query ? results : schools.slice(0, 3)).map((school) => (
            <SchoolCard key={school.id} school={school} onPress={() => navigation.navigate("SchoolDetail", { schoolId: school.id })} />
          ))}
        </View>
      </ScrollView>
      <FilterModal visible={filtersVisible} onDismiss={() => setFiltersVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: palette.background,
    flex: 1
  },
  content: {
    paddingBottom: 132,
    paddingHorizontal: spacing.lg
  },
  title: {
    color: palette.textPrimary,
    fontWeight: "900",
    letterSpacing: 0
  },
  subtitle: {
    color: palette.textSecondary,
    lineHeight: 25,
    marginTop: spacing.xs
  },
  searchWrap: {
    marginTop: spacing.xl
  },
  sectionTitle: {
    color: palette.textPrimary,
    fontWeight: "900",
    marginBottom: spacing.md,
    marginTop: spacing.xl
  },
  chipWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  searchChip: {
    alignItems: "center",
    backgroundColor: palette.surface,
    borderRadius: radius.pill,
    flexDirection: "row",
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  chipText: {
    color: palette.textPrimary,
    fontWeight: "800"
  },
  suggestionList: {
    backgroundColor: palette.white,
    borderColor: palette.border,
    borderRadius: radius.xl,
    borderWidth: 1,
    overflow: "hidden"
  },
  suggestion: {
    alignItems: "center",
    borderBottomColor: palette.border,
    borderBottomWidth: 1,
    flexDirection: "row",
    gap: spacing.sm,
    padding: spacing.md
  },
  suggestionText: {
    color: palette.textPrimary,
    flex: 1,
    fontWeight: "700"
  },
  results: {
    gap: spacing.md
  }
});
