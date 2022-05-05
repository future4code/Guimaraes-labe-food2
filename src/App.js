import React from 'react'
import GlobalState from './Global/GlobalState'
import Router from './Routes/Routes'
import theme from './Constants/theme'
import { ThemeProvider } from '@material-ui/core'

const App = () => {
  return (
    <div>
      <GlobalState>
        <ThemeProvider theme={theme}>
           <Router/>
        </ThemeProvider>  
      </GlobalState>
    </div>
    // <GlobalState>
    //   {/* <Router /> */}
    // </GlobalState>
  )
}
export default App
