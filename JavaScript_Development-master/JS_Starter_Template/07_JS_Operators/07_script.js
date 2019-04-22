// Assignment operator =
var num1= 10;
console.log("num1 :" +num1);


// Arithmetic operators + - * /
var a=10;
var b=20;
var sum = a+b;
console.log("sum of a,b is" +sum)

// Short hand math += , -= , *= , /=
var p=10;
var q=20;
var add=0;
add =add+(p+q); //0+ 10 +20=3=
add +=(p+q); //30 + 10 +20=60
console.log(add);//60



// Conditional operators < , > , <= , >= , !=
var age=25;
if(age<=18){
    console.log('your are minnor');
}
else {
    console.log('you are major');
}


// Unary Operator ++ , -- (pre , post)

var x=10;
x=x+1;
x +=1;
x++;
console.log(x); //13


// Logical operators AND , OR
var inRelation=true;
var parentsAgreed=false;
if(inRelation && parentsAgreed){
    console.log('Get marry soon');

}
else {
    console.log('wait untile the parents Agreed');



}

// String Concatenation Operator
var test=1+2+"2"+1+3+"2";
console.log(test); //32132

// Ternary operator (? :)

age=25;
(age<18)? console.log('you are minnor') : console.log('you are major');
// Type of operator
var abc=10;
console.log('value :' +abc +"data type :" +typeof abc);

// == operator
a=10;
b="10";
if(a==b){
    console.log("booth are equal");
}
else {
    console.log("both are not equal");
}

// === operator

a=10;
b="10";
if(a===b){
    console.log("booth are equal");
}
else {
    console.log("both are not equal");
}

