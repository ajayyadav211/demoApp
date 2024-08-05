
import './App.css';
import React, {useState} from 'react'
import {addString} from './util/calculator';

function App() {
 const [input, setInput] = useState("");
 const [finalResult, setfinalResult] = useState("");
 const [error, seterror] = useState("");

 const handleAdd = () => {
  try {
    const data = addString(input);
    setfinalResult(data);
    seterror("");
  } catch (error) {
    seterror(error.message);
    setfinalResult("");
  }
};

const handleChange = (e) => {
  setInput(e.target.value);
};



return (
  <>
   <h1>String Calculator</h1>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleAdd}>ADD</button>
      {finalResult !== ""&& <p>Result: {finalResult}</p>}
      {error !=="" && <p >{error}</p>}
  </>
)

}

export default App;
