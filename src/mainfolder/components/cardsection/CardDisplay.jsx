import { Stack } from '@mui/material'
import React from 'react'
import FirstCard from './FirstCard'
import SecondDisplay from './SecondDisplay'
import ThirdCard from './ThirdCard'

const CardDisplay = () => {
  return (
    <Stack direction='row' gap={3} m={4}
      sx={{ display:{xs:'block', sm:'flex', md:'flex', lg:'flex'} }}
    >
        <FirstCard />
        <SecondDisplay />
        <ThirdCard />
    </Stack>
  )
}

export default CardDisplay