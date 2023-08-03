// SPDX-License-Identifier: MIT


pragma solidity ^0.8.0;

contract Calculator {
    
    uint public result;
    
    function add(uint x, uint y) public {
        result = x + y;
    }
    
    function subtract(uint x, uint y) public {
        result = x - y;
    }
    
    function multiply(uint x, uint y) public {
        result = x * y;
    }
    
    function divide(uint x, uint y) public {
        require(y != 0, "Cannot divide by zero");
        result = x / y;
    }
    
}
