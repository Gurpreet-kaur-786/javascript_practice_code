// <, >, <=, >=, ==, !=, !==, ===
//-----------------------------------------------------------------------------------------------------------------------
if(2 =="2")
{
    console.log("this statement is true");
}
    
//-----------------------------------------------------------------------------------------------------------------------
if(2 ==="2")  //=== is used for type check, so in this case this consition is false 
{
    console.log("this statement is true");
}  
//-----------------------------------------------------------------------------------------------------------------------
let temperature =40;
if(temperature === 50)
{
    console.log("less than 50");
}
else{
    console.log("greater than 50");
}
//-----------------------------------------------------------------------------------------------------------------------
let score =400
if(score >100)
{
    var power ="fly"    // if we write let or const in place of var then the log statement out of the if statement genertes an error 
    console.log(`User power ${power}`);
}
console.log(`User power ${power}`);
//--------------------------------------------------------------------------------------------------------------------------
let balance =20
if (balance >10) console.log("executed"), 
console.log("also executed"); // this is explicit scope, we can also execute the statement without { } 
//--------------------------------------------------------------------------------------------------------------------------
const UserLogin = true
const LoginFromGoogle =false
const LoginFromEmail = true
if(UserLogin && LoginFromGoogle)          // In case of AND && if any one statemnet is false then statement will not be executed
{
    console.log("Code is executed");
}
else{
    console.log("Not Executed");
}

if(UserLogin || LoginFromEmail || LoginFromGoogle)  // In case of OR|| if any one statemnet is true then statement will be executed
{
    console.log("User is Logged in");
}
//--------------------------------------------------------------------------------------------------------------------------
const month =3;
switch(month)
{
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("This is defalt value");
        break;
}