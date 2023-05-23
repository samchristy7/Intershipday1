import { AppBar, Toolbar, Typography,Button } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography sx={{flexGrow : 1}} align='left'>NavBar</Typography>
                    <Button variant='outlined' color='error'>Sign Up</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
