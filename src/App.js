import './App.css';
import { useState } from 'react';
import Formm from './component/Formm';
import Uncontrolled from './component/Uncontrolled';

function App() {
  const[state,setstate]=useState("jujhiuj");
  const[state1,setstate1]=useState("writing here")
  return (
    <div className="App">
      <h1>Control component uses here ..!!</h1>
      <input type='text' value={state} onChange={(e)=>setstate(e.target.value)} /><br/><br/>
      
      <input type='text' value={state1} onChange={(e)=>setstate1(e.target.value)}/><br/>
      <Formm/>
      <Uncontrolled/>
    </div>
  );
}

export default App;
