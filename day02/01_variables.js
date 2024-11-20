const uid="amol01";

var fullname ="Amol Dnayaneshwar Pawar";
var email ="amolpawar001213@gmail.com"
var password ="12345";
var courscount =0;
var isLoggedInFromGoogle = false;
let accountstate;

console.log(uid);
console.log("fullname is :",fullname);
console.log(email);

console.log(`
    with Unique ID: ${uid}
    User is: ${fullname}
    email is: ${email}
    password is: ${password}

 `);

 console.table([ uid,fullname,email,password,courscount,isLoggedInFromGoogle,accountstate])