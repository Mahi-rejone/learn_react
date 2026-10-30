import { useState, useCallback } from "react";

function App() {
  const [lenth, setLenth] = useState("8");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(()=>{
    let pass ="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="{}[]()!@#$%^&*-+="

    for (let i = 0; i < lenth; i++){
      let char =Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char);
    }
    setPassword(pass);
  }
  );

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white-500 bg-gray">
      test
      </div>
      <h1 className="text-4xl text-center text-black">password generator</h1>
    </>
  );
}

export default App;
