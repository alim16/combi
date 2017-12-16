var gpio = require('rpi-gpio') 
// var sleep = require('sleep').msleep 
async = require('async')

gpio.setMode('mode_bcm')

var IN1_pin = 23 //coil A1
var IN2_pin = 24 //coil A2
var IN3_pin =16 //coil B1
var IN4_pin = 20 //coil B2


var delay = 50 //milliseconds
var max = 100
//var max = process.argv[2]
var count = 0

var seq = [[0,1,1,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]]
//var seq = [[0,1,1,0],[0,0,0,0],[1,0,0,1],[0,0,0,0]]
//var seq =   [[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]]


var funcs = [
    function(callback) {
        gpio.setup(IN1_pin, gpio.DIR_OUT, callback)
    },
    function(callback) {
        gpio.setup(IN2_pin, gpio.DIR_OUT, callback)
    },
    function(callback) {
        gpio.setup(IN3_pin, gpio.DIR_OUT, callback)
    },
    function(callback) {
	gpio.setup(IN4_pin, gpio.DIR_OUT, callback)
    }
]



async.parallel(
    funcs
, function(err, results) {
   console.log('output pins set')
    start()
   
});


function start(){
	
	var currentSeq=seq[count%4]
	console.log('count:'+count+' count%4:' + count%4)
 

	if(count >= max) {
		closePins()
		return
	}

	setTimeout(function(){
		writeValues(currentSeq[0],currentSeq[1],currentSeq[2],currentSeq[3], pinsOff);
		count += 1;
	}, delay)
}

function pinsOff(){
	 console.log('writing 0s to all pins')
            gpio.write(IN1_pin, 0)
            gpio.write(IN2_pin, 0)
            gpio.write(IN3_pin, 0)
            gpio.write(IN4_pin, 0, start)     
}


function closePins () {
            gpio.destroy(function() {
                console.log('Closed pins, now exit');
            })
}

function writeValues(v1,v2,v3,v4, cb) {
            console.log('writing sequence:'+v1+v2+v3+v4)
            gpio.write(IN1_pin, v1)
            gpio.write(IN2_pin, v2)
            gpio.write(IN3_pin, v3)
            gpio.write(IN4_pin, v4, cb)           
};
