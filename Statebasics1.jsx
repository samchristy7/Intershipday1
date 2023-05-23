import { Button,Typography } from '@mui/material'
import React,{ useState } from 'react'
const Statebasics1 = () => {
    var[hname,setHname] = useState("");
    
    const changehome = () => {
        setHname("Welcome 1") }
    const changegall = () => {
        setHname("Welcome 2")}
    const changecon = () => {
       setHname("Welcome 3")
    }
  return (
    <div>
        <Typography variant='h3'>{hname}</Typography>
        <Button variant='outlined' onClick={changehome}>HOME</Button>
        <Button variant='outlined' onClick={changegall}>GALLERY</Button>
        <Button variant='outlined'onClick={changecon} >CONTACT</Button>
    </div>
  )
}

export default Statebasics1