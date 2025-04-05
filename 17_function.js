// function sum(a,b)
// {
//     c=a+b;
//     console.log(`the sum is ${c}`);
    
// }
// sum(10,20)  //this is the traditional way to call the function 

//use of return statement in function
function sum(a,b)
{
    c=a+b;
    return(c);
    
}
d=sum(100,20)
    console.log(`the sum is ${d}`);


// this is the function in which return statement exceute directly to console.log    
function login(username,password)   
{
    return(`My user name is ${username} and password is ${password}`)
}  
console.log(login('bikram', 12345));



// The return statement overwrite the concept of else statement 
function login(username,password)   
{
    if(username===undefined || password===undefined)
    {
        return
    }
    // else
    // {

    
    // return(`My user name is ${username} and password is ${password}`)
    // }
    return(`My user name is ${username} and password is ${password}`)
}  
console.log(login());
//console.log(login('bikram', 12345));

