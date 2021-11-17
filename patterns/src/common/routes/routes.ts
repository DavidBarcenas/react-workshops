import { lazy, LazyExoticComponent } from "react";

type route = {
  path: string;
  name: string;
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  children?: route[]
};

const Login = lazy(() => import(/* webpackChunkName: "login" */ '../../auth/pages/Login'))
const Register = lazy(() => import(/* webpackChunkName: "register" */ '../../auth/pages/Register'))
const VerifyAccount = lazy(() => import(/* webpackChunkName: "verifyAccount" */ '../../auth/pages/VerifyAccount'))

export const routes: route[] = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/verify', name: 'Verify Account', component: VerifyAccount },
];
