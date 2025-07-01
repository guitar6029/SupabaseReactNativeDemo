import { supabase } from '@/lib/supabase';
import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function HomeScreen() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace('/(auth)/login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome Home!</Text>
      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
}
