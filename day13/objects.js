// const tinderUser = new Objects()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    fulname: {
        Userfullname: {
            firstname: "amol",
            latname: "pawar"
        }
    }
}

console.log(regularUser.fulname.firstname);

const obj1 ={1: "a",6: "b"}
const obj2 ={3: "a",4: "b"}
const obj4 ={2: "a",5: "b"}

//  const obj3 = {obj1, obj2}
//  const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 ={...obj1, ...obj2}
//  console.log(obj3);

const users =[
    {
        id:1,
        email: "a@gmail.com"
    },
    {
        id:1,
        email: "a@gmail.com"
    },
    {
        id:1,
        email: "a@gmail.com"
    },

]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnproperty('isLoggedIn'));








 

