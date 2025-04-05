const mySym=Symbol("key1")

const obj={
    name:"bikram",
    age:22,
    class: "msc",
    [mySym]:1,
    email:"bikram@gmail.com",
    IsLoggedIn:false,
    days: ["Monday","friday"]
}
// console.log(obj.email)
// console.log(obj["email"]);

console.log(obj.days);
// console.log(obj[mySym]);

// obj.email= "bk@gmail.com"
// Object.freeze(obj)
// obj.email = "bikramjeet@gmail.com"
// console.log(obj.email);

// obj.sum = function()   //here sum is the name of the function which can be called directly from output statement, in this case function is a keyword
// {
//     let a=10;
//     let b=2;
//     console.log(a+b);
    
// }
// console.log(obj.sum());

// obj.ref = function()
// {
//     console.log(`Hello, ${this.name}`); //this keyword will call the reference of the object, without this the value will not be printed
// }
// console.log(obj.ref());

