# combi

An example project to try combination of a smart contract and hardware
the basic idea being to enter a value into field -> which calls a transaction function on a smart contract
-> the contract function triggers an event -> which a "listener" running seperately picks up
-> and finally the listener makes a call to a stepper motor script on a raspberry pi on the same 
network via SSH, which causes the motor to spin



*NOTES*
- the file named "raspi_StepperMotorScript.js" needs to be on the raspberry pi and
renamed to match the one being executed in the listener.js via ssh

-a circuit diagram for the raspi and stepper motor + h-bridge is to be added later

-after deploying the contract to a blockchain network the following files need to be updated
    -ethservices.js (owner_address,defaultAccount and contract address)
    -listener.js(defaultAccount and contract address, raspi IP address)
