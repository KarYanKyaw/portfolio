import AOS from "aos";
import React, { Suspense, lazy, useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import { Loading } from "./components";

const Home = lazy(() => import("./pages/Home"));
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init();

    Promise.all([import("./pages/Home")]).then(() => {
      setIsLoaded(true);
    });
  }, []);
  return (
    <>
      {isLoaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default App;
