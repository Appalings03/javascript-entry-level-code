//using the script in html 
//also work in the index.js if put in a html file
//alert('Hello World')
//variable declaration
let age;
//variable assignment
age = 50;
console.log(age)
let name = 'Pilot'
console.log(name)
let hasExperience = true;
console.log(hasExperience)
// number
let examResult = 50.5;
console.log(examResult);

// change the value of a variable by reassigning
examResult = 100;
console.log(examResult);

// not recommended
examResult = 'Some Text';
console.log(examResult);

// undefined variable
let something;
console.log(something);

//addition
let a = 1 + 1;
console.log(a);

let b = 10;
let c = a + b;
console.log(c);

b += 1;
console.log(b)

//soustraction
let x = 10 - 5;
console.log(x);

let y =  b + x;
console.log(y);

x -= 1;
console.log(x)

//multiplication

let unitPrice = 2;
let units = 10;
let total = unitPrice * units;
console.log(total)

//division
let n = 10;
let result = n / 2;

// modulus
let r = 5 % 2;
console.log(r);

// Challenge
let baseWeight = 10000;
let foodweight = 100;
let passengersWeight = 10;

let fuelUnitWeight = 2; // weight of 1 unit of fuel
let fuelUnits = 100; // total units of fuel we need

let fuelWeight = fuelUnitWeight * fuelUnits

let totalWeight = baseWeight + foodweight + passengersWeight + fuelWeight

console.log(totalWeight)

// condition
let direction = 'diagonal';

if(direction == 'left'){
    console.log('red planet');
}else if(direction == 'right'){
    console.log('purple planet');
}else if(direction == 'backwards'){
    console.log('back home');
}else{
    console.log('ship crash')
}

//comparaison operators

let item = 'window';

// checking inequality
if(item != 'engine') {
  console.log('not engine!');
}

let score = 5;

if(score >= 60) {
  console.log('pass');
}
else if(score < 10) {
  console.log('meet the teacher');
}
else {
    console.log('not pass');
}

// store comparison result in a variable
let isEngine = item == 'engine';
console.log(isEngine);

if(isEngine) {
  console.log('item is engine');
}

// Challenge
let balance = 100;
let itemPrice = 10;

// 1. check balance
// 2. if they buy, update balance


// solution
if(balance >= itemPrice) {
  // update balance
  //balance = balance - itemPrice;
  balance -= itemPrice;
  console.log('item purchased');
  console.log(balance);
}
else {
  console.log('not enough balance');
}

// challenge comparaison
let distance = 150;
let fuel = 100
let distanceCondition = distance <=200 && distance >= 100;
let isEngineFunctionning = true;
if (!isEngineFunctionning || distance > 200){
    console.log("won't make it"); 
}

else if (distanceCondition && fuel >= 100){
    console.log("All Good");
}

else if (distance < 100 && fuel >= 25){
    console.log("All Good");
}

// function
function  houtToMinutes(hours){
  let result =hours*60;
  console.log(result);
  return result;
}

let a1 = houtToMinutes(10);
let b1 = houtToMinutes(20);

let dayToHour = function (days) {
  return days*24;
};

let c1 = dayToHour(1);
console.log(c);