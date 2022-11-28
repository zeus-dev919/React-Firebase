import React from "react";
import { useRoutes, RouteObject, Navigate } from "react-router-dom";
import Layout from "../layout";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./user/Home";
import Detail from "./user/Detail";
import Check from "./user/Check";
import LoginLayout from "../layout/LoginLayout";
import NotFoundView from "./NotFoundPage";
import Admin from "./admin/Admin";
import MyPage from "./user/MyPage";
import OrderInfo from "./admin/OrderInfo";

export default function Router() {
  const router: RouteObject[] = [

    {
      path: "/admin",
      element:<Admin/>
    },
    {
      path:"/admin/order",
      element:<OrderInfo/>
    },
    {
      path:"/404",
      element:<NotFoundView/>
    },
    {
      path:"*",
      element:<Navigate to='/404'/>
    },
    {
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "detail",
          element: <Detail />,
        },
        {
          path:'check',
          element:<Check/>
        },
       {
        path:'mypage',
        element:<MyPage/>
       }
      ],
    },
    {
      element:<LoginLayout/>,
      children:[
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'signup',
          element:<SignUp/>
        },
      ]
    }
  ];

  return useRoutes(router);
}
