import React from 'react';
import  Wallet  from './Wallet'
import Loot from './Loot'

function App() {
  return (
    <div className="App">
       <h2>Bitcoin Check</h2>
       <hr/>
       <Wallet/> 
       <hr/>
       <Loot/>
    </div>
  );
}

export default App;
 