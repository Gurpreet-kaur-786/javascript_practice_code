// function sum(a,b)
// {
//     return a+b;
// }
// console.log(sum(10,2));

// Use of function with const 
// const sum1 = function(a,b)
// {
//     return a+b;
// }
// console.log(sum1(23, 3));


//Use of Arrow function 
//Syntax 
// var = ()=>{}
    
//The following program shows the explicit use of return keyword    
const sum2 = (a,b) =>{ 

    return a+b;

}
console.log(sum2(23, 3));


//The following program shows the implicit use of  return keyword.........( without return keyword  )    
const sum3 = (a,b) => a+b;

console.log(sum3(23, 3));

//WAP to return username and password, if password length is minimum 6 characters 
login= (password) => 
{
    if(String(password).length>6)
    {
        return ({username:"bikram", password:123456})
    }

}
console.log(login(1234567));


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
const Arr1 = [1,3,6,7,8];
Arr1.forEach(function(temp)
{
    console.log(`the array is ${temp}`);
    
});

