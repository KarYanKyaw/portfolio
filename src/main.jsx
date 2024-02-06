import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "atropos/css";
import "animate.css";
import "aos/dist/aos.css";
import "atropos/css";
import "react-vertical-timeline-component/style.min.css";

import { AppContextProvider } from "./contexts/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
