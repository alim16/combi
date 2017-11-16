

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

 //const PayContract = new web3.eth.Contract(abi);
 var PayContract= new web3.eth.Contract(abi, '0xfe1e08f7231a66c8ae4b637b8cf73c6a31a6755b', {
    //from: '0x37c1010fded34fbfd28eb81a6360f2c1b9c3fec6', // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});
  
  // contract deploy address from node/truffle console 
  //const contractInstance = PayContract.at('0x1ec9c56dd80170aeeae97e9fb8902fd7b91ca78b');
  //const OWNER_ADDRESS = '0xd00483f5b45ea3ec1431d52567296a24e441627a' 
  const OWNER_ADDRESS = web3.eth.accounts[0] //!doesn't work
  
  //!!set to account[0]
  web3.eth.defaultAccount='0x37c1010fded34fbfd28eb81a6360f2c1b9c3fec6' //address to send from
 // console.log('user address is'+ web3.eth.defaultAccount)
  
  //works!
 // PayContract.methods.getOwnerAddress().call().then(function(x){console.log(x)})



PayContract.methods.payOwner(OWNER_ADDRESS, 200).send({from: '0xe2218fae4df20d73cd527cc969bf4fe5caaea245'})
.then(function(receipt){
    // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
    console.log(receipt)
});

PayContract.methods.getOwnerBalance().call().then(function(x){'contract owner balance is: '+console.log(x)})

}