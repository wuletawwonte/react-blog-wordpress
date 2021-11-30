import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import PageNotFound from "../pages/pagenotfound/PageNotFound";
import Dashboard from "../pages/dashboard/Dashboard";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/dashboard",
    component: "dashboard",
  },
  {
    path: "/*",
    component: PageNotFound,
  },
];

export default routes;
