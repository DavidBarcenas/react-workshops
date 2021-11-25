import { lazy } from "react";

import NoLazy from "../pages/NoLazy";
import { authRoutes } from "../../auth/router/routes";
import type { route } from "../../types/route";

const Auth = lazy(() => import(/* webpackChunkName: "auth" */ '../../auth/layout/Auth'))
const NPMLibrary = lazy(() => import(/* webpackChunkName: "npm-library" */ '../../npm-library/pages/Shopping'))
const StateInitializer = lazy(() => import(/* webpackChunkName: "state-initializer" */ '../../state-initializer/pages/Shopping'))

export const routes: route[] = [
  { path: '/no-lazyload', name: 'No LazyLoad', component: NoLazy },
  { path: '/state-initializer', name: 'State Initializer', component: StateInitializer },
  { path: '/npm-libraryt', name: 'NPM Library', component: NPMLibrary },
  { path: '/auth', name: 'Authentication', component: Auth, children: authRoutes},
];
