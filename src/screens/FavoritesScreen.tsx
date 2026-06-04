import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { EmptyState } from "../components/EmptyState";
import { SchoolCard } from "../components/SchoolCard";
import { schools } from "../data/schools";
import { palette } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { RootStackParamList } from "../types";

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function FavoritesScreen() {
  const navigation = useNavigation<Nav>();
  const insets = useSafeAreaInsets();
  const savedSchools = schools.slice(0, 2);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.lg }]} showsVerticalScrollIndicator={false}>
        <Text variant="headlineLarge" style={styles.title}>
          Favorites
        </Text>
        <Text variant="bodyLarge" style={styles.subtitle}>
          Saved schools for your family shortlist.
        </Text>
        <View style={styles.list}>
          {savedSchools.map((school) => (
            <SchoolCard key={school.id} school={school} onPress={() => navigation.navigate("SchoolDetail", { schoolId: school.id })} />
          ))}
        </View>
        <EmptyState
          icon="heart-outline"
          title="Empty state ready"
          message="When a parent has not saved any schools, this screen uses this focused empty state with a direct discovery action."
          actionLabel="Explore schools"
          onAction={() => navigation.navigate("SchoolListing")}
        />
      </ScrollView>
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
    marginTop: spacing.xs
  },
  list: {
    gap: spacing.md,
    marginTop: spacing.xl
  }
});
