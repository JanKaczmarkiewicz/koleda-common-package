import { createContext } from "@koleda/common-utils";
import { State } from "./AuthReducer";

type LoginCredensials = { email: string; password: string };

export type AuthAPI = {
  login: (loginCredensials: LoginCredensials) => void;
  logout: () => void;
} & State;

const { Provider, useContext } = createContext<AuthAPI>();

export { Provider, useContext as useAuthContext };
