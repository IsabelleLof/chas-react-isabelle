// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

// function Hobbies() {
//   return <div></div>;
// }

// export default Hobbies;

import { useState } from "react";
import "./App.css";

let count = 1;

export default function Hobbies() {
  //skapa states för att adda en hobby
  const [hobbies, setHobbies] = useState([]);
  //skapa ett state för att koll på input
  const [input, setInput] = useState("");

  function handleHobby(e) {
    setInput(e.target.value);
  }

  function handleAddHobby() {
    const hobby = {
      id: count++,
      text: input,
    };
    setHobbies([...hobbies, hobby]);
    setInput(""); // Clear the input field
    //console.log(comments);
  }

  function handleRemove(id) {
    const filteredHobbies = hobbies.filter((hobby) => hobby.id != id);
    setHobbies(filteredHobbies);
  }

  return (
    <div className="hobbies-container">
      {hobbies.map((hobby) => {
        return (
          <div className="hobby-text" key={hobby.id}>
            <p>{hobby.text}</p>
            <button onClick={() => handleRemove(hobby.id)}>Remove</button>
          </div>
        );
      })}
      <input type="text" onChange={handleHobby} />
      <button onClick={handleAddHobby}>Add</button>
    </div>
  );
}
