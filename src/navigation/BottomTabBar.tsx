import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { palette } from "../theme/colors";
import { radius, shadow, spacing } from "../theme/spacing";

const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
  Home: "home",
  Search: "search",
  Favorites: "heart",
  Profile: "person"
};

export function BottomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrap, { paddingBottom: Math.max(insets.bottom, spacing.sm) }]}>
      <View style={styles.bar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const options = descriptors[route.key].options;

          return (
            <Pressable
              key={route.key}
              accessibilityRole="tab"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={() => {
                const event = navigation.emit({ type: "tabPress", target: route.key, canPreventDefault: true });
                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              }}
              style={[styles.item, isFocused && styles.itemActive]}
            >
              <Ionicons name={icons[route.name]} size={20} color={isFocused ? palette.white : palette.textSecondary} />
              {isFocused ? (
                <Text variant="labelMedium" style={styles.activeLabel}>
                  {route.name}
                </Text>
              ) : null}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "transparent",
    bottom: 0,
    left: 0,
    paddingHorizontal: spacing.lg,
    position: "absolute",
    right: 0
  },
  bar: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.96)",
    borderColor: palette.border,
    borderRadius: radius.xl,
    borderWidth: 1,
    flexDirection: "row",
    gap: spacing.xs,
    justifyContent: "space-between",
    padding: spacing.xs,
    ...shadow.medium
  },
  item: {
    alignItems: "center",
    borderRadius: radius.lg,
    flex: 1,
    flexDirection: "row",
    gap: spacing.xs,
    height: 48,
    justifyContent: "center"
  },
  itemActive: {
    backgroundColor: palette.primary
  },
  activeLabel: {
    color: palette.white,
    fontWeight: "900"
  }
});
