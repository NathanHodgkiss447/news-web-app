//48:22 video

import React, { useState, useEffect } from "react";
import { useIsFocusVisible } from "@material-ui/core";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "833f3ea102af48a60d7478389dbdec362e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div className="app">
      <h1 className="app__content">News Web App</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
