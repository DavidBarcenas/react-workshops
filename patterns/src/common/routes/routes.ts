import { lazy, LazyExoticComponent } from "react";

type route = {
  path: string;
  name: string;
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  children?: route[]
};

const Login = lazy(() => import('../../auth/pages/Login'))
const Register = lazy(() => import('../../auth/pages/Register'))
const VerifyAccount = lazy(() => import('../../auth/pages/VerifyAccount'))

export const routes: route[] = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/verify', name: 'Verify Account', component: VerifyAccount },
];
