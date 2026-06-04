import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Switch, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { gradients, palette } from "../theme/colors";
import { radius, shadow, spacing } from "../theme/spacing";
import { RootStackParamList } from "../types";

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function ProfileScreen() {
  const navigation = useNavigation<Nav>();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.lg }]} showsVerticalScrollIndicator={false}>
        <LinearGradient colors={gradients.primary} style={styles.profileCard}>
          <Avatar.Text size={64} label="RL" style={styles.avatar} labelStyle={styles.avatarLabel} />
          <View style={styles.profileText}>
            <Text variant="titleLarge" style={styles.name}>
              Reethika Lola
            </Text>
            <Text variant="bodyMedium" style={styles.email}>
              Parent profile • Grade 6 search
            </Text>
          </View>
        </LinearGradient>
        <View style={styles.statsRow}>
          <Stat value="12" label="Saved" />
          <Stat value="4" label="Compared" />
          <Stat value="7" label="Alerts" />
        </View>
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Settings
        </Text>
        <View style={styles.menu}>
          <MenuRow icon="notifications-outline" label="Admission notifications" right={<Switch value />} />
          <MenuRow icon="moon-outline" label="Dark mode ready" right={<Switch value={false} />} />
          <MenuRow icon="shield-checkmark-outline" label="Privacy preferences" />
          <MenuRow icon="school-outline" label="Admin dashboard" onPress={() => navigation.navigate("AdminDashboard")} />
        </View>
      </ScrollView>
    </View>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.stat}>
      <Text variant="headlineSmall" style={styles.statValue}>
        {value}
      </Text>
      <Text variant="labelMedium" style={styles.statLabel}>
        {label}
      </Text>
    </View>
  );
}

function MenuRow({ icon, label, right, onPress }: { icon: keyof typeof Ionicons.glyphMap; label: string; right?: ReactNode; onPress?: () => void }) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={styles.menuRow}>
      <View style={styles.menuIcon}>
        <Ionicons name={icon} size={20} color={palette.primary} />
      </View>
      <Text variant="bodyLarge" style={styles.menuLabel}>
        {label}
      </Text>
      {right ?? <Ionicons name="chevron-forward" size={20} color={palette.textSecondary} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: palette.background,
    flex: 1
  },
  content: {
    paddingBottom: 132,
    paddingHorizontal: spacing.lg
  },
  profileCard: {
    alignItems: "center",
    borderRadius: radius.xl,
    flexDirection: "row",
    gap: spacing.md,
    padding: spacing.lg,
    ...shadow.medium
  },
  avatar: {
    backgroundColor: palette.white
  },
  avatarLabel: {
    color: palette.primary,
    fontWeight: "900"
  },
  profileText: {
    flex: 1
  },
  name: {
    color: palette.white,
    fontWeight: "900"
  },
  email: {
    color: "rgba(255,255,255,0.82)"
  },
  statsRow: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: spacing.lg
  },
  stat: {
    alignItems: "center",
    backgroundColor: palette.white,
    borderColor: palette.border,
    borderRadius: radius.xl,
    borderWidth: 1,
    flex: 1,
    padding: spacing.md
  },
  statValue: {
    color: palette.textPrimary,
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
  menu: {
    backgroundColor: palette.white,
    borderColor: palette.border,
    borderRadius: radius.xl,
    borderWidth: 1,
    overflow: "hidden"
  },
  menuRow: {
    alignItems: "center",
    borderBottomColor: palette.border,
    borderBottomWidth: 1,
    flexDirection: "row",
    gap: spacing.md,
    minHeight: 64,
    paddingHorizontal: spacing.md
  },
  menuIcon: {
    alignItems: "center",
    backgroundColor: "#EFF6FF",
    borderRadius: radius.lg,
    height: 40,
    justifyContent: "center",
    width: 40
  },
  menuLabel: {
    color: palette.textPrimary,
    flex: 1,
    fontWeight: "800"
  }
});
