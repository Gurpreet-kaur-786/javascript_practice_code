// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if(i===5)
//     {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`The value is ${element}`);  
// }

for (let i = 0; i <=10; i++) {
    const element = i;
    if(i===5)
    {
        console.log("Detected 5");
        continue;
    }
    console.log(`The value is ${element}`);  
}