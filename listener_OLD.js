const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
const abi = JSON.parse('[{"constant":false,"inputs":[],"name":"getOwnerAddress","outputs":[{"name":"ownerAddress","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"payOwner","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getOwnerBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}]')

var sys = require('sys')
var exec = require('child_process').exec


  if (typeof web3 !== 'undefined') {
    console.log('web3 detected')
  } else {
    alert("no web3 detected");
  }
  
  function puts(err,stdout,stderr) {sys.puts(stdout)}


MyContract = web3.eth.contract(abi);

    //!!set to accounts[0]
  web3.eth.defaultAccount='0x971a01b61d586594d13d8608f2449d576ec2a931'

var contract = web3.eth.contract(abi).at('0xa2fe1b197d0ca30d8acdc869c8381304306fad0e');

 //set up listener for the Transfer Event
contract.Transfer().watch( (err, response) => { 
        //once the event has been detected, take actions as desired
         console.log("a value of: "+response.args._value+" has been sent")
         exec("ls -al", puts)
});

