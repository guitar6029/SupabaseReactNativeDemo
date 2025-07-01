// app/index.tsx
import { supabase } from '@/lib/supabase';
import { router } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        router.replace('/(app)/home');
      } else {
        router.replace('/(auth)/login');
      }
    });
  }, []);

  return null;
}
