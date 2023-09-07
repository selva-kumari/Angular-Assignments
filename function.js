//Annonymous with parameter without return
var temp = function (a, b) {
    console.log("The value addition is " + (a + b));
}(7, 8);
var temp1 = function (a, b) {
    console.log("The value multiplication is " + (a * b));
}(7, 8);
//Annonymous without parameter with return
var temp3 = function () {
    return ("hiii selva");
};
console.log(temp3());
var temp4 = function () {
    return (9 + 10);
};
console.log("The value is " + temp4());
//Fat arrow with parameter & without return
var temp5 = function (a, b) {
    console.log("The smallest value is " + ((a < b) ? a : b));
};
temp5(5, 8);
//Fat arrow without parameter & with return
var temp6 = function () {
    return ("This is perfomed by fat arrow function");
};
console.log(temp6());
//normal function
function add() {
    return (8 + 8);
}
console.log("The addition is ".concat(add()));
