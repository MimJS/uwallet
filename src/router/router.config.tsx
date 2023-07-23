import { RouteObject } from "react-router-dom";
import { HomePage, LoaderPage } from "../pages";

export const PATHS = {
  LOADER: "/",
  HOME: "/home",
  PROFILE: "/profile",
};

export const ROUTES: RouteObject[] = [
  {
    path: PATHS.LOADER,
    element: <LoaderPage />,
  },
  {
    path: PATHS.HOME,
    element: <HomePage />,
  },
];
