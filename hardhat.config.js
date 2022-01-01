require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const { PROJECTID, PRIVATE_KEY } = process.env;

module.exports = {
  networks:{
    hardhat:{
      chainId: 1337,
    },
    // mumbai:{
    //   url:`https://polygon-mumbai.g.alchemy.com/v2/${PROJECTID}`,
    //   accounts=['`0x${PRIVATE_KEY}`']
    // },
    // mainnet:{
    //   url:`https://polygon-mainnet.g.alchemy.com/v2/${PROJECTID}`,
    //   accounts=[`0x${PRIVATE_KEY}`]
    // }
  },
  solidity: "0.8.4",
};
