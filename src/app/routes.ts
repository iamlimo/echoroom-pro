import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import Studio from "./pages/Studio";
import Shows from "./pages/Shows";
import Services from "./pages/Services";
import About from "./pages/About";
import Team from "./pages/Team";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "team", Component: Team },
      { path: "studio", Component: Studio },
      { path: "shows", Component: Shows },
    ],
  },
]);
