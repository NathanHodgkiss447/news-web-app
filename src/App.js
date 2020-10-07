import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";

const alanKey = "";

function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
    });
  }, []);

  return (
    <div className="app">
      <h1 className="app__content">News Web App</h1>
    </div>
  );
}

export default App;
