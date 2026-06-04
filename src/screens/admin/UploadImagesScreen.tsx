import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

import { ScreenHeader } from "../../components/ScreenHeader";
import { schools } from "../../data/schools";
import { palette } from "../../theme/colors";
import { radius, shadow, spacing } from "../../theme/spacing";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "UploadImages">;

export function UploadImagesScreen({ navigation }: Props) {
  const images = schools[0].gallery;

  return (
    <View style={styles.screen}>
      <ScreenHeader title="Upload images" subtitle="Curate campus galleries" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Pressable style={styles.dropzone}>
          <Ionicons name="cloud-upload-outline" size={42} color={palette.primary} />
          <Text variant="titleMedium" style={styles.dropTitle}>
            Add campus photos
          </Text>
          <Text variant="bodyMedium" style={styles.dropText}>
            Upload hero, classroom, lab, sports, and transport images.
          </Text>
        </Pressable>
        <View style={styles.grid}>
          {images.map((image) => (
            <Image key={image} source={{ uri: image }} style={styles.image} />
          ))}
        </View>
        <Button mode="contained" style={styles.button} contentStyle={styles.buttonContent}>
          Save gallery
        </Button>
      </ScrollView>
    </View>
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
  dropzone: {
    alignItems: "center",
    backgroundColor: "#EFF6FF",
    borderColor: "#BFDBFE",
    borderRadius: radius.xl,
    borderStyle: "dashed",
    borderWidth: 1,
    padding: spacing.xxl
  },
  dropTitle: {
    color: palette.textPrimary,
    fontWeight: "900",
    marginTop: spacing.sm
  },
  dropText: {
    color: palette.textSecondary,
    lineHeight: 22,
    marginTop: spacing.xs,
    textAlign: "center"
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginTop: spacing.lg
  },
  image: {
    borderRadius: radius.lg,
    height: 104,
    width: "31%",
    ...shadow.soft
  },
  button: {
    backgroundColor: palette.primary,
    borderRadius: radius.xl,
    marginTop: spacing.xl
  },
  buttonContent: {
    minHeight: 56
  }
});
