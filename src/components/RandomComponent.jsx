import { useState } from "react";
export const RandomComponent = () => {

  const [count, setCount] = useState(0);
  const [randomValue, setRandomValue] = useState(null);

  function generateRandom() {
    const value = Math.floor(Math.random() * 100) + 1;
    setRandomValue(value);
    setCount(count + 1);
  }

  function resetCounter() {
    setCount(0);
    setRandomValue(null);
  }

  return (
    <div>
      <h2>Generador de Números Aleatorios</h2>
      {randomValue && <p>Último valor aleatorio: {randomValue}</p>}
      <button onClick={generateRandom}>Generar Número Aleatorio</button>
      <button onClick={resetCounter}>Reiniciar Contador</button>
      <p>Contador de clics: {count}</p>
    </div>
  );
};
