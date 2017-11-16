//using example from
//https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2




function payOwner() {
  const web3 = new document.Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
  const abi = JSON.parse('[{"constant":false,"inputs":[],"name":"getOwnerAddress","outputs":[{"name":"ownerAddress","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"payOwner","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getOwnerBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}]')

  if (typeof web3 !== 'undefined') {
    // You have a web3 browser! Continue below!
    //startApp(web3);
    console.log('web3 detected')
  } else {
    alert("no web3 detected");
  }


  const VotingContract = web3.eth.contract(abi);
  // contract deploy address from node/truffle console 
  const contractInstance = VotingContract.at('0x3b0f21539da0bb07556c4ea3fb160f9488ac4068');
  //const OWNER_ADDRESS = '0xd00483f5b45ea3ec1431d52567296a24e441627a' 
  const OWNER_ADDRESS = web3.eth.accounts[0]
  web3.eth.defaultAccount="0x6c0a733bbefcac961270d111bfdd45102613212b" //address to send from
  
  console.log(OWNER_ADDRESS)
  contractInstance.payOwner(OWNER_ADDRESS, 200);
}

$(document).ready(function() {
  //something to do on page load
});
