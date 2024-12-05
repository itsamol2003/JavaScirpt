// singleton
// object.create

//object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Amol",
  "full name": "amol pawar",
  [mySym]: "mykey1",
  age: 21,
  location: "pune",
  email: "amoldpawar71@gmail.com",
  isLoggedIn: false,
  lastloginDays: ["monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "amol2@gmail.com";
Object.freeze(JsUser);
JsUser.email = "amolpawar@gmail.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log("hello js user");
};
JsUser.greetingtwo = function(){
    console.log(`Hello js user,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());



