import { Stack } from 'expo-router';
import { Colors } from '../../constants/theme';

export default function AssessmentLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: Colors.background },
        headerTitle: 'Skill Check',
        headerBackTitleVisible: false,
        headerTintColor: Colors.primary,
        contentStyle: { backgroundColor: Colors.background }
      }}
    >
      <Stack.Screen name="questions" />
      <Stack.Screen name="upload" options={{ title: 'Upload Proof' }} />
      <Stack.Screen name="analysis" options={{ headerShown: false }} />
      <Stack.Screen name="verification-status" options={{ title: 'Status' }} />
    </Stack>
  );
}
