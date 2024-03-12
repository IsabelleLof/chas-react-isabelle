import { ThemeContext } from "./themeContext";
import { useContext } from "react";

export default function ThemeButton() {

//hämta setTheme

const { setTheme } = useContext(ThemeContext);


  return (
    <div>
        <button>
      <select
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="purle">Purple</option>
        <option value="yellow">Yellow</option>
        <option value="black">Black</option>
      </select>
      </button>
    </div>
  );
}
