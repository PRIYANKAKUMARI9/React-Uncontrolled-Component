import React, { useRef } from 'react'

function Uncontrolled() {
    
    let inpref=useRef(null)
    let inpref2=useRef(null)

    function submitform(e){
        e.preventDefault();
        console.log("input field 1 value :",inpref.current.value)
        console.log("input field 2 value :",inpref2.current.value)
    }
  return (
    <div>
      <h1> Uncontrolled Cmomponent here </h1>
      <form onSubmit={submitform}>
      <label>Name : </label>
      <input type='text' ref={inpref}/><br/><br/>
      <label>addres : </label>
      <input type='text' ref={inpref2}/><br/><br/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default Uncontrolled
