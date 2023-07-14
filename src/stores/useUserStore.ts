import { userService } from "../services/userService";
import { create } from "zustand";
import { getUser } from "../utilities/user-services";

//@ts-ignore

interface UserStore {
  user: UserData | null;
  credentials: Credentials;
  settingUser: (user: UserData | null) => Promise<void>;
  settingUserNull: (user: UserData | null) => Promise<void>;
  signUp: (userData: UserData) => Promise<void>;
  login: (credentials: Credentials) => Promise<void>;
  getToken: () => Promise<string | null | undefined>;
  logOut: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set, get) => ({
  // userData: { name: "", email: "", password: "", confirm: "", error: "" },
  user: getUser(),
  credentials: { email: "", password: "" },
  settingUser: async (user: UserData | null) => {
    set((state) => ({
      user: user,
    }));
  },
  settingUserNull: async (user: UserData | null) => {
    set((state) => ({
      user: null,
    }));
  },
  signUp: async (userData: UserData) => {
    try {
      const token: any = await userService.signUp(userData);
      // Persist the token to localStorage
      window.localStorage.setItem("token", token);
      return getUser();
    } catch (error) {
      console.error(error);
    }
  },
  login: async (credentials: Credentials) => {
    try {
      const token = await userService.login(credentials);
      // Persist the token to window.localStorage
      //@ts-ignore
      window.localStorage.setItem("token", token);
      return getUser();
    } catch (error) {
      console.error(error);
    }
  },
  getToken: async () => {
    try {
      const token = window.localStorage.getItem("token");
      // getItem will return null if no key
      if (!token) return null;
      const payload = JSON.parse(atob(token.split(".")[1]));
      // A JWT's expiration is expressed in seconds, not miliseconds
      if (payload.exp < Date.now() / 1000) {
        // Token has expired
        window.localStorage.removeItem("token");
        return null;
      }
      return token;
    } catch (error) {
      console.error(error);
    }
  },
  logOut: async () => {
    try {
      window.localStorage.removeItem("token");
    } catch (error) {
      console.error(error);
    }
  },
}));
