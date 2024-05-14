import randomColor from 'randomcolor';

export default function App() {
  const color = randomColor();
  console.log(color);
  return (
    <>
      <div>
        <h1>Random Color Generator</h1>
        <button>Generate</button>
      </div>
      <div
        style={{
          backgroundColor: color,
          width: '50%',
          margin: '25%',
          color: 'white',
          textShadow:
            '-0.75px 0 black, 0 0.75px black, 0.75px 0 black, 0 -0.75px black',
        }}
      >
        Generated Color: {color}
      </div>
    </>
  );
}
