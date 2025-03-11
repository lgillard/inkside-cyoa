import type {UserRepository} from "@/domain/repositories/UserRepository.ts";
import {User} from "@/domain/models/User.ts";

export class UserAPIRepository implements UserRepository {
  login(username: string, password: string): Promise<User> {
    return Promise.resolve(new User());
  }

  logout(): Promise<void> {
    return Promise.resolve();
  }
}
