import React from "react";
const ThemeContext = React.createContext({
  ThemeHandler: () => {},
  muiTheme: "",
});

export default ThemeContext;
