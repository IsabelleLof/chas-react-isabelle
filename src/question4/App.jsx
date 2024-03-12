// Context API för Temahantering (3p)
// Använd Context API för att skapa ett enkelt tema-byte-system.
// Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.
// Skapa två barn-komponenter som använder temat.
// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.
// Providern i App-komponenten ska omsluta de tre barn-komponenterna.

import ColorDisplay2 from "./ColorDisplay2";
import ColorDisplay1 from "./ColorDisplay1";
import ThemeButton from "./ThemeButton";
import { ThemeProvider } from "./themeContext";

function App() {
  return (
    <ThemeProvider>
      <div>
        <ColorDisplay1 />
        <ColorDisplay2 />
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
