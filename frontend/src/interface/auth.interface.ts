import type { Socket } from "socket.io-client";
import type {
  UpdateUserProfile,
  User,
  UserLogin,
  UserSignUp,
} from "./user.interface";

export interface AuthStore {
  authUser: User | null;
  isSigningUp: boolean;
  isLoggingIn: boolean;
  isUpdatingProfile: boolean;
  isCheckingAuth: boolean;
  onlineUsers: string[];
  socket: Socket | null;

  checkAuth: () => Promise<void>;
  signup: (data: UserSignUp) => Promise<void>;
  logout: () => Promise<void>;
  login: (data: UserLogin) => Promise<void>;
  updateProfile: (data: UpdateUserProfile) => Promise<void>;
  connectSocket: () => void;
  disconnectSocket: () => void;
}

export interface AuthImagePatternProps {
  title: string;
  subtitle: string;
}
