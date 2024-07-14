import { AppBar ,Toolbar,Typography} from '@mui/material'
import React from 'react'

function Navbar() {
  return (
    <AppBar position="static" className="bg-gray-900">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        My Portfolio
      </Typography>
      </Toolbar>
      </AppBar>
  )
}

export default Navbar