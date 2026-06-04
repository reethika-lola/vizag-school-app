import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

import { ScreenHeader } from "../../components/ScreenHeader";
import { palette } from "../../theme/colors";
import { radius, spacing } from "../../theme/spacing";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "AddSchool">;

export function AddSchoolScreen({ navigation }: Props) {
  return (
    <View style={styles.screen}>
      <ScreenHeader title="Add school" subtitle="Create a premium profile" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {["School name", "Board", "Locality", "Annual fee range", "Grades", "Phone", "Website", "Address"].map((label) => (
          <TextInput key={label} mode="outlined" label={label} style={styles.input} />
        ))}
        <Button mode="contained" style={styles.button} contentStyle={styles.buttonContent}>
          Save school
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
  input: {
    backgroundColor: palette.white,
    marginBottom: spacing.md
  },
  button: {
    backgroundColor: palette.primary,
    borderRadius: radius.xl,
    marginTop: spacing.sm
  },
  buttonContent: {
    minHeight: 56
  }
});
