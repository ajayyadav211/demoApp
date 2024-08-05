
import './App.css';
import React, {useState} from 'react'
// import addString from './util/calculator';

function App() {
 const [input, setInput] = useState("");
 const [finalResult, setfinalResult] = useState("");

 const handleAdd = () => {
    const data = add(input);
    setfinalResult(data);
};

const handleChange = (e) => {
  setInput(e.target.value);
};



return (
  <>
   <h1>String Calculator</h1>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleAdd}>ADD</button>
      {finalResult}
  </>
)

}

export default App;
