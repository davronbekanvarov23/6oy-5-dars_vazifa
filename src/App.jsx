import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// pages
import BoshSahifa from "./pages/BoshSahifa";
import Xizmatlar from "./pages/Xizmatlar";
import Portfolio from "./pages/Portfolio";
import Jamoa from "./pages/Jamoa";
import Blog from "./pages/Blog";
import Kontaktlar from "./pages/Kontaktlar";

function App() {
  <div className="app">app</div>;

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <BoshSahifa />,
        },
        {
          path: "/xizmatlar",
          element: <Xizmatlar />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/jamoa",
          element: <Jamoa />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/kontaktlar",
          element: <Kontaktlar />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
