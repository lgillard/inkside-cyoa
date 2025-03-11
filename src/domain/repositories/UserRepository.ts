import type {User} from "@/domain/models/User.ts";

export interface UserRepository {
    login(username: string, password: string): Promise<User>;
    logout(): Promise<void>;
}
