import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CategoryChip } from "../components/CategoryChip";
import { FilterModal } from "../components/FilterModal";
import { GradientLogo } from "../components/GradientLogo";
import { SchoolCard } from "../components/SchoolCard";
import { SearchBar } from "../components/SearchBar";
import { categories, schools } from "../data/schools";
import { gradients, palette } from "../theme/colors";
import { radius, shadow, spacing } from "../theme/spacing";
import { RootStackParamList } from "../types";
import { getPopularSchools, getTrendingSchools } from "../utils/school";
import { useState } from "react";

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function HomeScreen() {
  const navigation = useNavigation<Nav>();
  const insets = useSafeAreaInsets();
  const [filtersVisible, setFiltersVisible] = useState(false);

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.md }]}>
        <View style={styles.topRow}>
          <GradientLogo size="sm" />
          <Pressable accessibilityRole="button" accessibilityLabel="Notifications" style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={22} color={palette.textPrimary} />
          </Pressable>
        </View>
        <View style={styles.greeting}>
          <Text variant="headlineLarge" style={styles.greetingTitle}>
            Find the perfect school in Vizag
          </Text>
          <Text variant="bodyLarge" style={styles.greetingSubtitle}>
            Compare boards, fees, ratings, distance, and admission status.
          </Text>
        </View>
        <SearchBar onFocus={() => navigation.navigate("MainTabs", { screen: "Search" })} onFilterPress={() => setFiltersVisible(true)} />
        <LinearGradient colors={gradients.primary} style={styles.insightCard}>
          <View>
            <Text variant="labelLarge" style={styles.insightLabel}>
              Admission pulse
            </Text>
            <Text variant="headlineSmall" style={styles.insightTitle}>
              37 schools are accepting applications this week
            </Text>
          </View>
          <View style={styles.insightIcon}>
            <Ionicons name="trending-up" size={26} color={palette.primary} />
          </View>
        </LinearGradient>
        <SectionHeader title="Featured schools" onPress={() => navigation.navigate("SchoolListing", { title: "Featured schools" })} />
        <FlatList
          horizontal
          data={schools.slice(0, 3)}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          renderItem={({ item }) => <SchoolCard featured school={item} onPress={() => navigation.navigate("SchoolDetail", { schoolId: item.id })} />}
        />
        <SectionHeader title="Categories" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryRow}>
          {categories.map((category) => (
            <CategoryChip key={category.id} category={category} onPress={() => navigation.navigate("SchoolListing", { board: category.id, title: category.label })} />
          ))}
        </ScrollView>
        <SectionHeader title="Nearby schools" onPress={() => navigation.navigate("SchoolListing", { title: "Nearby schools" })} />
        <View style={styles.cardList}>
          {schools.slice(1, 4).map((school) => (
            <SchoolCard key={school.id} school={school} onPress={() => navigation.navigate("SchoolDetail", { schoolId: school.id })} />
          ))}
        </View>
        <SectionHeader title="Popular schools" onPress={() => navigation.navigate("SchoolListing", { title: "Popular schools" })} />
        <View style={styles.cardList}>
          {getPopularSchools().slice(0, 2).map((school) => (
            <SchoolCard key={school.id} school={school} onPress={() => navigation.navigate("SchoolDetail", { schoolId: school.id })} />
          ))}
        </View>
        <SectionHeader title="Trending schools" onPress={() => navigation.navigate("SchoolListing", { title: "Trending schools" })} />
        <View style={styles.cardList}>
          {getTrendingSchools().slice(0, 2).map((school) => (
            <SchoolCard key={school.id} school={school} onPress={() => navigation.navigate("SchoolDetail", { schoolId: school.id })} />
          ))}
        </View>
      </ScrollView>
      <FilterModal visible={filtersVisible} onDismiss={() => setFiltersVisible(false)} />
    </View>
  );
}

function SectionHeader({ title, onPress }: { title: string; onPress?: () => void }) {
  return (
    <View style={styles.sectionHeader}>
      <Text variant="titleLarge" style={styles.sectionTitle}>
        {title}
      </Text>
      {onPress ? (
        <Pressable accessibilityRole="button" onPress={onPress}>
          <Text variant="labelLarge" style={styles.seeAll}>
            See all
          </Text>
        </Pressable>
      ) : null}
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
  topRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  iconButton: {
    alignItems: "center",
    backgroundColor: palette.surface,
    borderRadius: radius.pill,
    height: 46,
    justifyContent: "center",
    width: 46
  },
  greeting: {
    marginBottom: spacing.lg,
    marginTop: spacing.xxl
  },
  greetingTitle: {
    color: palette.textPrimary,
    fontWeight: "900",
    letterSpacing: 0
  },
  greetingSubtitle: {
    color: palette.textSecondary,
    lineHeight: 25,
    marginTop: spacing.xs
  },
  insightCard: {
    alignItems: "center",
    borderRadius: radius.xl,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.lg,
    padding: spacing.lg,
    ...shadow.medium
  },
  insightLabel: {
    color: "rgba(255,255,255,0.78)",
    fontWeight: "900",
    textTransform: "uppercase"
  },
  insightTitle: {
    color: palette.white,
    fontWeight: "900",
    letterSpacing: 0,
    maxWidth: 245,
    marginTop: spacing.xs
  },
  insightIcon: {
    alignItems: "center",
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    height: 52,
    justifyContent: "center",
    width: 52
  },
  sectionHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.md,
    marginTop: spacing.xxl
  },
  sectionTitle: {
    color: palette.textPrimary,
    fontWeight: "900"
  },
  seeAll: {
    color: palette.primary,
    fontWeight: "900"
  },
  horizontalList: {
    gap: spacing.md,
    paddingRight: spacing.xl
  },
  categoryRow: {
    gap: spacing.sm,
    paddingRight: spacing.xl
  },
  cardList: {
    gap: spacing.md
  }
});
