import React from 'react';
import '../css/Div2.css';

const Div2 = () => {
  return (
<div id='div2' className="div2">
  <div className="header">
    <h1>Utbildning</h1>

  </div>
  
  <div className="content-row">
    
    <div className="left">
      <div className="education-item">
        <h2>Pythonutvecklare inriktning AI</h2>
        <p>Teknikhögskolan, 2023-2025</p>
        <p>En bred utbildning inom mjukvaruutveckling med fokus på AI-teknologier.</p>
      </div>
    </div>
    
    <div className="right">
        <div className="education-item">
        <h2>Ekonomi</h2>
        <p>Vasagymnasiet, 2020-2023</p>
        <p>Grundläggande kunskaper inom ekonomi och företagande.</p>
      </div>
    </div>
  
  </div>

</div>
  );
};

export default Div2;
