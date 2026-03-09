import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContext() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div style={{
        width: "100vh",
        height: "100vh",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        padding : "1.5rem" 
    }}>
        <p>현재 테마는 {theme}입니다.</p>
        <button onClick={toggleTheme}>테마 변경</button>
    </div>
  );
}

export default MainContext;
  