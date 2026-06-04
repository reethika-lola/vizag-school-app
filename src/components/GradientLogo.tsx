import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { gradients, palette } from "../theme/colors";
import { radius, shadow, spacing } from "../theme/spacing";

type Props = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
};

export function GradientLogo({ size = "md", showText = true }: Props) {
  const boxSize = size === "lg" ? 84 : size === "sm" ? 42 : 56;
  const iconSize = size === "lg" ? 42 : size === "sm" ? 21 : 28;

  return (
    <View style={styles.row}>
      <LinearGradient colors={gradients.primary} style={[styles.mark, { width: boxSize, height: boxSize }]}>
        <Ionicons name="school" size={iconSize} color={palette.white} />
      </LinearGradient>
      {showText ? (
        <View>
          <Text variant={size === "lg" ? "headlineMedium" : "titleLarge"} style={styles.title}>
            Vizag Schools
          </Text>
          <Text variant="labelLarge" style={styles.subtitle}>
            Find the right fit
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.sm
  },
  mark: {
    alignItems: "center",
    borderRadius: radius.lg,
    justifyContent: "center",
    ...shadow.medium
  },
  title: {
    color: palette.textPrimary,
    fontWeight: "800",
    letterSpacing: 0
  },
  subtitle: {
    color: palette.textSecondary,
    marginTop: -2
  }
});
