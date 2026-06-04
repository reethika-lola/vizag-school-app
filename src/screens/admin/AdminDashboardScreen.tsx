import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { ScreenHeader } from "../../components/ScreenHeader";
import { gradients, palette } from "../../theme/colors";
import { radius, shadow, spacing } from "../../theme/spacing";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "AdminDashboard">;

export function AdminDashboardScreen({ navigation }: Props) {
  return (
    <View style={styles.screen}>
      <ScreenHeader title="Admin dashboard" subtitle="Manage school content" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <LinearGradient colors={gradients.dark} style={styles.hero}>
          <Text variant="labelLarge" style={styles.heroLabel}>
            Today
          </Text>
          <Text variant="headlineMedium" style={styles.heroTitle}>
            18 admission leads need review
          </Text>
          <Text variant="bodyMedium" style={styles.heroText}>
            Keep school profiles fresh with verified fees, images, contacts, and admission availability.
          </Text>
        </LinearGradient>
        <View style={styles.statsGrid}>
          <StatCard label="Schools" value="133" tone="blue" />
          <StatCard label="Open seats" value="37" tone="teal" />
          <StatCard label="Images" value="428" tone="orange" />
          <StatCard label="Pending edits" value="9" tone="gray" />
        </View>
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Quick actions
        </Text>
        <ActionRow icon="add-circle-outline" title="Add school" subtitle="Create a complete school profile" onPress={() => navigation.navigate("AddSchool")} />
        <ActionRow icon="create-outline" title="Edit school" subtitle="Update fees, board, facilities, and contact" onPress={() => navigation.navigate("EditSchool")} />
        <ActionRow icon="images-outline" title="Upload images" subtitle="Add campus, classroom, and gallery photos" onPress={() => navigation.navigate("UploadImages")} />
        <ActionRow icon="calendar-outline" title="Manage admissions" subtitle="Open, pause, or close admissions" onPress={() => navigation.navigate("ManageAdmissions")} />
      </ScrollView>
    </View>
  );
}

function StatCard({ label, value, tone }: { label: string; value: string; tone: "blue" | "teal" | "orange" | "gray" }) {
  const color = tone === "blue" ? palette.primary : tone === "teal" ? palette.secondary : tone === "orange" ? palette.accent : palette.textPrimary;
  return (
    <View style={styles.statCard}>
      <Text variant="headlineSmall" style={[styles.statValue, { color }]}>
        {value}
      </Text>
      <Text variant="labelMedium" style={styles.statLabel}>
        {label}
      </Text>
    </View>
  );
}

function ActionRow({ icon, title, subtitle, onPress }: { icon: keyof typeof Ionicons.glyphMap; title: string; subtitle: string; onPress: () => void }) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={styles.actionRow}>
      <View style={styles.actionIcon}>
        <Ionicons name={icon} size={22} color={palette.primary} />
      </View>
      <View style={styles.actionText}>
        <Text variant="titleSmall" style={styles.actionTitle}>
          {title}
        </Text>
        <Text variant="bodySmall" style={styles.actionSubtitle}>
          {subtitle}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={palette.textSecondary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: palette.background,
    flex: 1
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl
  },
  hero: {
    borderRadius: radius.xl,
    padding: spacing.lg,
    ...shadow.medium
  },
  heroLabel: {
    color: palette.secondary,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  heroTitle: {
    color: palette.white,
    fontWeight: "900",
    letterSpacing: 0,
    marginTop: spacing.xs
  },
  heroText: {
    color: "rgba(255,255,255,0.76)",
    lineHeight: 22,
    marginTop: spacing.sm
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginTop: spacing.lg
  },
  statCard: {
    backgroundColor: palette.white,
    borderColor: palette.border,
    borderRadius: radius.xl,
    borderWidth: 1,
    padding: spacing.md,
    width: "48%"
  },
  statValue: {
    fontWeight: "900"
  },
  statLabel: {
    color: palette.textSecondary,
    fontWeight: "800"
  },
  sectionTitle: {
    color: palette.textPrimary,
    fontWeight: "900",
    marginBottom: spacing.md,
    marginTop: spacing.xxl
  },
  actionRow: {
    alignItems: "center",
    backgroundColor: palette.white,
    borderColor: palette.border,
    borderRadius: radius.xl,
    borderWidth: 1,
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.sm,
    padding: spacing.md
  },
  actionIcon: {
    alignItems: "center",
    backgroundColor: "#EFF6FF",
    borderRadius: radius.lg,
    height: 46,
    justifyContent: "center",
    width: 46
  },
  actionText: {
    flex: 1
  },
  actionTitle: {
    color: palette.textPrimary,
    fontWeight: "900"
  },
  actionSubtitle: {
    color: palette.textSecondary,
    marginTop: 2
  }
});
