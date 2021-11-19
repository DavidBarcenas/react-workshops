import { lazy } from "react";

import NoLazy from "../pages/NoLazy";
import { authRoutes } from "../../auth/router/routes";
import type { route } from "../../types/route";

const Auth = lazy(() => import(/* webpackChunkName: "auth" */ '../../auth/layout/Auth'))

export const routes: route[] = [
  { path: '/nolazy', name: 'No Lazy', component: NoLazy },
  { path: '/auth', name: 'Authentication', component: Auth, children: authRoutes},
];
