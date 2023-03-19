import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/khamilah-prevost-9908b3245/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Khamilah Prevost
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/khamilahstacks/ReactWeatherApp.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/lighthearted-douhua-8e8581/deploys/6416a83e97a24a066aec1391"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

