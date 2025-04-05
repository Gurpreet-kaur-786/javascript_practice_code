//use of foreach loop      //it is the alternate of for loop
// const Arr = [1,3,6,7,8];
// Arr.forEach(function(Arr)
// {
//     console.log(`the array is ${Arr}`);
    
// });


//Syntax of foreach loop 
// array_name.forEach(function(temporary_variable)
//{
       //body od loop with using temporary_variable
//});
const Arr1 = [10,30,60,70,8];
Arr1.forEach(function(temp,location)
{
    
    console.log(`the array value ${temp} at index ${location}`);
    
});


//use of forEach using Arrow function with three parameters
let arr =["A","B","C"];
        arr.forEach((i,ind,a)=> {
        console.log((`${i} is at inedx ${ind} in ${a}`));
    });
