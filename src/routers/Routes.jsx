import Main from "../layouts/Main";

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllArtAndCraft from "../pages/AllArtAndCraft";
import AddCraftItem from "../pages/AddCraftItem";
import MyArtAndCraft from "../pages/MyArtAndCraft";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allArtAndCraft",
        element: <AllArtAndCraft></AllArtAndCraft>,
      },
      {
        path: "/addCraftItem",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/myArtAndCraft",
        element: <MyArtAndCraft></MyArtAndCraft>,
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
