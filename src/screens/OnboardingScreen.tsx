import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { useRef, useState } from "react";
import { Dimensions, FlatList, Pressable, StyleSheet, View, ViewToken } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { gradients, palette } from "../theme/colors";
import { radius, shadow, spacing } from "../theme/spacing";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Onboarding">;

const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Find schools that fit your child",
    body: "Explore boards, localities, ratings, facilities, and fees without jumping across dozens of websites.",
    icon: "search"
  },
  {
    title: "Compare smarter before you visit",
    body: "Shortlist schools side by side with fees, admission status, transport, ratios, and campus strengths.",
    icon: "git-compare"
  },
  {
    title: "Explore admissions with confidence",
    body: "Track open seats, call the school, view location, and save favorites for your family discussion.",
    icon: "sparkles"
  }
];

export function OnboardingScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const listRef = useRef<FlatList<(typeof slides)[number]>>(null);
  const [index, setIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (typeof viewableItems[0]?.index === "number") {
      setIndex(viewableItems[0].index);
    }
  }).current;

  const goNext = () => {
    if (index < slides.length - 1) {
      listRef.current?.scrollToIndex({ index: index + 1 });
      return;
    }
    navigation.replace("Login");
  };

  return (
    <View style={[styles.screen, { paddingTop: insets.top + spacing.lg }]}>
      <Pressable accessibilityRole="button" onPress={() => navigation.replace("Login")} style={styles.skip}>
        <Text variant="labelLarge" style={styles.skipText}>
          Skip
        </Text>
      </Pressable>
      <FlatList
        ref={listRef}
        horizontal
        pagingEnabled
        data={slides}
        keyExtractor={(item) => item.title}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 60 }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <LinearGradient colors={gradients.primary} style={styles.illustration}>
              <View style={styles.orbitOne} />
              <View style={styles.orbitTwo} />
              <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={68} color={palette.white} />
            </LinearGradient>
            <Text variant="displaySmall" style={styles.title}>
              {item.title}
            </Text>
            <Text variant="bodyLarge" style={styles.body}>
              {item.body}
            </Text>
          </View>
        )}
      />
      <View style={[styles.bottom, { paddingBottom: insets.bottom + spacing.lg }]}>
        <View style={styles.dots}>
          {slides.map((slide, dotIndex) => (
            <View key={slide.title} style={[styles.dot, dotIndex === index && styles.dotActive]} />
          ))}
        </View>
        <Button mode="contained" onPress={goNext} style={styles.button} contentStyle={styles.buttonContent}>
          {index === slides.length - 1 ? "Get started" : "Next"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: palette.background,
    flex: 1
  },
  skip: {
    alignSelf: "flex-end",
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.sm
  },
  skipText: {
    color: palette.textSecondary,
    fontWeight: "900"
  },
  slide: {
    alignItems: "center",
    paddingHorizontal: spacing.xl,
    width
  },
  illustration: {
    alignItems: "center",
    borderRadius: 40,
    height: Math.min(width - 56, 320),
    justifyContent: "center",
    marginTop: spacing.lg,
    overflow: "hidden",
    width: Math.min(width - 56, 320),
    ...shadow.medium
  },
  orbitOne: {
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 90,
    height: 180,
    position: "absolute",
    right: -48,
    top: -38,
    width: 180
  },
  orbitTwo: {
    backgroundColor: "rgba(34,199,169,0.32)",
    borderRadius: 70,
    bottom: -36,
    height: 140,
    left: -32,
    position: "absolute",
    width: 140
  },
  title: {
    color: palette.textPrimary,
    fontWeight: "900",
    letterSpacing: 0,
    marginTop: spacing.xxxl,
    textAlign: "center"
  },
  body: {
    color: palette.textSecondary,
    lineHeight: 25,
    marginTop: spacing.md,
    textAlign: "center"
  },
  bottom: {
    paddingHorizontal: spacing.xl
  },
  dots: {
    flexDirection: "row",
    gap: spacing.xs,
    justifyContent: "center",
    marginBottom: spacing.lg
  },
  dot: {
    backgroundColor: "#D1D5DB",
    borderRadius: radius.pill,
    height: 8,
    width: 8
  },
  dotActive: {
    backgroundColor: palette.primary,
    width: 30
  },
  button: {
    backgroundColor: palette.primary,
    borderRadius: radius.xl
  },
  buttonContent: {
    minHeight: 58
  }
});
