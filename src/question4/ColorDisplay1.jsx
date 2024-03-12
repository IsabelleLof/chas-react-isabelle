import { useContext } from "react";
import { ThemeContext } from "./themeContext";

export default function ColorDisplay1() {
  //Vill ha ett state för att kunna uppdatera color
  //tar bort statet pga context
  //och funktionen ersätter med useContext:

  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <p>{theme}</p>
    </div>
  );
}
