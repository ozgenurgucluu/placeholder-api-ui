import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import UserPosts from "./pages/UserPosts";
import UserAlbums from "./pages/UserAlbums";
import UserTodos from "./pages/UserTodos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    
    element: <UserDetail/>,
    children:[
      {
        path:'/user/:userId',
        element:<UserPosts/>
      },
      {
       path:'/user/:userId/albums' ,
       element:<UserAlbums/>
      },
      {
        path:'/user/:userId/todos',
        element:<UserTodos/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
