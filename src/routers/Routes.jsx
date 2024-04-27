import Main from "../layouts/Main";

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllArtAndCraft from "../pages/AllArtAndCraft";
import AddCraftItem from "../pages/AddCraftItem";
import MyArtAndCraft from "../pages/MyArtAndCraft";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/recentCrafts"),
      },
      {
        path: "/allArtAndCraft",
        element: <AllArtAndCraft></AllArtAndCraft>,
        loader: () => fetch("http://localhost:5000/crafts"),
      },
      {
        path: "/addCraftItem",
        element: (
          <PrivateRoute>
            <AddCraftItem></AddCraftItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/myArtAndCraft",
        element: (
          <PrivateRoute>
            <MyArtAndCraft></MyArtAndCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
