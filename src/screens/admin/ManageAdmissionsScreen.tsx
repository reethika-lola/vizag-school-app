import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, SegmentedButtons, Text } from "react-native-paper";

import { ScreenHeader } from "../../components/ScreenHeader";
import { schools } from "../../data/schools";
import { palette } from "../../theme/colors";
import { radius, spacing } from "../../theme/spacing";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "ManageAdmissions">;

export function ManageAdmissionsScreen({ navigation }: Props) {
  return (
    <View style={styles.screen}>
      <ScreenHeader title="Admissions" subtitle="Open, limit, or close intake" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {schools.slice(0, 4).map((school) => (
          <View key={school.id} style={styles.card}>
            <Text variant="titleMedium" style={styles.title}>
              {school.name}
            </Text>
            <Text variant="bodySmall" style={styles.subtitle}>
              Current status: {school.admissionStatus}
            </Text>
            <SegmentedButtons
              value={school.admissionStatus}
              onValueChange={() => undefined}
              style={styles.segment}
              buttons={[
                { value: "Open", label: "Open" },
                { value: "Limited Seats", label: "Limited" },
                { value: "Closed", label: "Closed" }
              ]}
            />
          </View>
        ))}
        <Button mode="contained" style={styles.button} contentStyle={styles.buttonContent}>
          Update admissions
        </Button>
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
  card: {
    backgroundColor: palette.white,
    borderColor: palette.border,
    borderRadius: radius.xl,
    borderWidth: 1,
    marginBottom: spacing.md,
    padding: spacing.md
  },
  title: {
    color: palette.textPrimary,
    fontWeight: "900"
  },
  subtitle: {
    color: palette.textSecondary,
    marginTop: 2
  },
  segment: {
    marginTop: spacing.md
  },
  button: {
    backgroundColor: palette.primary,
    borderRadius: radius.xl,
    marginTop: spacing.sm
  },
  buttonContent: {
    minHeight: 56
  }
});
