//forin loop
const myObject={
    subject1:'java',
    subject2:'javascript',
    subject3:'c',
    subject4:'php'
}
// for (const [key,value] of MyObject) //forof loop generates an error in case of objects, to print the values of an object we can use forin loop
//{
//     console.log(key,value);
    
// }
for (const key in myObject) {
    //console.log(key);            //to print only keys of an object
    console.log(myObject[key]);  //to print only values of an object
}

for (const key in myObject) {
    console.log(`The value of ${key} is :${myObject[key]}`);
    
}

const arr2 = ["java", "javascript", "python", "php", "c"]
for (const key in arr2) {
    //console.log(key);  //in case of array the key is used to print the index of an array values
    console.log(arr2[key]);  //so to print the key valuse of an array we should use array_name[key]
}