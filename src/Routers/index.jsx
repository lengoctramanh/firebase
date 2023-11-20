// IMPORT
import Home from "../Pages/Home";
import About from "../Pages/About";
import Auth from "../Pages/Auth";

export default [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Auth />,
  },
];
