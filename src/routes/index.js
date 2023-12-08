// All components mapping with path for internal routes

import { lazy } from "react";
const Transactions = lazy(() => import("../pages/protected/Transactions"));
const Bills = lazy(() => import("../pages/protected/Bills"));
const ReservationDetail = lazy(() => import("../pages/protected/ReservationDetail"));

const routes = [
  {
    path: "/reservation",
    component: Bills,
  },
  {
    path: `/reservation/:id`,
    component: ReservationDetail,
  },
  // {
  //   path: "/articles",
  //   component: Leads,
  // },
  // {
  //   path: "/settings-profile",
  //   component: ProfileSettings,
  // },
  {
    path: "/transactions",
    component: Transactions,
  },
];

export default routes;
