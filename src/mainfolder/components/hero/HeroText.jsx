import { Box, Typography } from '@mui/material'
import React from 'react'
import HeroDivider from './HeroDivider'

const HeroText = () => {
  return (
    <Box sx={{ 
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     width:'100%',
     height:{xs:"100%", sm:"100%"},
    marginTop:{xs:"20px", sm:"20px"}
     }}>
      <Box>
        <HeroDivider />
      </Box>
    
    </Box>
  )
}

export default HeroText