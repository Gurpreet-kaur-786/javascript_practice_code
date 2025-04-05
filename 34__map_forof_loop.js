//Map
const map=new Map();
map.set ('In',"India")
map.set ('USA', "United State of America")
map.set ('Fr', "France")

//forof loop
console.log(map);   // print object as an array
for (const key of map) // the key is used to print key and the values of an array object
{
    console.log(key);
}

for (const [key,value] of map) // the key,value is used to print only the values of an array object
{
    //console.log(key,value);
    console.log(key,':-',value);
}