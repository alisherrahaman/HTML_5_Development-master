// Create a Student Interface , and printStudent function
var student = {
    name: "rajan",
    age: 20,
    course: 'Engineering',
    isCompleted: false,
    address: {
        city: 'hyderabad',
        state: 'ts'
    }
};
function printStudent(student) {
    console.log("\n        name:" + student.name + ",\n        age:" + student.age + ",\n        course:" + student.course + ",\n        isCompleted:" + student.isCompleted + ",\n        address:{\n        city:" + student.address.city + ",\n            state:" + student.address.state + " \n    \n    ");
}
printStudent(student);
