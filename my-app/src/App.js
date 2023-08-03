import Navbar from './component /Navbar';
import Input from './component /Input';
import Funtions from './component /Funtions';
import './App.css';
import Calculator from "./contracts/Calculator.json"
import Web3 from "web3" ; 
import React, { useState, useEffect } from 'react';



function App() {
  const [state,setState] = useState ( {web3 : null, contract : null}); 
  const [tempData,setTempData] = useState (); 
 // const [bValue1, setBValue1] = useState("none");
  const [variable1, setVariable1] = useState('');
  const [variable2, setVariable2] = useState('');
  
  
  
  
  useEffect ( ()=>  {
    const provider = new Web3.providers.HttpProvider ( "HTTP://127.0.0.1:7545")
    provider && template (); 

    async function template(){
    const web3 = new Web3(provider);
    const network_id = await web3.eth.net.getId ();  
    const deployedNetworks = Calculator.networks[network_id]
    const contract = new web3.eth.Contract (Calculator.abi, deployedNetworks.address); 
    console.log (contract); 
    setState ( { web3: web3, contract : contract } )
  }

  }, [])

  
  const handleDataFromChild = (data1, data2) => {
    // Set the received variables in the parent component's state
    setVariable1(data1);
    setVariable2(data2);
  };



  const handleBValue1Change = (newVlave) => {
    if(newVlave === "add") {
     writeDataForADD (); 
    }
    else if( newVlave === "sub") {
     writeDataForSub ()
    }
    else if (newVlave === "div") {
     writeDataFordiv()
 
    }
    else if (newVlave === "multi") {
     writeDataFormulti ()
    }
 
   };



  async function writeDataForADD () {
   
      const { contract } = state;
   
      await contract.methods
        .add(variable1,variable2)
        .send({ from: "0xAE78EAaEE800eE760D0B13f9d6a0dfF9cEe08646" });
      window.location.reload();
  
}



   async function writeDataForSub () {
    const { contract } = state;
   
    await contract.methods
      .subtract(variable1,variable2)
      .send({ from: "0xAE78EAaEE800eE760D0B13f9d6a0dfF9cEe08646" });
    window.location.reload();
   }



   async function writeDataFormulti () {
    const { contract } = state;
   
    await contract.methods
      .multiply(variable1,variable2)
      .send({ from: "0xAE78EAaEE800eE760D0B13f9d6a0dfF9cEe08646" });
    window.location.reload();
   }



   async function writeDataFordiv() {
    const { contract } = state;
   
    await contract.methods
      .divide(variable1,variable2)
      .send({ from: "0xAE78EAaEE800eE760D0B13f9d6a0dfF9cEe08646" });
    window.location.reload();
   }


   
  useEffect ( ()=> {
    const {contract} = state; 
   

    async function result() {
      try {
        const data = await contract.methods.result().call();
        setTempData(parseInt(data));
        console.log(data);
      } catch (error) {
        console.log("Error fetching result:", error);
        // Handle the error as needed
      }
    }

    contract && result (); 
  }) 

 

  useEffect(() => {
    const { contract } = state;
    async function readData() {
      const data = await contract.methods.result().call();
      setTempData(data);
    }
    contract && readData();
  }, [state]);
  



  
  return (
    <div className="App">
       <Navbar />
       <Input sendDataToParent={handleDataFromChild}/>
         <Funtions onBValue1Change={handleBValue1Change} />
       <p style={ {color : "white",  textAlign : "center"}}>This is the result :{tempData} </p>

    </div>
  );
}

export default App;
//0x34553042Ce8eb453E119A0073328262EB9383360
