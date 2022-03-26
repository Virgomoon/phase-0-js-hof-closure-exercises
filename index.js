//const _=require('lodash')

function forEach(arr, cb) {
  for (let i =0; i < arr.length; i++) {
    cb(arr[i],i,arr);
  }
}

function map(arr, cb) {
  const newArr = [];
  for(let i =0; i<arr.length; i++) {
    newArr.push(cb(arr[i]))
  }
  return newArr
}

function filter(arr, cb) {
  const newArr = [];
  for(const i of arr) {
    if(cb(arr[i]) === true){
      newArr.push(arr[i])
    }
  }
  return newArr;
}

/*function every(arr, cb) {

  for(let i = 0; i < arr.length; i++){
    let result = true;
    if(cb(arr[i]) === false){
     
      result = false;
    }
    return result;
    } 
    
  }
*/
function every(arr, cb) {
  const newArr = []
  const oldArr = arr
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i]) === true) {
     newArr.push(arr[i]) 
    }
  }

  if(newArr.length === oldArr.length) {
    return true
  }else {
    return false
  }
}

function some(arr, cb) {
  const anyTrue = [];
  for(i = 0; i < arr.length; i++){
    if(cb(arr[i]) === true) {
      anyTrue.push(arr[i])
    }
  }
  if(anyTrue[0]){
    return true
  }else {
    return false
  }
  
}

function majority(arr, cb) {
  const numOfTrue = [];
  const numOfOriginal = arr;
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i]) === true){
      numOfTrue.push(arr[i])
    }
  }
  if(numOfTrue.length > numOfOriginal.length/2) {
    return true
  } else if (numOfTrue.length < numOfOriginal.length/2){
    return false
  }
}

function once(cb) {
  let ran = false, memo;
  return function(){
    if (ran) return memo;
    ran = true;
    memo = cb.apply(this,arguments);
    func = null;
    return memo;
  };
};

function groupBy(arr,cb) {
  const obj = {};
  for (item of arr){
    let key = cb(item)
    if(obj[key]) {
      obj[key].push(item)
    }else{
      obj[key] = [item]
    }

  }
  
  return obj;
}

function arrayToObject(arr, cb) {
  let obj = {}
  for(item of arr){
    obj[item] = cb(item)
  }

  return obj;
}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
