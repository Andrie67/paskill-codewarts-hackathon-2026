import { Stack } from 'expo-router';
import { Colors } from '../../constants/theme';

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: Colors.background },
        headerTitle: '',
        headerBackTitleVisible: false,
        headerTintColor: Colors.primary,
        contentStyle: { backgroundColor: Colors.background }
      }}
    >
      <Stack.Screen name="role-selection" />
      <Stack.Screen name="basic-info" />
      <Stack.Screen name="guided-intro" />
    </Stack>
  );
}
