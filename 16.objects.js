const course={
    course_name: "javascript",
    name:"bikram",
    course_instructor: "Gauerav sir"
};
// const{course_instructor}=course;  //object de-construct
// console.log(course_instructor);

const{course_instructor:instructor}=course;  //object de-structure
console.log(instructor);

