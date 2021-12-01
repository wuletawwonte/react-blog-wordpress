import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import PageNotFound from "../pages/pagenotfound/PageNotFound";

const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/*",
    component: <PageNotFound />,
  },
];

export default routes;
