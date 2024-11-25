// stack (Primitive),heap(non-primitive)

let myname = "amolpawar"

let anothername = myname
anothername = "ramlalla"

console.log(anothername);
console.log(myname);

let userone ={
    email: "user@google.com",
    upi:"user@ybl"
}

let usetwo = userone

usetwo.email ="amol@goole.com"

console.log(userone.email)
console.log(usetwo.email)
