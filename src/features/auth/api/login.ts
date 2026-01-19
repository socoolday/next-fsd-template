import { signIn } from 'next-auth/react';

export async function login(email: string, password: string) {
  return signIn('credentials', {
    email,
    password,
    redirect: false,
  });
}
