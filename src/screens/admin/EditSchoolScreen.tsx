import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

import { ScreenHeader } from "../../components/ScreenHeader";
import { schools } from "../../data/schools";
import { palette } from "../../theme/colors";
import { radius, spacing } from "../../theme/spacing";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "EditSchool">;

export function EditSchoolScreen({ navigation }: Props) {
  const school = schools[0];

  return (
    <View style={styles.screen}>
      <ScreenHeader title="Edit school" subtitle={school.name} navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TextInput mode="outlined" label="School name" defaultValue={school.name} style={styles.input} />
        <TextInput mode="outlined" label="Tagline" defaultValue={school.tagline} style={styles.input} />
        <TextInput mode="outlined" label="Board" defaultValue={school.board} style={styles.input} />
        <TextInput mode="outlined" label="Fees" defaultValue={school.annualFees} style={styles.input} />
        <TextInput mode="outlined" label="Admission status" defaultValue={school.admissionStatus} style={styles.input} />
        <TextInput mode="outlined" label="Facilities" defaultValue={school.facilities.join(", ")} multiline style={styles.input} />
        <Button mode="contained" style={styles.button} contentStyle={styles.buttonContent}>
          Publish changes
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
