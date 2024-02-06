import React, { useEffect } from "react";
import Home from "./pages/Home";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Home />;
};

export default App;
