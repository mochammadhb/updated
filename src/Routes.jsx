import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import News from "./Views/Berita/News";
import Login from "./Views/Profile/Login";
import Register from "./Views/Profile/Register";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="news" replace />,
    },
    {
      path: "/",
      children: [{ path: "news", element: <News /> }],
    },
    { path: "/store", element: <h1>Store</h1> },
    { path: "/apps", element: <h1>Apps</h1> },
    { path: "/profile", element: <h1>Accounts</h1> },
    {
      path: "/profile",
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);

  return routes;
};

export default Routes;
