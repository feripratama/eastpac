'use strict'

const Web3 = require("web3");
const Util   = require("util");

const Ethers = require("ethers");
const utils  = require("ethers-utils")


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


  async SendTransaction({request, response})
  {
      let privateKey = request.body.pk;
      let  wallet = new Ethers.Wallet(privateKey);
      console.log(wallet.address);
      let transaction = {
        nonce: 0,
        gasLimit: 21000,
        gasPrice: utils.bigNumberify("20000000000"),

        to: request.body.to,
        // ... or supports ENS names
        // to: "ricmoo.firefly.eth",

        value: utils.parseEther("0.001"),
        data: "0x",

        // This ensures the transaction cannot be replayed on different networks
        //chainId: Ethers.utils.getNetwork('homestead').chainId
    }

    let signPromise =  await wallet.sign(transaction)
    let provider = Ethers.getDefaultProvider()
    let result = await provider.sendTransaction(signPromise)
    console.log(Util.inspect(result));
    return response.json('hahaha');
  }
}

module.exports = WalletController
