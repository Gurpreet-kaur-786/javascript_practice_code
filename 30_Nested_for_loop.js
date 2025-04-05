// Nested for loop
// for (let i = 0; i <4; i++) {
//     console.log("Outer loop");
//     for(let j = 0; j <4; j++)
//     {
//         console.log("----Inner loop"); 
//     }
// }

//write a program to print tables from 2 to 4
// for (let i = 2; i <=4; i++) {
//     console.log("-------------Table of " + i);
//     for(let j = 0; j <=10; j++)
//     {
//         console.log(i + '*' + j + '=' + i*j ); 
//     }
// }

//print length of the array using for loop
let array = ["Java", "c", "c++", "python"]
console.log(array.length);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}