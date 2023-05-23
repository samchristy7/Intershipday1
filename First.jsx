//rafce
import React from 'react'
import { typographyClasses,TextField,Button } from '@mui/material';

const First = () => {
  return (
    <div>
         <h1>INSTAGRAM</h1>
      <input placeholder="Username"></input>
      <br></br>
      <input placeholder="password"></input>
      <br></br>
      <button>Sign In</button>
      <br></br>
      <br></br>
      <TextField variant='standard' label='OTP'></TextField>
      <br></br>
      <br></br>
      <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default First