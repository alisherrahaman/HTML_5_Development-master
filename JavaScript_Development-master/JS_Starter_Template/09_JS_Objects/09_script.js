//creation of objects and retrieval
 var employee={
    name:'jhone',
    age:40,
     deg:'manager',
    addresss:{
        city:'hyderabad',
            state:'telangana'
    }
 };
console.log(employee);// employee object
console.log(employee.name);//jhon
console.log(employee.addresss); //address object of employee

// add a property for employee obj
employee.salary=50000;
//employee obj with salary
console.log(employee);


//add a property for address obj of employee
employee.addresss.country ='India';

//barackets notation for dynamic values
var prop ='name';
console.log(employee.prop); //undefined
console.log(employee[prop]);
prop='age';
console.log(employee[prop]); //40

//delete property
delete employee.addresss;
console.log(employee);