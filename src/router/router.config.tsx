import { RouteObject } from "react-router-dom";
import { LoaderPage } from "../pages";

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
];
