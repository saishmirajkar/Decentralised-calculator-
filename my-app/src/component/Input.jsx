import React, { useState, useEffect } from 'react';



const Input = ({ sendDataToParent }) => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);




  const handleInputChange = (e) => {
    if (e.target.id === 'value1') {
      setValue1(parseInt(e.target.value));
    } 
    else if (e.target.id === 'value2') {
      setValue2(parseInt(e.target.value));
    }
  }
   useEffect ( ()=> {
    sendDataToParent(value1, value2);
  
  console.log ('Variable 1:', value1); 
  console.log ('Variable 2:', value2);
    },[value1, value2]);

  return (
    <div>
      <p style={{ color: 'whitesmoke', fontFamily: 'Futura', textAlign: 'center' }}>Please enter your two numbers</p>
      <div style={{ display: 'flex', color: 'white', position: 'relative', justifyContent: 'space-evenly' }}>
        <input type='number' placeholder='Number 1' id='value1' style={{ textAlign: 'center' }} onChange={handleInputChange} />
        <input type='number' placeholder='Number 2' id='value2' style={{ textAlign: 'center' }} onChange={handleInputChange} />
      </div>
      
    </div>
  );
};

export default Input;
