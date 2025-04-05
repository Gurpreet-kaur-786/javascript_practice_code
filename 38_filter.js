// const myCoding = ["java","js","python","php"]
// let values=myCoding.forEach((item) =>{
//     console.log(item);
    
// })
// console.log(values);
//Filter
  

// const myNum=[1,2,3,4,5,6,7]
// let values=myNum.filter((num) => num>4)
// console.log(values);

// let num1=[1,2,3,4,5,6,7,8,9,10]      //if we not not return keyword within the scope{} then it will print the empty array
// let filter_num=num1.filter((num)=>{
//     num>4
// })
// console.log(filter_num);

let num1=[1,2,3,4,5,6,7,8,9,10]          //return keyword should be wriiten when value is return within the scope 
// let filter_num=num1.filter((num)=>{
//     return num>4
// })
// console.log(filter_num);

//use of push method in forEach loop with array
 const newNum=[]
 num1.forEach((num)=>{
    if(num%2==0)
    {
        newNum.push(num)   
    }
 })
 console.log(newNum);

 

const books=[
    {title:'book one', genre:'Fiction', publish:1981, edition:2004},
    {title:'book two', genre:'Non-Fiction', publish:1982, edition:2005},
    {title:'book three', genre:'History', publish:1983, edition:2002},
    {title:'book four', genre:'Science', publish:1984, edition:2000},
    {title:'book five', genre:'Fiction', publish:1991, edition:2020},
    {title:'book six', genre:'Non-Fiction', publish:1992, edition:2021},
    {title:'book seven', genre:'History', publish:1993, edition:2024},
    {title:'book eight', genre:'Science', publish:1994, edition:2014},
];
//const UserBooks = books.filter((bk)=>bk.genre === 'History')
const UserBooks = books.filter((bk)=>{
    return bk.publish >=1990 && bk.genre === 'History'}
 
)
console.log(UserBooks);
