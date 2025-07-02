// app/(app)/_layout.tsx
import NavigationBar from '@/components/ui/NavigationBar';
import { Stack } from 'expo-router';
import { View } from 'react-native';


export default function AppLayout() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationBar />
      <Stack
  screenOptions={{
    headerTitle: 'My App', // default title
  }}
>
  <Stack.Screen name="home" options={{ title: 'Home' }} />
  <Stack.Screen name="profile" options={{ title: 'Profile' }} />
</Stack>
  
    </View>
  );
}
