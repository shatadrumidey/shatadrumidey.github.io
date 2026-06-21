import { createBrowserRouter } from "react-router";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { ContactPage } from "./components/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/projects",
    Component: ProjectsPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
]);
