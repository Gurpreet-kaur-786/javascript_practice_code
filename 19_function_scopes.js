// Global and local scope
c=300;
{
const a = 10;
let b =20;
var c =40;
}
//console.log(a);
//console.log(b);

console.log(c);
//the variable decared with let and const are local to the scope whereas var is global as well as local to the scope , so it create problem to the user