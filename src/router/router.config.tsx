import { RouteObject } from "react-router-dom";
import { LoaderPage } from "../pages";

import { MainPageWrapper } from "../wrappers";

export const MULTY_PATHS = {
  MAIN: "/main/:activeTabbar",
} as const;

export const PATHS = {
  LOADER: "/",
  MAIN: "/main",
  PROFILE: "/profile",
} as const;

export const PATHS_SUB = {
  MAIN: {
    HOME: "home",
    MENU: "menu",
    PAYMENTS: "payments",
  },
} as const;

export const ROUTES: RouteObject[] = [
  {
    path: PATHS.LOADER,
    element: <LoaderPage />,
  },
  {
    path: MULTY_PATHS.MAIN,
    element: <MainPageWrapper />,
  },
];

// Types:

export type multyPathsKeyNames = keyof typeof MULTY_PATHS;
export type pathsKeyNames = keyof typeof PATHS;

export type subPathsKeyNames = keyof (typeof PATHS_SUB)["MAIN"];
