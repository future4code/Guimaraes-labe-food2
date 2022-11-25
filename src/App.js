import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider} from '@mui/material';
import theme from './Constants/theme'
import GlobalState from './Global/GlobalState';
import Router from './Routes/Routes'
import GlobalStyle from './GlobalStyle/GlobalStyle';
// import Router from './Routes/Routes';
// import GlobalState from './Global/GlobalState';

const App = () => {
  return (
    <>
    <GlobalStyle />
    <MuiThemeProvider theme={theme}>
       <ThemeProvider theme={theme}>
      <GlobalState>
        <Router>
        </Router>
      </GlobalState>
    </ThemeProvider>
    </MuiThemeProvider>
    </>
   
    // <GlobalState>
    //   {/* <Router /> */}
    // </GlobalState>
  );
}

export default App;
