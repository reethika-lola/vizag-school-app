import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

import { palette } from "../theme/colors";
import { radius, shadow, spacing } from "../theme/spacing";

type Props = {
  value?: string;
  placeholder?: string;
  onChangeText?: (value: string) => void;
  onFocus?: () => void;
  onFilterPress?: () => void;
};

export function SearchBar({ value, placeholder = "Search schools, locality, board", onChangeText, onFocus, onFilterPress }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={21} color={palette.textSecondary} />
      <TextInput
        accessibilityLabel="Search schools"
        placeholder={placeholder}
        placeholderTextColor={palette.textSecondary}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        style={styles.input}
      />
      <Pressable accessibilityRole="button" accessibilityLabel="Open filters" onPress={onFilterPress} style={styles.filterButton}>
        <Ionicons name="options-outline" size={20} color={palette.primary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: palette.white,
    borderColor: palette.border,
    borderRadius: radius.xl,
    borderWidth: 1,
    flexDirection: "row",
    gap: spacing.xs,
    minHeight: 58,
    paddingHorizontal: spacing.md,
    ...shadow.soft
  },
  input: {
    color: palette.textPrimary,
    flex: 1,
    fontSize: 15,
    fontWeight: "600"
  },
  filterButton: {
    alignItems: "center",
    backgroundColor: "#EFF6FF",
    borderRadius: radius.pill,
    height: 38,
    justifyContent: "center",
    width: 38
  }
});
