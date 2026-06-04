import { Image, ScrollView, StyleSheet, View } from "react-native";

import { radius, spacing } from "../theme/spacing";

type Props = {
  images: string[];
};

export function SchoolGallery({ images }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
      {images.map((image) => (
        <View key={image} style={styles.frame}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: spacing.sm,
    paddingRight: spacing.xl
  },
  frame: {
    borderRadius: radius.lg,
    height: 116,
    overflow: "hidden",
    width: 158
  },
  image: {
    height: "100%",
    width: "100%"
  }
});
