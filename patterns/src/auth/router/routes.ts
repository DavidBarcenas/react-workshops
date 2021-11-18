import Login from "../pages/Login";
import Register from "../pages/Register";
import VerifyAccount from "../pages/VerifyAccount";
import type { route } from "../../types/route";

export const authRoutes: route[] = [
  { path: 'login', name: 'Login', component: Login },
  { path: 'register', name: 'Register', component: Register },
  { path: 'verify-account', name: 'Verify Account', component: VerifyAccount },
];
