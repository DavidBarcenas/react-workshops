import { createContext, useState } from 'react';

type AuthContextProps = {
  isAuth: boolean;
  handleSuccessLogin: () => void;
};

type AuthProviderProps = {
  children: JSX.Element;
};

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isUserAuth, setIsUserAuth] = useState(false);

  function handleSuccessLogin() {
    setIsUserAuth(true);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth: isUserAuth,
        handleSuccessLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
