# Ethereum Calculator DApp

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [Contact](#contact)

## Introduction

Welcome to the Ethereum Calculator DApp! This decentralized application operates on the Ethereum test network, powered by Ganache as the local blockchain. With a user-friendly interface built on React.js, our calculator DApp allows you to perform basic arithmetic operations securely on the blockchain.

## Features

- **Decentralized Arithmetic:** Perform addition, multiplication, division, and subtraction on the Ethereum test network.
- **Local Blockchain (Ganache):** Utilize Ganache as the local blockchain for development and testing purposes.
- **Web3.js Integration:** Seamlessly connect the frontend with the Ethereum blockchain using Web3.js.
- **Smart Contract (Solidity):** The calculator functionality is implemented as a smart contract using Solidity.
- **User-Friendly Interface:** Enjoy a clean and intuitive interface for a seamless user experience.

## Technologies Used

- Ethereum Blockchain: For secure and transparent arithmetic operations.
- React.js: For a user-friendly and interactive front-end experience.
- Web3.js: To interact with the Ethereum blockchain and smart contracts.
- Solidity: For developing the smart contract that handles arithmetic operations.
- Ganache: For running the local blockchain during development and testing.

Apologies for the oversight. Here's the updated section for deploying the smart contract using Remix:

## Getting Started

Follow the steps below to set up and use the Ethereum Calculator DApp on your local machine.

### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your_username/your_repository.git
```

2. Navigate to the project directory:

```bash
cd your_repository
```

3. Install the required dependencies:

```bash
npm install
```

## How to Use

1. Deploy the smart contract using Remix:
   - Open [Remix IDE](https://remix.ethereum.org/).
   - Copy the smart contract code from `smart-contract/Calculator.sol`.
   - Deploy the contract on the Ethereum test network (e.g., Ropsten) through Remix.

2. Update the contract address in `src/App.js`:
   - Replace the `contractAddress` variable value with the deployed smart contract address.

3. Launch the application on your local server:

```bash
npm start
```

4. Open your web browser and navigate to `http://localhost:3000`.
5. Perform arithmetic operations using the Ethereum Calculator DApp.

## Contributing

I welcome contributions from the community! 

## Contact

For any inquiries or feedback, please reach out to us:

- Email: saishmirajkar0@gmail.com
- Discord: https://discord.com/users/saish7147 
- Twitter: https://twitter.com/saishmirajkar1
- GitHub: https://github.com/saishmirajkar

Thank you for using our Ethereum Calculator DApp! Enjoy secure and transparent arithmetic operations on the blockchain. Happy calculating! 🧮🚀
