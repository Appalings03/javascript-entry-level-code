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