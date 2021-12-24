import { createContext, useState } from 'react';

type AuthContextProps = {
  isAuth: boolean;
  handleSuccessLogin: (user: User) => void;
  user: User;
};

type AuthProviderProps = {
  children: JSX.Element;
  isAuth?: boolean;
  user?: User;
};

type User = {
  role?: string;
  username: string;
};

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({
  children,
  isAuth = false,
  user = { role: '', username: '' },
}: AuthProviderProps) {
  const [isUserAuth, setIsUserAuth] = useState(isAuth);
  const [userData, setUserData] = useState<User>(user);

  function handleSuccessLogin(user: User) {
    setUserData(user);
    setIsUserAuth(true);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth: isUserAuth,
        handleSuccessLogin,
        user: userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
