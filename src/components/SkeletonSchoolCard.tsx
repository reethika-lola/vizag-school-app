import { Animated, StyleSheet, View } from "react-native";

import { palette } from "../theme/colors";
import { radius, shadow, spacing } from "../theme/spacing";

export function SkeletonSchoolCard() {
  return (
    <View style={styles.card} accessibilityLabel="Loading school card">
      <Animated.View style={styles.image} />
      <View style={styles.body}>
        <View style={styles.lineLarge} />
        <View style={styles.line} />
        <View style={styles.lineShort} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: palette.white,
    borderRadius: radius.xl,
    overflow: "hidden",
    ...shadow.soft
  },
  image: {
    backgroundColor: "#E2E8F0",
    height: 172
  },
  body: {
    gap: spacing.sm,
    padding: spacing.md
  },
  lineLarge: {
    backgroundColor: "#E2E8F0",
    borderRadius: radius.pill,
    height: 18,
    width: "78%"
  },
  line: {
    backgroundColor: "#EEF2F7",
    borderRadius: radius.pill,
    height: 14,
    width: "92%"
  },
  lineShort: {
    backgroundColor: "#EEF2F7",
    borderRadius: radius.pill,
    height: 14,
    width: "48%"
  }
});
