import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { getSchools } from "../lib/supabase";
import { FlatList, StyleSheet, View } from "react-native";

import { FilterModal } from "../components/FilterModal";
import { SchoolCard } from "../components/SchoolCard";
import { ScreenHeader } from "../components/ScreenHeader";
import { SearchBar } from "../components/SearchBar";
import { SkeletonSchoolCard } from "../components/SkeletonSchoolCard";
import { palette } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "SchoolListing">;

export function SchoolListingScreen({ navigation, route }: Props) {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [schoolsData, setSchoolsData] = useState<any[]>([]);
  const title = route.params?.title ?? "Schools in Vizag";
  useEffect(() => {
  async function loadSchools() {
  const data = await getSchools();

  console.log("Schools from database:", data);

  setSchoolsData(data);
}

  loadSchools();
}, []);
  const data = route.params?.board
  ? schoolsData.filter(
      (school) => school.board === route.params?.board
    )
  : schoolsData;

  return (
    <View style={styles.screen}>
      <ScreenHeader title={title} subtitle={`${data.length} curated schools`} navigation={navigation} />
      <View style={styles.search}>
        <SearchBar onFilterPress={() => setFiltersVisible(true)} />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.skeletonWrap}>
            <SkeletonSchoolCard />
          </View>
        }
        renderItem={({ item }) => <SchoolCard school={item} onPress={() => navigation.navigate("SchoolDetail", { schoolId: item.id })} />}
      />
      <FilterModal visible={filtersVisible} onDismiss={() => setFiltersVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: palette.background,
    flex: 1
  },
  search: {
    paddingHorizontal: spacing.lg
  },
  list: {
    gap: spacing.md,
    paddingBottom: spacing.xxl,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg
  },
  skeletonWrap: {
    opacity: 0.78
  }
});
