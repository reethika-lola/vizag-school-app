import { Ionicons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { palette } from "../theme/colors";
import { radius, spacing } from "../theme/spacing";

type Props = {
  title: string;
  subtitle?: string;
  navigation?: {
    canGoBack: () => boolean;
    goBack: () => void;
  };
  action?: ReactNode;
};

export function ScreenHeader({ title, subtitle, navigation, action }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top + spacing.sm }]}>
      <View style={styles.left}>
        {navigation?.canGoBack() ? (
          <Pressable accessibilityRole="button" accessibilityLabel="Go back" onPress={() => navigation.goBack()} style={styles.back}>
            <Ionicons name="chevron-back" size={24} color={palette.textPrimary} />
          </Pressable>
        ) : null}
        <View style={styles.textWrap}>
          <Text variant="titleLarge" numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          {subtitle ? (
            <Text variant="bodySmall" numberOfLines={1} style={styles.subtitle}>
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>
      {action}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: palette.white,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: spacing.md,
    paddingHorizontal: spacing.lg
  },
  left: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    gap: spacing.sm
  },
  back: {
    alignItems: "center",
    backgroundColor: palette.surface,
    borderRadius: radius.pill,
    height: 42,
    justifyContent: "center",
    width: 42
  },
  textWrap: {
    flex: 1
  },
  title: {
    color: palette.textPrimary,
    fontWeight: "900"
  },
  subtitle: {
    color: palette.textSecondary,
    marginTop: -2
  }
});
