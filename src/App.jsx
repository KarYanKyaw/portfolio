import AOS from "aos";
import React, { useEffect, useState, Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import { Loading } from "./components";

const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init();

    Promise.all([import("./pages/Home")]).then(() => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      {isLoaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Loading />
      )}
    </Suspense>
  );
};

export default App;
