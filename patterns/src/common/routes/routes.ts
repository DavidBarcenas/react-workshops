import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../pages/NoLazy";
import Login from '../../auth/pages/Login';
import Register from '../../auth/pages/Register';
import VerifyAccount from '../../auth/pages/VerifyAccount';

type route = {
  path: string;
  name: string;
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  children?: route[]
};

const Auth = lazy(() => import(/* webpackChunkName: "auth" */ '../../auth/layout/Auth'))

export const routes: route[] = [
  { path: '/nolazy', name: 'No Lazy', component: NoLazy },
  { path: '/auth', name: 'Authentication', component: Auth, children:[
    { path: 'login', name: 'Login', component: Login },
    { path: 'register', name: 'Register', component: Register },
    { path: 'verify-account', name: 'Verify Account', component: VerifyAccount },
  ]},
];
