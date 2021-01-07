import React from "react";
import ReactDOM from "react-dom";
import { useStoreState } from "pullstate";
import { UIStore } from "./stores/UIStore";
import ThemeDisplay from "./components/ThemeDisplay";
import "./styles.scss";

// Create easy actions that directly "mutate" state using the power of immer!
function setOppositeThemeMode(s) {
  s.timesThemeChanged += 1;
  s.theme.isDark = !s.theme.isDark;
}

function App() {
  const { isDark, timesChanged } = useStoreState(UIStore, (s) => ({
    isDark: s.theme.isDark,
    timesChanged: s.timesThemeChanged
  }));

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <h1>
        Hello <code>pullstate</code>
      </h1>
      <div className="button-area">
        <button onClick={() => UIStore.update(setOppositeThemeMode)}>
          Change to {isDark ? "light" : "dark"} theme!
        </button>
        <h2>
          You've changed the theme {timesChanged} time
          {(timesChanged > 1 || timesChanged === 0) && "s"}
        </h2>
      </div>
      <div>
        <ThemeDisplay />
      </div>
      <a
        className="link"
        target="_blank"
        href="https://github.com/lostpebble/pullstate"
      >
        Pullstate github
      </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
