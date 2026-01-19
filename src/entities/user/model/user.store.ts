import { create } from 'zustand';
import { User } from '@/shared/schema/user.schema';

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  clear: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clear: () => set({ user: null }),
}));
