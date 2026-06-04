import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { Button, Divider, Text, TextInput } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { GradientLogo } from "../components/GradientLogo";
import { gradients, palette } from "../theme/colors";
import { radius, shadow, spacing } from "../theme/spacing";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export function LoginScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { paddingTop: insets.top + spacing.xl, paddingBottom: insets.bottom + spacing.lg }]}>
      <GradientLogo />
      <View style={styles.hero}>
        <Text variant="headlineLarge" style={styles.title}>
          Welcome back
        </Text>
        <Text variant="bodyLarge" style={styles.subtitle}>
          Continue discovering the best schools across Visakhapatnam.
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput mode="outlined" label="Email" keyboardType="email-address" autoCapitalize="none" style={styles.input} />
        <TextInput mode="outlined" label="Password" secureTextEntry style={styles.input} />
        <Button mode="contained" onPress={() => navigation.replace("MainTabs")} style={styles.primaryButton} contentStyle={styles.buttonContent}>
          Login
        </Button>
        <View style={styles.dividerRow}>
          <Divider style={styles.divider} />
          <Text variant="labelMedium" style={styles.dividerText}>
            or
          </Text>
          <Divider style={styles.divider} />
        </View>
        <Button
          mode="outlined"
          icon={() => <Ionicons name="logo-google" size={18} color={palette.textPrimary} />}
          onPress={() => navigation.replace("MainTabs")}
          style={styles.google}
          contentStyle={styles.buttonContent}
          textColor={palette.textPrimary}
        >
          Continue with Google
        </Button>
      </View>
      <Button onPress={() => navigation.navigate("Signup")} textColor={palette.primary}>
        New here? Create an account
      </Button>
      <LinearGradient colors={gradients.teal} style={styles.floatingBadge}>
        <Text variant="labelLarge" style={styles.badgeText}>
          Admissions 2026
        </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: palette.background,
    flex: 1,
    paddingHorizontal: spacing.xl
  },
  hero: {
    marginTop: spacing.xxxl
  },
  title: {
    color: palette.textPrimary,
    fontWeight: "900",
    letterSpacing: 0
  },
  subtitle: {
    color: palette.textSecondary,
    lineHeight: 25,
    marginTop: spacing.sm
  },
  form: {
    marginTop: spacing.xxl
  },
  input: {
    backgroundColor: palette.white,
    marginBottom: spacing.md
  },
  primaryButton: {
    backgroundColor: palette.primary,
    borderRadius: radius.xl,
    marginTop: spacing.xs
  },
  buttonContent: {
    minHeight: 56
  },
  dividerRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.md,
    marginVertical: spacing.lg
  },
  divider: {
    flex: 1
  },
  dividerText: {
    color: palette.textSecondary,
    fontWeight: "800"
  },
  google: {
    borderColor: palette.border,
    borderRadius: radius.xl
  },
  floatingBadge: {
    borderRadius: radius.pill,
    bottom: 32,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    position: "absolute",
    right: spacing.xl,
    ...shadow.soft
  },
  badgeText: {
    color: palette.white,
    fontWeight: "900"
  }
});
