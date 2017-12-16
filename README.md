# combi

An example project to try combination of a smart contract and hardware
the basic idea being to enter a value into field -> which calls a transaction function on a smart contract
-> the contract function triggers an event -> which a "listener" running seperately picks up
-> and finally the listener makes a call to a stepper motor script on a raspberry pi on the same 
network via SSH, which causes the motor to spin
