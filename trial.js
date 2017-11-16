var async = require('async')

var fs=require('fs') 

var arr = [
  function f1(callback) {
    console.log('creating file1')
    //fs.open('./file1.txt', 'w',function(){})
    setTimeout(function(){fs.open('./file1.txt', 'w',function(){})},2000)
    callback(null, 'f1')
  },
  function f2(callback) {
    console.log('creating file2')
    setTimeout(function(){fs.open('./file2.txt', 'w',function(){})},1000)
    callback(null, 'f2')
  }
]

var arr2 = [
  function f3(callback) {
    console.log('deleting file1')
    fs.unlink('./file1.txt',function(){})
    callback(null, 'f3')
  },
  function f4(callback) {
    console.log('deleting file2')
        fs.unlink('./file2.txt',function(){})
    //setTimeout(function(){fs.unlink('./file2.txt',function(){})},2000)
    callback(null, 'f4')
  }
]

 async.parallel(arr, function(err,result){console.log(result)})
 setTimeout(
  function(){async.parallel(arr2, function(err,result){console.log(result)})},5000)
 setTimeout(
  function(){async.parallel(arr, function(err,result){console.log(result)})},5000)



  //fs.unlink('./file1.txt',function(){})
