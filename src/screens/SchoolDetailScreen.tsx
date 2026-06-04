import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { ImageBackground, Linking, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { RatingBadge } from "../components/RatingBadge";
import { SchoolGallery } from "../components/SchoolGallery";
import { gradients, palette } from "../theme/colors";
import { radius, shadow, spacing } from "../theme/spacing";
import { RootStackParamList } from "../types";
import { getSchoolById } from "../utils/school";

type Props = NativeStackScreenProps<RootStackParamList, "SchoolDetail">;

export function SchoolDetailScreen({ navigation, route }: Props) {
  const insets = useSafeAreaInsets();
  const school = getSchoolById(route.params.schoolId);

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <ImageBackground source={{ uri: school.image }} style={styles.hero}>
          <LinearGradient colors={["rgba(15,23,42,0.08)", "rgba(15,23,42,0.78)"]} style={[styles.heroOverlay, { paddingTop: insets.top + spacing.sm }]}>
            <View style={styles.heroActions}>
              <Pressable accessibilityRole="button" accessibilityLabel="Go back" onPress={() => navigation.goBack()} style={styles.glassButton}>
                <Ionicons name="chevron-back" size={24} color={palette.textPrimary} />
              </Pressable>
              <Pressable accessibilityRole="button" accessibilityLabel="Save school" style={styles.glassButton}>
                <Ionicons name="heart-outline" size={22} color={palette.textPrimary} />
              </Pressable>
            </View>
            <View>
              <RatingBadge rating={school.rating} />
              <Text variant="headlineLarge" style={styles.heroTitle}>
                {school.name}
              </Text>
              <Text variant="bodyLarge" style={styles.heroSubtitle}>
                {school.tagline}
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
        <View style={styles.body}>
          <View style={styles.quickActions}>
            <ActionButton icon="git-compare-outline" label="Compare" onPress={() => navigation.navigate("CompareSchools", { selectedIds: [school.id] })} />
            <ActionButton icon="call-outline" label="Call" onPress={() => Linking.openURL(`tel:${school.phone}`)} />
            <ActionButton icon="globe-outline" label="Website" onPress={() => Linking.openURL(school.website)} />
          </View>
          <InfoStrip school={school} />
          <Section title="Gallery">
            <SchoolGallery images={school.gallery} />
          </Section>
          <Section title="School information">
            <Text variant="bodyLarge" style={styles.paragraph}>
              {school.name} is a {school.board} school in {school.locality}, serving {school.grades}. Parents rate it highly for campus quality,
              academics, and student support.
            </Text>
          </Section>
          <Section title="Facilities">
            <View style={styles.facilityGrid}>
              {school.facilities.map((facility) => (
                <View key={facility} style={styles.facility}>
                  <Ionicons name="checkmark-circle" size={18} color={palette.secondary} />
                  <Text variant="labelLarge" style={styles.facilityText}>
                    {facility}
                  </Text>
                </View>
              ))}
            </View>
          </Section>
          <Section title="Fee structure">
            <View style={styles.feeCard}>
              <Text variant="headlineSmall" style={styles.fee}>
                {school.annualFees}
              </Text>
              <Text variant="bodyMedium" style={styles.muted}>
                Annual estimate. Confirm final fee split with the school office.
              </Text>
            </View>
          </Section>
          <Section title="Contact details">
            <View style={styles.contactCard}>
              <Text variant="titleMedium" style={styles.contactTitle}>
                {school.address}
              </Text>
              <Text variant="bodyMedium" style={styles.muted}>
                {school.phone} • {school.website}
              </Text>
            </View>
          </Section>
          <Section title="Map location">
            <LinearGradient colors={["#E0F2FE", "#ECFDF5"]} style={styles.mapCard}>
              <Ionicons name="location" size={42} color={palette.primary} />
              <Text variant="titleMedium" style={styles.mapTitle}>
                {school.locality}, Visakhapatnam
              </Text>
              <Text variant="bodySmall" style={styles.muted}>
                {school.coordinates.latitude.toFixed(4)}, {school.coordinates.longitude.toFixed(4)}
              </Text>
            </LinearGradient>
          </Section>
          <View style={styles.bottomActions}>
            <Button mode="outlined" onPress={() => navigation.navigate("CompareSchools", { selectedIds: [school.id] })} style={styles.compareButton}>
              Compare
            </Button>
            <Button mode="contained" onPress={() => Linking.openURL(`tel:${school.phone}`)} style={styles.callButton}>
              Call school
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function ActionButton({ icon, label, onPress }: { icon: keyof typeof Ionicons.glyphMap; label: string; onPress: () => void }) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress} style={styles.action}>
      <Ionicons name={icon} size={22} color={palette.primary} />
      <Text variant="labelLarge" style={styles.actionText}>
        {label}
      </Text>
    </Pressable>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={styles.section}>
      <Text variant="titleLarge" style={styles.sectionTitle}>
        {title}
      </Text>
      {children}
    </View>
  );
}

