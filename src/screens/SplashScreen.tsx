import { getSchools } from "../lib/supabase";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { GradientLogo } from "../components/GradientLogo";
import { gradients, palette } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Splash">;

export function SplashScreen({ navigation }: Props) {
  const scale = useRef(new Animated.Value(0.86)).current;
  const opacity = useRef(new Animated.Value(0)).current;

useEffect(() => {
  Animated.parallel([
    Animated.spring(scale, { toValue: 1, useNativeDriver: true, friction: 6 }),
    Animated.timing(opacity, { toValue: 1, duration: 700, useNativeDriver: true })
  ]).start();

  const timer = setTimeout(() => navigation.replace("Onboarding"), 1500);

  return () => clearTimeout(timer);
}, [navigation, opacity, scale]);

  return (
    <View style={styles.screen}>
      <LinearGradient colors={["#FFFFFF", "#EFF6FF", "#ECFDF5"]} style={StyleSheet.absoluteFill} />
      <Animated.View style={[styles.logoWrap, { opacity, transform: [{ scale }] }]}>
        <GradientLogo size="lg" />
      </Animated.View>
      <View style={styles.footer}>
        <Text variant="labelLarge" style={styles.label}>
          Discover trusted schools in Visakhapatnam
        </Text>
        <LinearGradient colors={gradients.primary} style={styles.progress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  logoWrap: {
    alignItems: "center"
  },
  footer: {
    alignItems: "center",
    bottom: spacing.xxxl,
    left: spacing.xl,
    position: "absolute",
    right: spacing.xl
  },
  label: {
    color: palette.textSecondary,
    fontWeight: "800",
    marginBottom: spacing.md,
    textAlign: "center"
  },
  progress: {
    borderRadius: 999,
    height: 5,
    width: 132
  }
});
