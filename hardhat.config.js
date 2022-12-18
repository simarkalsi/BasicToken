require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();



/** @type import('hardhat/config').HardhatUserConfig */


const ALCHEMY_API_KEY = process.env.REACT_APP_RPC_URL;
const GOERLI_PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url:ALCHEMY_API_KEY,
      accounts:[GOERLI_PRIVATE_KEY]
    }
  }
};
