import { Login, Register, VerifyAccount } from "../../auth/pages";

type route = {
  path: string;
  name: string;
  component: () => JSX.Element;
  children?: route[]
};

export const routes: route[] = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/verify', name: 'Verify Account', component: VerifyAccount },
];
