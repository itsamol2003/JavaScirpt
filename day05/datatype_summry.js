// Primitive

// 7 types :String,Number,Boolearn,null,undefined,Symbol,BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 1233342323232n;

//Reference (Non primitive)

//Array, Objects ,Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "amol",
  age: 21,
};

const myfunction = function () {
  console.log("hello world");
};

console.log(typeof bigNumber);
