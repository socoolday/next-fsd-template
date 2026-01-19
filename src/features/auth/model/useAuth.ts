import { login } from '../api/login';
import { useUserStore } from '@/entities/user';

export function useAuth() {
  const setUser = useUserStore((s) => s.setUser);

  const signIn = async (email: string, password: string) => {
    const result = await login(email, password);
    if (result?.ok) {
      setUser({ id: '1', email, name: null });
    }
    return result;
  };

  return { signIn };
}
