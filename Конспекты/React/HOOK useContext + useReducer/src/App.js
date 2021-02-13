import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import Main from './Main.jsx';
import Alert from './Alert/Alert.jsx';
import AlertProvider from './Alert/AlertContext.jsx';

function App() {

  return (
    <div style={{ paddingTop: '10px', marginLeft: 'auto', marginRight: 'auto', width: '500px' }}>

      <AlertProvider>
        <Alert /> 
        <Main />
      </AlertProvider>

    </div>
  )
}

export default App;



















/*



*/