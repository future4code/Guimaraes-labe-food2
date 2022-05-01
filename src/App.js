import React from 'react';
import GlobalState from './Global/GlobalState';
import Router from './Routes/Routes'
// import Router from './Routes/Routes';
// import GlobalState from './Global/GlobalState';

const App = () => {
  return (
    <div>
      <GlobalState>
        <Router>
        </Router>
      </GlobalState>
    </div>
    // <GlobalState>
    //   {/* <Router /> */}
    // </GlobalState>
  );
}

export default App;
