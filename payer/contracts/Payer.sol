pragma solidity ^0.4.4;

contract Payer {
    mapping (address => uint) balances;
   

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    function Payer() {
    
         balances[tx.origin] = 1000;
    }


    function getOwnerBalance () returns (uint balance) {
        return balances[tx.origin];
    }

    function getOwnerAddress () returns (address ownerAddress) {
         
        return tx.origin;
    }

    function payOwner (address receiver, uint amount) returns (bool result) {
            if (balances[msg.sender]<amount) 
                return false;

            balances[msg.sender] -= amount;
            balances[receiver] += amount;

            Transfer(msg.sender, receiver, amount);
            return true;
    }

}