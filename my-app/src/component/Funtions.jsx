import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Funtions = ({ onBValue1Change }) => {
  const [bValue1, setBvalue1] = useState("none");
  
  Funtions.propTypes = {
    onBValue1Change: PropTypes.func.isRequired,
  };
  
  
  
  useEffect ( ()=> {
    console.log(bValue1); 
    },[bValue1])

    const handleAdditionClick = () => {
      onBValue1Change("add");
    };
    
    const handleSubtractionClick = () => {
      onBValue1Change("sub");
    };
    
    const handleDivisionClick = async () => {
      await onBValue1Change("div");
    };
    
    const handleMultiClick = () => {
      onBValue1Change("multi");
    };
    

  return (
    <div style={{margin : "20px"}}>
      <p style={{color : 'whitesmoke', fontFamily : "Futura",  textAlign : "center"}}>
        let us know your calculating function
      </p>
      <div style={{display : "flex", justifyContent : 'space-evenly'}}>
        <button
          style={{
            cursor : 'pointer',
            padding :"14px",
            backgroundColor : "#1A2E43",
            border : "0px",
            borderRadius : "10px",
            color : "whitesmoke"
          }}
          onClick={handleAdditionClick}
        >
          ADDITION
        </button>
        <button
          style={{
            cursor : 'pointer',
            padding :"14px",
            backgroundColor : "#1A2E43",
            border : "0px",
            borderRadius : "10px",
            color : "whitesmoke"
          }}
          onClick={handleSubtractionClick}
        >
          SUBTRACTION
        </button>
        <button
          style={{
            cursor : 'pointer',
            padding :"14px",
            backgroundColor : "#1A2E43",
            border : "0px",
            borderRadius : "10px",
            color : "whitesmoke"
          }}
          onClick={handleMultiClick}
        >
          MULTIPLICATION
        </button>
        <button
          style={{
            cursor : 'pointer',
            padding :"14px",
            backgroundColor : "#1A2E43",
            border : "0px",
            borderRadius : "10px",
            color : "whitesmoke"
          }}
          onClick={handleDivisionClick}
        >
          DIVISION
        </button>
      </div>
    </div>
  );
}

export default Funtions;
