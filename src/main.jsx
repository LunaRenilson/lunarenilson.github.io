import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";
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
    <main className="flex-grow mt-25">
      <Outlet /> {/* Renderiza as rotas aninhadas aqui */}
    </main>
    <Footer />
  </div>
);

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<App />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  </Router>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);