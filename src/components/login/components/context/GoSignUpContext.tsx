import { createContext } from "react";

interface SignUpButtonType {
  goSignUp: boolean;
  setGoSignUp: (value: boolean) => void;
}

export const GoSignUpContext = createContext<SignUpButtonType|null>(null);