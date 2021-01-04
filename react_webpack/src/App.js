import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { setConfig } from './utils/config';
import Router from "./router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  className: "toast-custom"
});

// main app component
const App = function () {
  const [configLoaded, setConfigLoaded] = useState(false);
  useEffect(() => {
    setConfig()
      .then(() => {
        setConfigLoaded(true);
      })
      .catch(() => {
        toast.error("Error while retrieving config");
      });
  }, []);
  return (
    <>
      { configLoaded &&
        (
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        )
      }
    </>
  );
};

export default App;