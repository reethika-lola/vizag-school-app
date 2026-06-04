import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { GradientLogo } from "../components/GradientLogo";
import { palette } from "../theme/colors";
import { radius, spacing } from "../theme/spacing";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

export function SignupScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { paddingTop: insets.top + spacing.xl, paddingBottom: insets.bottom + spacing.lg }]}>
      <GradientLogo />
      <Text variant="headlineLarge" style={styles.title}>
        Create your parent profile
      </Text>
      <Text variant="bodyLarge" style={styles.subtitle}>
        Save schools, compare options, and track admission updates in one place.
      </Text>
      <View style={styles.form}>
        <TextInput mode="outlined" label="Full name" style={styles.input} />
        <TextInput mode="outlined" label="Email" keyboardType="email-address" autoCapitalize="none" style={styles.input} />
        <TextInput mode="outlined" label="Password" secureTextEntry style={styles.input} />
        <TextInput mode="outlined" label="Child grade" style={styles.input} />
        <Button mode="contained" onPress={() => navigation.replace("MainTabs")} style={styles.primaryButton} contentStyle={styles.buttonContent}>
          Create account
        </Button>
      </View>
      <Button onPress={() => navigation.goBack()} textColor={palette.primary}>
        Already have an account? Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: palette.background,
    flex: 1,
    paddingHorizontal: spacing.xl
  },
  title: {
    color: palette.textPrimary,
    fontWeight: "900",
    letterSpacing: 0,
    marginTop: spacing.xxxl
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
  }
});
