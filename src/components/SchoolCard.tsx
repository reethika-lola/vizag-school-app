import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { palette } from "../theme/colors";
import { radius, shadow, spacing } from "../theme/spacing";
import { School } from "../types";
import { RatingBadge } from "./RatingBadge";

type Props = {
  school: School;
  featured?: boolean;
  onPress?: () => void;
};

export function SchoolCard({ school, featured, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Open ${school.name}`}
      onPress={onPress}
      style={({ pressed }) => [styles.card, featured && styles.featured, pressed && styles.pressed]}
    >
      <ImageBackground source={{ uri: school.image }} imageStyle={styles.image} style={[styles.imageWrap, featured && styles.featuredImage]}>
        <LinearGradient colors={["rgba(15,23,42,0.04)", "rgba(15,23,42,0.72)"]} style={styles.overlay}>
          <View style={styles.topRow}>
            <RatingBadge rating={school.rating} compact />
            <Pressable accessibilityRole="button" accessibilityLabel={`Save ${school.name}`} style={styles.saveButton}>
              <Ionicons name="heart-outline" size={18} color={palette.textPrimary} />
            </Pressable>
          </View>
          {featured ? (
            <View>
              <Text variant="headlineSmall" numberOfLines={2} style={styles.featuredTitle}>
                {school.name}
              </Text>
              <Text variant="labelLarge" style={styles.featuredMeta}>
                {school.board} • {school.locality}
              </Text>
            </View>
          ) : null}
        </LinearGradient>
      </ImageBackground>
      {!featured ? (
        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text variant="titleMedium" numberOfLines={2} style={styles.title}>
              {school.name}
            </Text>
            <Text variant="labelLarge" style={styles.fees}>
              {school.annualFees}
            </Text>
          </View>
          <Text variant="bodySmall" numberOfLines={1} style={styles.tagline}>
            {school.tagline}
          </Text>
          <View style={styles.metaRow}>
            <Ionicons name="location-outline" size={15} color={palette.textSecondary} />
            <Text variant="labelMedium" style={styles.meta}>
              {school.locality} • {school.distanceKm} km
            </Text>
            <View style={styles.dot} />
            <Text variant="labelMedium" style={styles.board}>
              {school.board}
            </Text>
          </View>
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: palette.white,
    borderRadius: radius.xl,
    overflow: "hidden",
    ...shadow.soft
  },
  featured: {
    width: 282
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }]
  },
  imageWrap: {
    height: 172
  },
  featuredImage: {
    height: 348
  },
  image: {
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    padding: spacing.md
  },
  topRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  saveButton: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.94)",
    borderRadius: radius.pill,
    height: 36,
    justifyContent: "center",
    width: 36
  },
  content: {
    padding: spacing.md
  },
  titleRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: spacing.sm,
    justifyContent: "space-between"
  },
  title: {
    color: palette.textPrimary,
    flex: 1,
    fontWeight: "800",
    letterSpacing: 0
  },
  fees: {
    color: palette.primary,
    fontWeight: "900"
  },
  tagline: {
    color: palette.textSecondary,
    marginTop: spacing.xxs
  },
  metaRow: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: spacing.sm
  },
  meta: {
    color: palette.textSecondary,
    fontWeight: "700",
    marginLeft: 3
  },
  dot: {
    backgroundColor: palette.border,
    borderRadius: 2,
    height: 4,
    marginHorizontal: spacing.xs,
    width: 4
  },
  board: {
    color: palette.secondary,
    fontWeight: "900"
  },
  featuredTitle: {
    color: palette.white,
    fontWeight: "900",
    letterSpacing: 0
  },
  featuredMeta: {
    color: "rgba(255,255,255,0.88)",
    fontWeight: "800",
    marginTop: spacing.xxs
  }
});
