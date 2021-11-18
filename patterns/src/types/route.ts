import { LazyExoticComponent } from "react";

export type route = {
  path: string;
  name: string;
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  children?: route[]
};