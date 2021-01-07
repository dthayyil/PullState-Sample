import React from "react";
import { Store, useStoreState } from "pullstate";
import { UIStore, EThemeMode } from "../stores/UIStore";
import { Moon, Sun } from "../svg/Icons.tsx";

function ThemeDisplay() {
  const isDark = useStoreState(UIStore, s => s.theme.isDark);

  return (
    <div className={`theme-icon ${isDark ? "dark" : "light"}`}>
      {isDark ? <Moon /> : <Sun />}
    </div>
  );
}

export default ThemeDisplay;
