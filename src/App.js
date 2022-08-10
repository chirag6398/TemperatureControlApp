import './App.css';
import React from 'react';
import Center from "./component/Center"
const App=()=>{
  return<>
  
    <div className='container'>
    <div className='main'>
      <Center/>
    </div>
      <div className='upper'>
        <h1 className='heading'>Temperature Control App</h1>
      </div>
      <div className='lower'>
      </div>
    </div>
    
    
    
  </>
}

export default App;
