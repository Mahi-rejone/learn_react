import { useState } from "react";
import "./App.css";

function App() {

  let [counter ,setCounter] = useState(5)
  let [message, setMessage] =useState("");

  const addValue = () => {
    if(counter<20){
      counter += 1;
      setCounter(counter);
    }
    else{
      setMessage("cant set counter up tp 20");
    }
  };

  const subtractValue = () => {
    if(counter>0){
      counter -= 1;
      setCounter(counter);
    }
    else{
      setMessage("can't set counter less then 0")
    }
  };

  const resetValue = () => {
    counter = 0;
    setCounter(counter);
    setMessage("Counter restarted")
  };
  return (
    <>
      <h1>Welcome to the Counter App</h1>
      <h2>Current count: {counter}</h2>
      {message && <p>{message}</p>}
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={subtractValue}>subtract value</button>
      <br />
      <button onClick={resetValue}>reset value</button>
    </>
  );
}

export default App;
