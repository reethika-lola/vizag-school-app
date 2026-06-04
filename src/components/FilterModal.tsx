import { Ionicons } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

import { categories } from "../data/schools";
import { palette } from "../theme/colors";
import { radius, spacing } from "../theme/spacing";
import { CategoryChip } from "./CategoryChip";

type Props = {
  visible: boolean;
  onDismiss: () => void;
};

export function FilterModal({ visible, onDismiss }: Props) {
  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={onDismiss}>
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <View style={styles.handle} />
          <View style={styles.header}>
            <View>
              <Text variant="titleLarge" style={styles.title}>
                Smart filters
              </Text>
              <Text variant="bodyMedium" style={styles.subtitle}>
                Tune results by board, fees, distance, and admissions.
              </Text>
            </View>
            <Pressable accessibilityRole="button" accessibilityLabel="Close filters" onPress={onDismiss} style={styles.close}>
              <Ionicons name="close" size={22} color={palette.textPrimary} />
            </Pressable>
          </View>
          <Text variant="labelLarge" style={styles.sectionLabel}>
            Board
          </Text>
          <View style={styles.chipWrap}>
            {categories.map((category) => (
              <CategoryChip key={category.id} category={category} />
            ))}
          </View>
          <Text variant="labelLarge" style={styles.sectionLabel}>
            Priorities
          </Text>
          <View style={styles.priorityGrid}>
            {["Admissions open", "Under 2 km", "Transport", "STEM labs", "Sports", "High rating"].map((item) => (
              <Pressable key={item} style={styles.priority}>
                <Text variant="labelLarge" style={styles.priorityText}>
                  {item}
                </Text>
              </Pressable>
            ))}
          </View>
          <Button mode="contained" onPress={onDismiss} style={styles.apply} contentStyle={styles.applyContent}>
            Apply filters
          </Button>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(15,23,42,0.28)",
    flex: 1,
    justifyContent: "flex-end"
  },
  sheet: {
    backgroundColor: palette.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: spacing.xl
  },
  handle: {
    alignSelf: "center",
    backgroundColor: palette.border,
    borderRadius: radius.pill,
    height: 5,
    marginBottom: spacing.lg,
    width: 52
  },
  header: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: spacing.md,
    justifyContent: "space-between"
  },
  title: {
    color: palette.textPrimary,
    fontWeight: "900"
  },
  subtitle: {
    color: palette.textSecondary,
    marginTop: spacing.xxs,
    maxWidth: 270
  },
  close: {
    alignItems: "center",
    backgroundColor: palette.surface,
    borderRadius: radius.pill,
    height: 40,
    justifyContent: "center",
    width: 40
  },
  sectionLabel: {
    color: palette.textPrimary,
    fontWeight: "900",
    marginBottom: spacing.sm,
    marginTop: spacing.xl
  },
  chipWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  priorityGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  priority: {
    backgroundColor: "#F8FAFC",
    borderColor: palette.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  priorityText: {
    color: palette.textPrimary,
    fontWeight: "800"
  },
  apply: {
    backgroundColor: palette.primary,
    borderRadius: radius.lg,
    marginTop: spacing.xl
  },
  applyContent: {
    minHeight: 54
  }
});
