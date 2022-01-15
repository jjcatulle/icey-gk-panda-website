import web3 from "./web3";
import NFT from "./abis/MyNFT.json";
import Token from "./abis/MyToken.json";
import Farm from "./abis/NFTFarm.json";

const instance = (type = "NFT") => {
  switch (type) {
    case "TOKEN":
      return new web3.eth.Contract(Token.abi, Token.networks["137"].address);
    case "FARM":
      return new web3.eth.Contract(Farm.abi, Farm.networks["137"].address);
    default:
      return new web3.eth.Contract(NFT.abi, NFT.networks["137"].address);
  }
};

export default instance;
