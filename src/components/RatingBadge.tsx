import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { palette } from "../theme/colors";
import { radius, spacing } from "../theme/spacing";

type Props = {
  rating: number;
  compact?: boolean;
};

export function RatingBadge({ rating, compact }: Props) {
  return (
    <View style={[styles.badge, compact && styles.compact]}>
      <Ionicons name="star" color={palette.accent} size={compact ? 12 : 14} />
      <Text variant="labelMedium" style={styles.text}>
        {rating.toFixed(1)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.94)",
    borderRadius: radius.pill,
    flexDirection: "row",
    gap: spacing.xxs,
    paddingHorizontal: spacing.sm,
    paddingVertical: 6
  },
  compact: {
    paddingHorizontal: spacing.xs,
    paddingVertical: 4
  },
  text: {
    color: palette.textPrimary,
    fontWeight: "800"
  }
});
