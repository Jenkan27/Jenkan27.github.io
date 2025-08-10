import React from 'react';
import '../css/Div1.css';
import profilbild from '../images/profilbild3.jpg';
import { scrollToSection } from '../utils/scrollUtils';

const Div1 = () => {
  return (
    <div className='div1' id='div1'>
      <div className='divLeft'>
        <img src={profilbild} alt="bild på jens holm"></img>
        <p>Nyfiken, jobbsökande</p>
        <p>Högskoleexamen inom Mjukvaruutveckling</p>
        <p>Gymnasieexamen inom Ekonomi</p>
      </div>
      <div className='divRight'>
        <h1>Hej!</h1>
        
        <p>Detta är min personliga hemsida där jag presenterar mig och uppvisar vad jag har åstadkommit. Jag söker just nu min nästa spännande utmaning inom mitt yrkesliv. Som person är jag intresserad av vad som får världen att ticka, jag håller mig ständigt uppdaterad inom miljöfrågor, ekonomiomständigheter och teknikvärldens utveckling.</p>
        <p>Jag värderar att göra skillnad med det jag gör, antingen för mig själv, klimatet eller människorna runtomkring mig. Ett aktuellt ämne som jag intresserar mig lite extra i är energiomställningen som Sverige just nu genomgår, vilket i första syn kanske inte låter så spännande men när man börjar forska i vad som faktiskt behöver ske är det många tekniska framsteg och sociala lösningar som är i verket och det gör ämnet till en mycket spännande utmaning för vårat avlånga land.</p>
        <p>Mina avslutade utbildningar innehåller min breda examen från Teknikhögskolan med titeln "Pythonutvecklare inriktning AI". Samt min gymnasieexamen inom ekonomi.
          <span className='readMoreLink' onClick={() => scrollToSection('div3')}>
            Läs mer här
          </span>
         </p>
        <p>Min framtid är obestämd, vilket jag ser positivt på. Jag är hoppfull emot vad som mig väntar! Kanske har du nästa spännande möjlighet för mig? Hör gärna av dig via mina kontaktkanaler som du hittar i menyn ovan.</p>
      </div>
    </div>
  );
};

export default Div1;
