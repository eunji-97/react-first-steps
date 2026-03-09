import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContext from "./MainContext";

function DarkOrLight() {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContext />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;