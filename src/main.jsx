import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import UserProvider from "../context/UserProvider.jsx";
import TanstackProvider from "../tanstack-query/TanstackProvider.jsx";
import MenuProvider from "../context/MenuProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TanstackProvider>
          <MenuProvider>
            <App />
          </MenuProvider>
        </TanstackProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
