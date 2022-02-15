require("@nomiclabs/hardhat-waffle");
const projectId = "c0432fe9e4b84774b0855cef33db8af8"
const fs = require('fs') // this is file service which helps in reading from files
const privateKey = fs.readFileSync(".secret").toString()
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url : `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url : `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
