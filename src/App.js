import React from 'react';
import Navbar from './components/Navbar';
import Div1 from './components/Div1';
import Div2 from './components/Div2';
import Div3 from './components/Div3';
import Div4 from './components/Div4';
import './css/App.css';

function App() {
  return (
    <div className='wrapper'>
      <div className='wrapper-inner'>
      <Navbar />
      <Div1 />
      <Div2 />
      <Div3 />
      <Div4 />
      </div>
    </div>
  );
}

export default App;
