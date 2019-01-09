'use strict'

const Web3 = require("web3");
const Util   = require("util");
const Ethers = require("ethers");

const mainnet = 'https://rinkeby.etherscan.io/';
const web3 = new Web3(new Web3.providers.HttpProvider(mainnet));

/*
  This will create a wallet using
*/
class WalletController {
  async CreateWallet({request, response}) {
      let randomWallet = await Ethers.Wallet.createRandom();
      let password = request.body.upw;
      let encrypted = await randomWallet.encrypt(password);
      let jsonresult = JSON.parse(encrypted);
      let obj = {};
      for(var a in  jsonresult)
      {
         if (a != 'x-ethers')
         {
           obj[a] = jsonresult[a];
         }
      }

      let filename = jsonresult['x-ethers'].gethFilename;
      let fcontent = JSON.stringify(obj);
      let keyPhrase = {
        KeyFileName : filename,
        KeyFileContent : fcontent,
        Address : jsonresult.address,
        PrivateKey : randomWallet.privateKey,
        Mnemonic : randomWallet.mnemonic,
        Path : randomWallet.path,
        WalletAddress : randomWallet.address
      }
      console.log(Util.inspect(randomWallet.mnemonic));
      return response.json(keyPhrase);
  }
}

module.exports = WalletController
