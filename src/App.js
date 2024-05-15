import randomColor from 'randomcolor';
import { useState } from 'react';

// Export App to index.js
export default function App() {
  const [col, setCol] = useState(true); // Initialize useState as true
  const color = randomColor(); // Generate random colors with randomcolor lib
  console.log(color);
  return (
    <div
      style={{
        height: '120px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '80px',
        }}
      >
        Random Color Generator
      </h1>
      <button onClick={() => setCol(col === !true)}>Generate</button>
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '75px',
          marginTop: '8px',
          width: '600px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: color,
          padding: '10px',
          color: 'white',
          textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 1px black',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        Generated Color: {color}
      </div>
    </div>
  );
}