function InfoStrip({ school }: { school: ReturnType<typeof getSchoolById> }) {
  const items = [
    ["Board", school.board],
    ["Fees", school.annualFees],
    ["Admissions", school.admissionStatus],
    ["Ratio", school.studentTeacherRatio]
  ];
  return (
    <View style={styles.infoStrip}>
      {items.map(([label, value]) => (
        <View key={label} style={styles.infoItem}>
          <Text variant="labelSmall" style={styles.infoLabel}>
            {label}
          </Text>
          <Text variant="labelLarge" style={styles.infoValue}>
            {value}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: palette.background,
    flex: 1
  },
  content: {
    paddingBottom: spacing.xxl
  },
  hero: {
    height: 430
  },
  heroOverlay: {
    flex: 1,
    justifyContent: "space-between",
    padding: spacing.lg
  },
  heroActions: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  glassButton: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.88)",
    borderRadius: radius.pill,
    height: 46,
    justifyContent: "center",
    width: 46
  },
  heroTitle: {
    color: palette.white,
    fontWeight: "900",
    letterSpacing: 0,
    marginTop: spacing.sm
  },
  heroSubtitle: {
    color: "rgba(255,255,255,0.86)",
    lineHeight: 25,
    marginTop: spacing.xs
  },
  body: {
    padding: spacing.lg
  },
  quickActions: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: -44
  },
  action: {
    alignItems: "center",
    backgroundColor: palette.white,
    borderRadius: radius.xl,
    flex: 1,
    gap: spacing.xs,
    padding: spacing.md,
    ...shadow.soft
  },
  actionText: {
    color: palette.textPrimary,
    fontWeight: "900"
  },
  infoStrip: {
    backgroundColor: palette.white,
    borderColor: palette.border,
    borderRadius: radius.xl,
    borderWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: spacing.lg,
    padding: spacing.sm
  },
  infoItem: {
    padding: spacing.sm,
    width: "50%"
  },
  infoLabel: {
    color: palette.textSecondary,
    fontWeight: "800",
    textTransform: "uppercase"
  },
  infoValue: {
    color: palette.textPrimary,
    fontWeight: "900",
    marginTop: 2
  },
  section: {
    marginTop: spacing.xxl
  },
  sectionTitle: {
    color: palette.textPrimary,
    fontWeight: "900",
    marginBottom: spacing.md
  },
  paragraph: {
    color: palette.textSecondary,
    lineHeight: 26
  },
  facilityGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  facility: {
    alignItems: "center",
    backgroundColor: palette.surface,
    borderRadius: radius.lg,
    flexDirection: "row",
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  facilityText: {
    color: palette.textPrimary,
    fontWeight: "800"
  },
  feeCard: {
    backgroundColor: "#EFF6FF",
    borderRadius: radius.xl,
    padding: spacing.lg
  },
  fee: {
    color: palette.primary,
    fontWeight: "900"
  },
  muted: {
    color: palette.textSecondary,
    lineHeight: 22,
    marginTop: spacing.xs
  },
  contactCard: {
    backgroundColor: palette.surface,
    borderRadius: radius.xl,
    padding: spacing.lg
  },
  contactTitle: {
    color: palette.textPrimary,
    fontWeight: "900"
  },
  mapCard: {
    alignItems: "center",
    borderRadius: radius.xl,
    minHeight: 190,
    justifyContent: "center",
    padding: spacing.lg
  },
  mapTitle: {
    color: palette.textPrimary,
    fontWeight: "900",
    marginTop: spacing.sm
  },
  bottomActions: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: spacing.xxl
  },
  compareButton: {
    borderColor: palette.primary,
    borderRadius: radius.lg,
    flex: 1
  },
  callButton: {
    backgroundColor: palette.primary,
    borderRadius: radius.lg,
    flex: 1
  }
});
