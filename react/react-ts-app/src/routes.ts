import type { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        path: "/",
      },
    ],
  },
];

export default routes;
