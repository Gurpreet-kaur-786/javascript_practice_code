const obj1 =
{
    1:"a",
     2:"b"
    }
const obj2={
    3:"c",
    4:"d"
}    
//const obj3= {obj1,obj2};   //this will combine two objects into one with separete curly braces like array

//const obj3 = Object.assign(obj1, obj2)   //used to combine two objects into one 
// const obj3 = Object.assign( obj1, obj2)  //this statement will first concatinate the contect of obj2 into obj1 and then store in the obj3, so the contect obj1 and obj3 will same 
// console.log(obj3);
// console.log(obj1);
// console.log(obj3===obj1);

//const obj3 = Object.assign({}, obj1, obj2)  //here the obj1 and obj2 will copy in obj3, and obj1 will not equal to obj3, so curly braces are required 
// console.log(obj3);
// console.log(obj1);
// console.log(obj3===obj1);

const obj3={...obj1, ...obj2}  //spred operator is the alternate of the Object.assign({}, obj1, obj2)
console.log(obj3);

