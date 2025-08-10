import React from 'react';
import '../css/Div3.css';
import bild from '../images/temp-img.jpg';

const Div3 = () => {
  return (
    <div className='div3' id='div3'>
      <div className='divLeft'>
        <h1>Framtidens bilförsäljare</h1>
        
        <p>Jag söker min nästa spännande möjlighet i yrkeslivet och med mina goda kunskaper inom fordon, ekonomi, teknik och försäljning så anser jag att en tjänst som bilförsäljare hade passat mig perfekt.</p>
        <p>Under min gymnasieexamen lärde jag mig företagsekonomins grunder, både teoretiska vinstplaner och det praktiska säljandet. Jag har även inom mina 3 tidigare försäljningsjobb utvidgat mina kunskaper inom kundrelationer och ofta fått beröm av min förmåga att känna av kunden och bidra med värde.</p>
        <p>Mina tekniska kunskaper är i framkant, tack vare att jag har en nyfikenhet och en tro på att man kan skapa otroliga saker med digitala medel i dagens värld. Jag har jobbat på ett tech-startup i 5 månader där jag utvecklade funktioner från ide och värdeplan till färdig kundprodukt med positiv feedback. Även här utvecklade jag mina kunskaper att förstå kunden och ge ett resultat som bidrog med värde både för mitt och kundens företag.</p>
        <p>Fordon är något som krävs i ett aktivt liv idag, och valet på fordon är viktigt. Jag har köpt och sålt flera bilar privat, även reparerat mina egna bilar vid behov och har byggt ut kunskaper om vad man behöver i en bilaffär. Man vill kunna lita på att bilen gör det den ska, att bilen ger dig de känslor du förväntar dig, varesig det är spänning eller säkerhet. Och att förmedla det i en annons och på plats till en potentiell köpare är någon jag tycker är roligt och givande.</p>
      </div>
      <div className='divRight'>
        <img src={bild} alt="generic carsalesman"></img>
      </div>
    </div>
  );
};

export default Div3;
