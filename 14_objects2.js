const obj = new Object();//the object is a keyword which are used to create objects using new keyword
console.log(obj);  

const obj2={}   //the object can also created with empty curly braces 
obj2.id=1001
obj2.name="bikram"
obj2.class="msc"

console.log(obj2); 

const another_obj={
    email:"bikram@gmail.com",
    full_name:{
        user_name:{
            first_name:"bikramjeet",
            last_name:"kaur"
        }
    }
}
console.log(another_obj);  //it will display all the objects_values present in the object
console.log(another_obj.full_name);
console.log(another_obj.full_name.user_name);
console.log(another_obj.full_name.user_name.first_name); // it will only dsipaly the first_name
console.log(another_obj.full_name?.user_name.f_name); // ? works as the if else statement, it will check the presence of the object_key