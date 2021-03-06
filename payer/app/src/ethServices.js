
export const payEth = (amount) =>{
    const Web3 = require('web3')
  const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
  const abi = JSON.parse('[{"constant":false,"inputs":[],"name":"getOwnerAddress","outputs":[{"name":"ownerAddress","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"payOwner","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getOwnerBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}]')
 console.log('test')
  if (typeof web3 !== 'undefined') {
    console.log('web3 detected')
  } else {
    alert("no web3 detected");
  }

  
 //set to accs[1]
  const OWNER_ADDRESS='0xfa33f572a870ea68505704dfade03c2318797b44'

    //!!set to accounts[0]
  web3.eth.defaultAccount='0x24157709d1b19701a77fde6e8f4ad3ca0258286f'

 var PayContract= new web3.eth.Contract(abi, '0x32b81d7e21bcc7b761e13cad8767293ac68b8e33', {
    from: OWNER_ADDRESS, // default from address //owner_address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});
  
console.log(PayContract)

console.log('paying: '+amount +'| owner address is:' + OWNER_ADDRESS)
//!set from to accounts[2]
PayContract.methods.payOwner(OWNER_ADDRESS, amount).send({from:  web3.eth.defaultAccount})
.then(function(receipt){
    // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
    console.log(receipt)
});

PayContract.methods.getOwnerBalance().call().then(function(x){console.log('contract owner balance is: '+x)})

}