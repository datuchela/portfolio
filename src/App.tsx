import {
  createReactRouter,
  createRouteConfig,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";

import Header from "./components/Header";

// Route Components
import Index from "./routes";
import About from "./routes/About";
import ProjectsPage from "./routes/Projects";
import ProjectPage from "./routes/project/[projectName]";

const rootRoute = createRouteConfig();

const indexRoute = rootRoute.createRoute({
  path: "/",
  component: Index,
});

const aboutRoute = rootRoute.createRoute({
  path: "/about",
  component: About,
});

const projectsRoute = rootRoute.createRoute({
  path: "/projects",
  component: ProjectsPage,
});

export const singleProjectRoute = rootRoute.createRoute({
  path: "/project/$projectName",
  component: ProjectPage,
});

const routeConfig = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  projectsRoute,
  singleProjectRoute,
]);

const router = createReactRouter({ routeConfig });

function App() {
  return (
    <RouterProvider router={router}>
      <div className="w-screen h-screen px-16 py-8 flex flex-col gap-16">
        {/* <Header /> */}
        <main className="flex flex-col">
          <Outlet />
        </main>
      </div>
    </RouterProvider>
  );
}

export default App;
