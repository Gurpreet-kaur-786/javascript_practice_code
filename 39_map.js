const MyNumber = [1,2,3,4,5,6,7,8]

// let NewNum = MyNumber.map((num) => num + 1)
//  NewNum = MyNumber.map((num) => {
//     return num + 2})
// console.log(NewNum);


//Use of both map and filter operation 
let NewNum = MyNumber
.map((num) => num * 10)
.map((num) => num +1)
.filter((num) => num>=40)
console.log(NewNum);

