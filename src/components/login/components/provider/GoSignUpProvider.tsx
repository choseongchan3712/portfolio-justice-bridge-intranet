import { useState } from "react";
import { GoSignUpContext } from "../context/GoSignUpContext";

interface GoSignUpProviderType {
  children:React.ReactNode;
}

const GoSignUpProvider = ({children}:GoSignUpProviderType) => {
  const [goSignUp, setGoSignUp] = useState<boolean>(false);
  return <GoSignUpContext.Provider value={{goSignUp, setGoSignUp}}>{children}</GoSignUpContext.Provider>;
};

export default GoSignUpProvider;