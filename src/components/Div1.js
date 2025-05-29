import React from 'react';
import '../css/Div1.css';
import profilbild from '../images/profilbild.JPG';

const Div1 = () => {
  return (
    <div className='div1' id='div1'>
      <div className='divLeft'>
        <img src={profilbild} alt="bild på jens holm"></img>
        <h4>Jens Holm</h4>
        <p>Nyfiken, jobbsökande</p>
        <p>Högskoleexamen inom Mjukaruutveckling</p>
        <p>Gymnasieexamen inom Ekonomi</p>
      </div>
      <div className='divRight'>
        <h1>Hej!</h1>
        <p> Skrolla eller använd navigeringsmenyn för att läsa mer om mina avsnitt.</p>
      </div>
    </div>
  );
};

export default Div1;
