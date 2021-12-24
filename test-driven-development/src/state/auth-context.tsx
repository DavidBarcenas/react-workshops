import { createContext, useState } from 'react';

type AuthContextProps = {
  isAuth: boolean;
  handleSuccessLogin: (user: User) => void;
  user: User;
};

type AuthProviderProps = {
  children: JSX.Element;
  isAuth?: boolean;
};

type User = {
  role: string;
  username: string;
};

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({
  children,
  isAuth = false,
}: AuthProviderProps) {
  const [isUserAuth, setIsUserAuth] = useState(isAuth);
  const [user, setUser] = useState<User>({ role: '', username: '' });

  function handleSuccessLogin(user: User) {
    setIsUserAuth(true);
    setUser(user);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth: isUserAuth,
        handleSuccessLogin,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
