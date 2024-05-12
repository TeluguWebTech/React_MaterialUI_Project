import { Box, ThemeProvider, createTheme } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material';
import LandingPage from './mainfolder/pages/LandingPage';

const MyOwnButton = styled(Button)({
    backgroundColor: "red"
})

const App = () => {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
      palette:{
        mode:mode
      }
  })

  return (
    <ThemeProvider theme={darkTheme}>

    <Box bgcolor={"background.default"}>
      <LandingPage mode={mode} setMode={setMode} />
    </Box>
    </ThemeProvider>
  )
}

export default App