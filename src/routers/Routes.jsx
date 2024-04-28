import Main from "../layouts/Main";

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllArtAndCraft from "../pages/AllArtAndCraft";
import AddCraftItem from "../pages/AddCraftItem";
import MyArtAndCraft from "../pages/MyArtAndCraft";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails";
import UpdateCraft from "../pages/UpdateCraft";
import Error from "../components/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://craft-spectrum-server.vercel.app/recentCrafts"),
      },
      {
        path: "/allArtAndCraft",
        element: <AllArtAndCraft></AllArtAndCraft>,
        loader: () => fetch("https://craft-spectrum-server.vercel.app/crafts"),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://craft-spectrum-server.vercel.app/crafts/${params.id}`),
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
        path: "/updateCraft/:id",
        element: <UpdateCraft></UpdateCraft>,
        loader: ({ params }) =>
          fetch(`https://craft-spectrum-server.vercel.app/crafts/${params.id}`),
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
  {
    path: "*",
    element: <Error></Error>,
  },
]);
