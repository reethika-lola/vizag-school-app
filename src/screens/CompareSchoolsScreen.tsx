import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { CompareCard } from "../components/CompareCard";
import { ScreenHeader } from "../components/ScreenHeader";
import { schools } from "../data/schools";
import { palette } from "../theme/colors";
import { radius, spacing } from "../theme/spacing";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "CompareSchools">;

export function CompareSchoolsScreen({ navigation, route }: Props) {
  const selected = route.params?.selectedIds?.length
    ? schools.filter((school) => route.params?.selectedIds?.includes(school.id)).concat(schools.filter((school) => !route.params?.selectedIds?.includes(school.id)).slice(0, 1))
    : schools.slice(0, 2);

  return (
    <View style={styles.screen}>
      <ScreenHeader title="Compare schools" subtitle="Side-by-side decision view" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
          {selected.slice(0, 3).map((school) => (
            <CompareCard key={school.id} school={school} />
          ))}
        </ScrollView>
        <Text variant="titleLarge" style={styles.title}>
          Visual indicators
        </Text>
        {[
          ["Best value", "Sri Prakash has the strongest fees-to-rating balance."],
          ["Premium campus", "Oakridge leads on facilities and international curriculum."],
          ["Shortest commute", "Timpany is closest to central Vizag neighborhoods."],
          ["Admissions", "Oakridge and DPS currently show open admissions."]
        ].map(([label, detail]) => (
          <View key={label} style={styles.indicator}>
            <View style={styles.marker} />
            <View style={styles.indicatorText}>
              <Text variant="titleSmall" style={styles.indicatorTitle}>
                {label}
              </Text>
              <Text variant="bodyMedium" style={styles.indicatorDetail}>
                {detail}
              </Text>
            </View>
          </View>
        ))}
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
    padding: spacing.lg,
    paddingBottom: spacing.xxl
  },
  row: {
    gap: spacing.md,
    paddingRight: spacing.xl
  },
  title: {
    color: palette.textPrimary,
    fontWeight: "900",
    marginBottom: spacing.md,
    marginTop: spacing.xxl
  },
  indicator: {
    alignItems: "flex-start",
    backgroundColor: palette.white,
    borderColor: palette.border,
    borderRadius: radius.xl,
    borderWidth: 1,
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.sm,
    padding: spacing.md
  },
  marker: {
    backgroundColor: palette.secondary,
    borderRadius: radius.pill,
    height: 12,
    marginTop: 5,
    width: 12
  },
  indicatorText: {
    flex: 1
  },
  indicatorTitle: {
    color: palette.textPrimary,
    fontWeight: "900"
  },
  indicatorDetail: {
    color: palette.textSecondary,
    lineHeight: 22,
    marginTop: 2
  }
});
