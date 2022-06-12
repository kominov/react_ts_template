import { PathRouteProps, IndexRouteProps } from "react-router-dom";
import { About } from "../pages/about/about";
import { Home } from "../pages/Homepage";

export const publicRoutes: Array<PathRouteProps | IndexRouteProps> = [
  { index: true, element: <Home /> },
  { index: false, path: "about", element: <About /> },
];
