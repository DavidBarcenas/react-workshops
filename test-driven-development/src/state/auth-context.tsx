import { createContext, useState } from 'react';

type AuthContextProps = {
  isAuth: boolean;
  handleSuccessLogin: () => void;
};

type AuthProviderProps = {
  children: JSX.Element;
  isAuth?: boolean;
};

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({
  children,
  isAuth = false,
}: AuthProviderProps) {
  const [isUserAuth, setIsUserAuth] = useState(isAuth);

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
