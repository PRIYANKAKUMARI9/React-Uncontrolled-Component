import React, { useState } from 'react'

function Formm() {
    const[valuee,setvaluee]=useState("");
    const[pasw,setpasw]=useState("email here");
    const[no,setno]=useState("type number here")

    function handleevent(e){
        console.log(e.target.value)
        setvaluee(e.target.value)
    }
    function handlepasw(e){
        console.log(e.target.value)
        setpasw(e.target.value)
    }
  return (
    <div>
      <form>
        <h1>controlled componenet here...</h1>
        <label>First Name : </label>
        <input type='text' value={valuee} onChange={handleevent}/><br/><br/>
        <label>Email Name : </label>
        <input type='text' value={pasw} onChange={handlepasw}/><br/><br/>
        <label>Phone no : </label>
        <input type='text' value={no} onChange={(e)=>setno(e.target.value)}/>
      </form>
    </div>
  )
}

export default Formm
