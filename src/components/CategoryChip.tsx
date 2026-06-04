import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import { palette } from "../theme/colors";
import { radius, shadow, spacing } from "../theme/spacing";
import { Category } from "../types";

type Props = {
  category: Category;
  selected?: boolean;
  onPress?: () => void;
};

export function CategoryChip({ category, selected, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${category.label} schools`}
      onPress={onPress}
      style={({ pressed }) => [styles.chip, selected && styles.selected, pressed && styles.pressed]}
    >
      <Ionicons name={category.icon as keyof typeof Ionicons.glyphMap} size={19} color={selected ? palette.white : palette.primary} />
      <Text variant="labelLarge" style={[styles.label, selected && styles.selectedLabel]}>
        {category.label}
      </Text>
      <Text variant="labelSmall" style={[styles.count, selected && styles.selectedCount]}>
        {category.count}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    alignItems: "center",
    backgroundColor: palette.white,
    borderColor: palette.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    flexDirection: "row",
    gap: spacing.xs,
    minHeight: 48,
    paddingHorizontal: spacing.md,
    ...shadow.soft
  },
  selected: {
    backgroundColor: palette.primary,
    borderColor: palette.primary
  },
  pressed: {
    opacity: 0.82,
    transform: [{ scale: 0.98 }]
  },
  label: {
    color: palette.textPrimary,
    fontWeight: "800"
  },
  selectedLabel: {
    color: palette.white
  },
  count: {
    color: palette.textSecondary,
    fontWeight: "700"
  },
  selectedCount: {
    color: "rgba(255,255,255,0.78)"
  }
});
