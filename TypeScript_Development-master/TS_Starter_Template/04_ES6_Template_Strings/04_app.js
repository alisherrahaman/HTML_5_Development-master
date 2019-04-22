/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/
/*
Create a Car Object and prepares a Template String using
String Concatenation and Template String.
 */
var car = {
    model: 'Audi',
    year: 2018,
    color: 'white'
};
var strConcat = "<div style='background-color: orangered'>" +
    " <h3>model :" + car.model + "</h3>" +
    "<h3> year :" + car.year + "</h3>" +
    "<h3>color :" + car.color + "</h3>+"
    + "</div>";
document.querySelector('#container').innerHTML = strConcat;
var templateStr = "<div style=\"background-color: lightgreen\"> \n              <h3>model :" + car.model + "</h3>\n              <h3>year: " + car.year + "</h3>\n              <h3>color : " + car.color + "</h3>\n              </div>";
document.querySelector('#container').innerHTML = templateStr;