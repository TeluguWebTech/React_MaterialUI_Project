import { Stack } from '@mui/material'
import React from 'react'
import FirstChart from './FirstChart'
import SecondChart from './SecondChart'

const MainGraph = () => {
  return (
    <Stack direction='row'
      sx={{ display: {xs:'block', sm:'block', md:'flex', lg:'flex'} }}>
        <FirstChart />
        <SecondChart />
    </Stack>
  )
}

export default MainGraph