import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function NavigationBar() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
      <Pressable onPress={() => router.push('/(app)/home')}>
        <Text>Home</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/(app)/profile')}>
        <Text>Profile</Text>
      </Pressable>
    </View>
  );
}
