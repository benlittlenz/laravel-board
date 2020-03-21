import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Archive from "../pages/Archive";
import NoMatch from "../pages/NoMatch";
import Project from "../pages/Project"
import Create from "../pages/Create"

const routes = [
  {
    path: "/create",
    exact: true,
    auth: true,
    component: Create,
    fallback: Home
  },
  {
    path: "/",
    exact: true,
    auth: true,
    component: Dashboard,
    fallback: Home
  },
  {
    path: "/project/:id",
    exact: true,
    auth: true,
    component: Project,
    fallback: Home
  },
  {
    path: "/login",
    exact: true,
    auth: false,
    component: Login
  },
  {
    path: "/register",
    exact: true,
    auth: false,
    component: Register
  },
  {
    path: "/forgot-password",
    exact: true,
    auth: false,
    component: ForgotPassword
  },
  {
    path: "/reset-password",
    exact: true,
    auth: false,
    component: ResetPassword
  },
  {
    path: "/archive",
    exact: true,
    auth: true,
    component: Archive
  },
  {
    path: "",
    exact: false,
    auth: false,
    component: NoMatch
  }
];

export default routes;
