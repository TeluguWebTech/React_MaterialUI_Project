
import { Box, Stack } from '@mui/material'
import React from 'react'
import HeroText from './HeroText'
import HeroImage from './HeroImage'

const HeroSection = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent='space-between'
      sx={{ display:{xs:"block" , sm: "block", md:"flex" } }}
    >
        <Box sx={{ flex:'2' }}>
          <HeroText />
        </Box>
        <Box sx={{ flex:'1' }}>
          <HeroImage />
        </Box>
    </Stack>
  )
}

export default HeroSection