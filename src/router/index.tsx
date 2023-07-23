import { RouterProvider, createHashRouter } from "react-router-dom";

import { ROUTES } from "./router.config";
import { FC } from "react";

export const router = createHashRouter(ROUTES);

export const RouterContainer: FC = () => {
  return <RouterProvider router={router} />;
};
