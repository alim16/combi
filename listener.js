const Web3 = require('web3')
var exec = require('ssh-exec')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
const abi = JSON.parse('[{"constant":false,"inputs":[],"name":"getOwnerAddress","outputs":[{"name":"ownerAddress","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"payOwner","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getOwnerBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}]')
const piAddress = '192.168.43.178'
const remoteScriptName = 'WORKING_STEPPER.js'

/*******!NOTE the ssh part works without password because a key is setup on the raspberry pi beforehand**/

const contractAddress= '0x32b81d7e21bcc7b761e13cad8767293ac68b8e33'

  if (typeof web3 !== 'undefined') {
    console.log('web3 detected')
  } else {
    alert("no web3 detected");
  }

MyContract = web3.eth.contract(abi);

    //!!set to accounts[0]
  web3.eth.defaultAccount='0x24157709d1b19701a77fde6e8f4ad3ca0258286f'

var contract = web3.eth.contract(abi).at(contractAddress);

 //set up listener for the Transfer Event
contract.Transfer().watch( (err, response) => { 
        //once the event has been detected, call stepper motor script with value from input field
         console.log("a value of: "+response.args._value+" has been sent")
         exec(`node ${remoteScriptName} ${response.args._value}`, `pi@${piAddress}`).pipe(process.stdout)
});

