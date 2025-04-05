//forEach loop

const coding =["js","c","c++","python","php"]
// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach(item =>                //this is the alternate of the above forEach loop using Arrow Operator
//{                       
//     console.log(item);
// })

coding.forEach((item, index, arr) =>     //this is the another way of using Arrow Operator in forEach loop 
{                       
    console.log(item, index, arr);
})

// function printMe(item){                 //this the another alternate, using printMe function
//     console.log(item);
// }

// coding.forEach(printMe)
//--------------------------------------------------------------------------------------------------------------------------------------
//Program - sum of array
let arr=[10,20,30]
let sum = 0;
arr.forEach((item, value)=>{

    sum += item
    // console.log(value,item);
    // console.log(sum);
    return sum

})

console.log(sum)


//above program witghout arraw function
// let arr=[10,20,30]
// let sum = 0;
// arr.forEach(function (item, value){

//     sum += item
//     // console.log(value,item);
//     // console.log(sum);
//     return sum

// })

// console.log(sum)
