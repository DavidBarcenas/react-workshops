import { lazy } from "react";

import NoLazy from "../pages/NoLazy";
import { authRoutes } from "../../auth/router/routes";
import type { route } from "../../types/route";

const Auth = lazy(() => import(/* webpackChunkName: "auth" */ '../../auth/layout/Auth'))
const Compound = lazy(() => import(/* webpackChunkName: "shopping" */ '../../compound-component/pages/Shopping'))

export const routes: route[] = [
  { path: '/no-lazyload', name: 'No LazyLoad', component: NoLazy },
  { path: '/compound-component', name: 'Compound Pattern', component: Compound },
  { path: '/auth', name: 'Authentication', component: Auth, children: authRoutes},
];
