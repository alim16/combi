const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
const abi = JSON.parse('[{"constant":false,"inputs":[],"name":"getOwnerAddress","outputs":[{"name":"ownerAddress","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"payOwner","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getOwnerBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}]')

  if (typeof web3 !== 'undefined') {
    console.log('web3 detected')
  } else {
    alert("no web3 detected");
  }


MyContract = web3.eth.contract(abi);

    //!!set to accounts[0]
  web3.eth.defaultAccount='0xd8e51fea15c3b6a36c57a0508f6c77f2a77032ec'

var contract = web3.eth.contract(abi).at('0xd11e939b9a69a61f6c5a1dec51edeadbac42598b');

 //set up listener for the Transfer Event
contract.Transfer().watch( (err, response) => { 
        //once the event has been detected, take actions as desired
         console.log("a value of: "+response.args._value+" has been sent")
});

