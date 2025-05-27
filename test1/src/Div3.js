import React from 'react';

const Div3 = () => {
  return (
    <div
      id="div3"
      style={{
        width: '90vw',
        height: '70vh',
        backgroundColor: '#f8b400',
        margin: '100px auto', // margin för att inte hamna bakom navbar
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem'
      }}
    >
      Jag är Div 3
    </div>
  );
};

export default Div3;
