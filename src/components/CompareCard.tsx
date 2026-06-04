import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { palette } from "../theme/colors";
import { radius, shadow, spacing } from "../theme/spacing";
import { School } from "../types";
import { RatingBadge } from "./RatingBadge";

type Props = {
  school: School;
};

export function CompareCard({ school }: Props) {
  return (
    <View style={styles.card}>
      <Text variant="titleMedium" numberOfLines={2} style={styles.title}>
        {school.name}
      </Text>
      <Text variant="labelMedium" style={styles.locality}>
        {school.locality}
      </Text>
      <RatingBadge rating={school.rating} compact />
      {[
        ["Board", school.board],
        ["Fees", school.annualFees],
        ["Grades", school.grades],
        ["Ratio", school.studentTeacherRatio],
        ["Admissions", school.admissionStatus]
      ].map(([label, value]) => (
        <View key={label} style={styles.row}>
          <Text variant="labelSmall" style={styles.label}>
            {label}
          </Text>
          <Text variant="labelMedium" style={styles.value}>
            {value}
          </Text>
        </View>
      ))}
      <View style={styles.fitRow}>
        <Ionicons name="checkmark-circle" size={18} color={palette.success} />
        <Text variant="labelMedium" style={styles.fitText}>
          Strong parent fit
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: palette.white,
    borderRadius: radius.xl,
    minWidth: 168,
    padding: spacing.md,
    ...shadow.soft
  },
  title: {
    color: palette.textPrimary,
    fontWeight: "900",
    minHeight: 46
  },
  locality: {
    color: palette.textSecondary,
    fontWeight: "700",
    marginBottom: spacing.sm
  },
  row: {
    borderTopColor: palette.border,
    borderTopWidth: 1,
    gap: 2,
    paddingVertical: spacing.sm
  },
  label: {
    color: palette.textSecondary,
    fontWeight: "800",
    textTransform: "uppercase"
  },
  value: {
    color: palette.textPrimary,
    fontWeight: "900"
  },
  fitRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.xs,
    marginTop: spacing.sm
  },
  fitText: {
    color: palette.success,
    fontWeight: "900"
  }
});
