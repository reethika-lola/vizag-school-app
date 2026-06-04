import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Divider, Text, TextInput } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { supabase } from "../lib/supabase";
import { GradientLogo } from "../components/GradientLogo";
import { gradients, palette } from "../theme/colors";
import { radius, shadow, spacing } from "../theme/spacing";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export function LoginScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
  if (!email || !password) {
    Alert.alert(
      "Missing Information",
      "Please enter your email and password."
    );
    return;
  }

  try {
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert(
        "Login Failed",
        error.message
      );
      return;
    }

    navigation.replace("MainTabs");
  } catch (err) {
    Alert.alert(
      "Error",
      "Something went wrong."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <View
      style={[
        styles.screen,
        {
          paddingTop: insets.top + spacing.xl,
          paddingBottom: insets.bottom + spacing.lg,
        },
      ]}
    >
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
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />

        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.input}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />

        <Button
          mode="contained"
          onPress={handleLogin}
          loading={loading}
          disabled={loading}
          style={styles.primaryButton}
          contentStyle={styles.buttonContent}
        >
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
          icon={() => (
            <Ionicons
              name="logo-google"
              size={18}
              color={palette.textPrimary}
            />
          )}
          onPress={() =>
            Alert.alert(
              "Coming Soon",
              "Google Sign-In will be added next."
            )
          }
          style={styles.google}
          contentStyle={styles.buttonContent}
          textColor={palette.textPrimary}
        >
          Continue with Google
        </Button>
      </View>

      <Button
        onPress={() => navigation.navigate("Signup")}
        textColor={palette.primary}
      >
        New here? Create an account
      </Button>

      <LinearGradient
        colors={gradients.teal}
        style={styles.floatingBadge}
      >
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
    paddingHorizontal: spacing.xl,
  },

  hero: {
    marginTop: spacing.xxxl,
  },

  title: {
    color: palette.textPrimary,
    fontWeight: "900",
    letterSpacing: 0,
  },

  subtitle: {
    color: palette.textSecondary,
    lineHeight: 25,
    marginTop: spacing.sm,
  },

  form: {
    marginTop: spacing.xxl,
  },

  input: {
    backgroundColor: palette.white,
    marginBottom: spacing.md,
  },

  primaryButton: {
    backgroundColor: palette.primary,
    borderRadius: radius.xl,
    marginTop: spacing.xs,
  },

  buttonContent: {
    minHeight: 56,
  },

  dividerRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.md,
    marginVertical: spacing.lg,
  },

  divider: {
    flex: 1,
  },

  dividerText: {
    color: palette.textSecondary,
    fontWeight: "800",
  },

  google: {
    borderColor: palette.border,
    borderRadius: radius.xl,
  },

  floatingBadge: {
    borderRadius: radius.pill,
    bottom: 32,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    position: "absolute",
    right: spacing.xl,
    ...shadow.soft,
  },

  badgeText: {
    color: palette.white,
    fontWeight: "900",
  },
});