
var Payer = artifacts.require("./Payer.sol")

module.exports = function(deployer) {
  //deployer.deploy(libContract)
  //deployer.link(libContract, MainContract)
  deployer.deploy(Payer)
};
