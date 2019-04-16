// String
const name1 = 'John';
const name2 = new String('John');
//console.log(name1);
//name2.name = 'Barly';
//console.log(name2);

if(name2==='John'){
  //console.log('Yes');
}else{
  //console.log('No');
}


// Number
const num1 = 5;
//console.log(num1);
const num2 = new Number(10);
//console.log(num2);


// Boolean
const bool1 = true;
//console.log(bool1);
const bool2 = new Boolean(true);
//console.log(bool2);



// Function
const getSum1 = function(x,y){
  return x+y;
}
//console.log(getSum1(5,6));

const getSum2 = new Function('x','y','return x+y');
//console.log(getSum2(5,6));



// Object
const obj1 = {name:'Sayed'};
const obj2 = new Object({name:'Rubel'});
//console.log(obj2);


// Array
const arr1 = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,5);
//console.log(arr2);




// Regular Expresion
const re1 = /\w+/;
const re2 = new RegExp('\\w+');
console.log(re1);
console.log(re2);