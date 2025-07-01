// app/(app)/_layout.tsx
import NavigationBar from '@/components/ui/NavigationBar';
import { Stack } from 'expo-router';
import { View } from 'react-native';


export default function AppLayout() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationBar />
      <Stack />
    </View>
  );
}
