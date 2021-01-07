import { Store } from "pullstate";

export const UIStore = new Store({
  theme: {
    isDark: true
  },
  timesThemeChanged: 0
});
