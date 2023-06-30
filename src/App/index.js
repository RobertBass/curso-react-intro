import React from 'react';
import { AppUI } from './AppUI';
import { Provider } from '../components/Context';
import '../styles/App.css';

//*************************************************************************** */

function App() {
  return(
    <Provider>
      <AppUI />
    </Provider>
  )
}

export default App;
