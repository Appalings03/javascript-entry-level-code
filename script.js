//Write code Here to export in the HTML

let balance = 100;
let stock = 50;
let price = 5;
let quantity = 8;

if(quantity <= stock){
    stock -= quantity;
    balance += price*quantity;
    console.log(balance, quantity);
}