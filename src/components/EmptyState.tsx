import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

import { palette } from "../theme/colors";
import { radius, spacing } from "../theme/spacing";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function EmptyState({ icon, title, message, actionLabel, onAction }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrap}>
        <Ionicons name={icon} size={34} color={palette.primary} />
      </View>
      <Text variant="titleLarge" style={styles.title}>
        {title}
      </Text>
      <Text variant="bodyMedium" style={styles.message}>
        {message}
      </Text>
      {actionLabel ? (
        <Button mode="contained" onPress={onAction} style={styles.button}>
          {actionLabel}
        </Button>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.xxxl
  },
  iconWrap: {
    alignItems: "center",
    backgroundColor: "#EFF6FF",
    borderRadius: radius.xl,
    height: 74,
    justifyContent: "center",
    marginBottom: spacing.md,
    width: 74
  },
  title: {
    color: palette.textPrimary,
    fontWeight: "900",
    textAlign: "center"
  },
  message: {
    color: palette.textSecondary,
    marginTop: spacing.xs,
    textAlign: "center"
  },
  button: {
    backgroundColor: palette.primary,
    borderRadius: radius.lg,
    marginTop: spacing.lg
  }
});
