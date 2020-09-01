import { State } from "./AuthReducer";
import { createContext } from "../../utils";

type LoginCredensials = { email: string; password: string };

export type AuthAPI = {
  login: (loginCredensials: LoginCredensials) => void;
  logout: () => void;
} & State;

const { Provider, useContext } = createContext<AuthAPI>();

export { Provider, useContext as useAuthContext };
