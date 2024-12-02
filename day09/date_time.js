//dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreateDate = new Date(2024, 0, 1)
// let myCreateDate = new Date(2024, 0, 1, 5, 4)
// let myCreateDate = new Date(2024-0-1)
// let myCreateDate = new Date("2024-01-1")
console.log(myCreateDate.toLocaleString());

let mytimeSatmp = Date.now();

// console.log(mytimeSatmp);
// console.log(myCreateDate.gettime());
// console.log(Math.floor(Date.now()/100));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getday()} and the time`

newDate.toLocaleString("default", {
  weekday: "long",
});
