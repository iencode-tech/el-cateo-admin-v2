import React, { lazy } from "react";
import { Redirect, Route } from "react-router-dom";
import { authCheck } from "../utils/authHelper";
import AuthLayout from "../layout/AuthLayout";
import ManageFarmLayout from "../layout/ManageFarmLayout";

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));

const Comingsoon = lazy(() => import("../pages/comingsoon/Comingsoon"));


const routes = [
    {
          path: "/farms/manage",
          component: <Comingsoon />
        },
  
  {
    path: "/farms/manage/dashboard",
    component: <Comingsoon />,
  },
];

export default routes.map((route, index) => (
  <Route
    exact
    key={index}
    path={route.path}
    render={() =>
        <ManageFarmLayout>{route.component}</ManageFarmLayout>
    }
  />
));
