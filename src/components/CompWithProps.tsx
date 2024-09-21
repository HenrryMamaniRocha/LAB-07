import { useState } from "react";
import React from "react";
export const CompWithProps = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>Escribe algo:</h2>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange}
        placeholder="Escribe aquí..." 
      />
      <h2>Texto actualizado:</h2>
      <p>User: 
        {inputValue}</p> {/* Muestra el texto actualizado */}
    </div>
  );
};
