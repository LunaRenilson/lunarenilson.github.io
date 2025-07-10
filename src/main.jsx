import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import ErrorPage from "@pages/ErrorPage.jsx";
import Contact from "@pages/Contact.jsx";
import Navigator from "@components/Navigator.jsx";
import Projects from "@pages/Projects.jsx";
import Footer from "@components/Footer.jsx";

const RootLayout = () => (
  <div className="min-h-screen flex flex-col">
    <Navigator />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <App />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
