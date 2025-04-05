//Array of objects 
const myCoding =[
    {
        languageName:"c",
        languageFileName:"c_file"
    },
    {
        languageName:"c++",
        languageFileName:"c++_file"
    },
    {
        languageName:"java",
        languageFileName:"java_file"
    },
    {
        languageName:"js",
        languageFileName:"js_file"
    },
    {
        languageName:"php",
        languageFileName:"php_file"
    }
]
myCoding.forEach((item) => {
    //console.log(item);
    //console.log(item.languageFileName);
    console.log(item.languageName);
})