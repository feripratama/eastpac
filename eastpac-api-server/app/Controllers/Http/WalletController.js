'use strict'

const fs = require('fs');
const Web3 = require("web3");
const Util   = require("util");

const Ethers = require("ethers");
const utils  = require("ethers-utils")
const TX = require("ethereumjs-tx");


const mainnet = 'https://rinkeby.etherscan.io/';/*'https://rinkeby.infura.io/v3/8fc341b9027b466fb18c0c92b2d6a67c';//*/
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


  async SendTransaction1({request, response})
  {
      let privateKey = request.body.pk;
      let  wallet = new Ethers.Wallet(privateKey);

      //let prov = Ethers.getDefaultProvider()
      let prov = new Ethers.providers.EtherscanProvider('rinkeby');
      let balance = ( await prov.getBalance(wallet.address));
      let gassPrice = (await prov.getGasPrice());
      let transcount = (await prov.getTransactionCount(wallet.address));

       let transaction = {
         nonce: transcount,
         gasLimit: 21000,
         gasPrice: gassPrice,

         to: request.body.to,
         value: utils.parseEther(request.body.ethvalue),

         data: "0x",

//         // This ensures the transaction cannot be replayed on different networks
         chainId: Ethers.utils.getNetwork('rinkeby').chainId
     }
// console.log(Ethers.utils.getNetwork('rinkeby').chainId);
     let signPromise =  await wallet.sign(transaction)

     let result = await prov.sendTransaction(signPromise)
     console.log(Util.inspect(result));
    return response.json('hahaha');
  }

  async SendTX({request, response}) {

      let privateKey = request.body.pk;
      let pKey = new Buffer.from(privateKey, 'hex');
      console.log(pKey);
      //let  wallet = new Ethers.Wallet(privateKey);

      var authorized_address = '0x09456d75377F56692D9C57d679E2d5108AD96110';
      var contract_address = '0xff2463e6c45b6263638168c54e8049842dfb73df'
      let abi = JSON.parse('[{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]');
      var myContract = new web3.eth.Contract(abi, contract_address,{from:authorized_address, gasPrice:1});
      var target = '0xb2a122ed4A1903fe3FF587A13Cb8A95a052851aA';

      var trx = myContract.methods.transfer(target,1).encodeABI();
      console.log(Util.inspect(trx));
      let prov = new Ethers.providers.EtherscanProvider('rinkeby');
       var txOpt = {
         from:authorized_address,
         nonce:"0x0",

         gasLimit: 3000000,
         //gasPrice: 1,
         to:target,
         data: trx,
         //value: web3.utils.toWei('1','ether'), //web3.utils.toWei('1000','wei'),
         //chainId: Ethers.utils.getNetwork('rinkeby').chainId


       }

       var st = await web3.eth.accounts.signTransaction(txOpt,privateKey);
       var sb = await web3.eth.sendSignedTransaction(st.rawTransaction);
      //  console.log(Util.inspect(sb));




      //var trx = myContract.methods.transfer(target, 10);
      //await trx.send({});
      //console.log(Util.inspect(trx));
      // wallet.Contract = myContract;

      //
      // var tx = {
      //   value:'0x0', from:authorized_address, to :target,
      //   data : myContract.methods.transfer(target,2).encodeABI()
      // }
      // let privateKey =  new Buffer.from(request.body.pk,'hex');
      // var t = new TX(tx);
      // t.sign(privateKey);
      // var st = t.serialize();

      // var bt = await web3.eth.SendR.sendTransaction('0x' + st.toString('hex'));
      response.json('asdfadf');


  }
}

module.exports = WalletController
