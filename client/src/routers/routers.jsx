import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/Home";
import { About } from "../pages/home/About";
import Services from "../pages/home/Services";
import { Tracking } from "../pages/home/Tracking";
import { ContactUs } from "../pages/home/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/track",
        element: <Tracking />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/orders",
        element: <div>Orders</div>,
      },
      {
        path: "/login",
        element: <div>login</div>,
      },
      {
        path: "/register",
        element: <div>Register</div>,
      },
    ],
  },
]);

export default router;
