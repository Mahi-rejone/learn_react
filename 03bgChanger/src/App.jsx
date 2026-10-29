import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            className="otline-none px-4 rounded-2xl py-2 "
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="otline-none px-4 rounded-2xl py-2 "
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="otline-none px-4 rounded-2xl py-2 border border-black"
            style={{ backgroundColor: "white" }}
            onClick={() => setColor("white")}
          >
            White
          </button>
          <button
            className="otline-none px-4 rounded-2xl py-2 text-white"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
