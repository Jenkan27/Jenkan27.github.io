import React from 'react';
import '../css/Div2.css';
import bild from '../images/temp-img.jpg';

const Div2 = () => {
  return (
    <div className='div2' id='div2'>
      <div className='divLeft'>
        <h1>Framtidens bilförsäljare</h1>
        
        <p>Jag söker min nästa spännande möjlighet i yrkeslivet och med mina goda kunskaper inom fordon, ekonomi, teknik och försäljning så anser jag att en tjänst som bilförsäljare hade passat mig perfekt.</p>
        <p>Redan under gymnasiet fördjupade jag mig i företagsekonomi och lärde mig både teoretiska vinststrategier och praktiskt försäljningsarbete. Genom tre tidigare försäljningsjobb har jag utvecklat en stark känsla för kundrelationer och fått beröm för min förmåga att förstå kundens behov och skapa mervärde.</p>
        <p>Mina tekniska kunskaper är i framkant, tack vare att jag har en nyfikenhet och en tro på att man kan skapa otroliga saker med digitala medel i dagens värld. Jag har jobbat på ett tech-startup i 5 månader där jag utvecklade funktioner från idé och värdeplan till färdig kundprodukt med positiv feedback. Även här utvecklade jag mina kunskaper att förstå kunden och ge ett resultat som bidrog med värde både för mitt och kundens företag.</p>
        <p>Fordon har alltid varit ett personligt intresse. Jag har både köpt och sålt bilar privat, utfört enklare reparationer och lärt mig vad som krävs för en trygg och lyckad bilaffär. För mig handlar det inte bara om att sälja en bil, utan om att förmedla känslan – vare sig det handlar om spänning, komfort eller säkerhet – och göra affären till en positiv upplevelse för kunden.</p> 
      </div>
      <div className='divRight'>
        <img src={bild} alt="generic carsalesman"></img>
      </div>
    </div>
  );
};

export default Div2;
