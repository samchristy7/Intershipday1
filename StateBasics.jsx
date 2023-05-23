import { Typography , Button , TextField } from '@mui/material'
import React, { useState } from 'react'
const StateBasics = () => {
    var [name,setPName]= useState("");
    var [val,setVal] =useState()
    const inputHandler = (e) =>{
        setVal(e.target.value);
        console.log(val);
    }
    const changeName =() =>{
        console.log("Clicked");
        setPName(val);
        setVal("")
    }
  return (
    <div> 
        <br></br>
        <Typography variant='h4' color='secondary' >{name}</Typography>
        <br></br>
        <Button variant='contained' color='success' onClick={changeName}>CHANGE</Button>
        <br></br>
        <br></br>
        <TextField variant='standard' color='error' onChange={inputHandler}></TextField>
    </div>
  )
  }
export default StateBasics