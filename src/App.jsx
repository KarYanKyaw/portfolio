import AOS from "aos";
import React, { Suspense, lazy, useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import { Loading } from "./components";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default App;
