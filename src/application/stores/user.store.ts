import { defineStore } from 'pinia';
import {UserAPIRepository} from "@/infrastructure/repositories/UserAPIRepository.ts";
import type {UserRepository} from "@/domain/repositories/UserRepository.ts";
import type {User} from "@/domain/models/User.ts";

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

const userRepository: UserRepository = new UserAPIRepository();

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null
  }),

  actions: {
    async login(username: string, password: string): Promise<User> {
      this.loading = true;
      this.error = null;

      try {
        const user = await userRepository.login(username, password);

        this.user = user;
        this.isLoggedIn = true;

        return user;
      } catch (error: unknown) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async logout(): Promise<void> {
      this.loading = true;

      try {
        await userRepository.logout();

        this.user = null;
        this.isLoggedIn = false;
      } catch (error: any) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    resetError(): void {
      this.error = null;
    }
  }
});
