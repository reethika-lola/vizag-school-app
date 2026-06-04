import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, TextInput } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { supabase } from "../lib/supabase";
import { GradientLogo } from "../components/GradientLogo";
import { palette } from "../theme/colors";
import { radius, spacing } from "../theme/spacing";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

export function SignupScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [childGrade, setChildGrade] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!fullName || !email || !password || !childGrade) {
      Alert.alert(
        "Missing Information",
        "Please fill all fields."
      );
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        "Weak Password",
        "Password must be at least 6 characters long."
      );
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
            child_grade: childGrade.trim(),
          },
        },
      });

      if (error) {
        Alert.alert(
          "Signup Failed",
          error.message
        );
        return;
      }

      Alert.alert(
        "Account Created Successfully",
        "Your account has been created.\n\nPlease login using the email and password you just created.",
        [
          {
            text: "OK",
            onPress: () => navigation.goBack(),
          },
        ]
      );
    } catch (err: any) {
      console.log("SIGNUP ERROR:", err);
      Alert.alert(
        "Signup Error",
        err.message || "Something went wrong during signup."
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

      <Text variant="headlineLarge" style={styles.title}>
        Create your parent profile
      </Text>

      <Text variant="bodyLarge" style={styles.subtitle}>
        Save schools, compare options, and track admission updates in one place.
      </Text>

      <View style={styles.form}>
        <TextInput
          mode="outlined"
          label="Full Name"
          value={fullName}
          onChangeText={setFullName}
          style={styles.input}
        />

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
          secureTextEntry
          style={styles.input}
        />

        <TextInput
          mode="outlined"
          label="Child Grade"
          value={childGrade}
          onChangeText={setChildGrade}
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={handleSignup}
          loading={loading}
          disabled={loading}
          style={styles.primaryButton}
          contentStyle={styles.buttonContent}
        >
          Create Account
        </Button>
      </View>

      <Button
        onPress={() => navigation.goBack()}
        textColor={palette.primary}
      >
        Already have an account? Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: palette.background,
    flex: 1,
    paddingHorizontal: spacing.xl,
  },

  title: {
    color: palette.textPrimary,
    fontWeight: "900",
    letterSpacing: 0,
    marginTop: spacing.xxxl,
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
});