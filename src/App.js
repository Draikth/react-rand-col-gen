import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [col, setCol] = useState(true);
  const color = randomColor();
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
      <h1>Random Color Generator</h1>
      <button onClick={() => setCol(!col)}>Generate</button>
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '100px',
          marginTop: '8px',
          width: '700px',
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
