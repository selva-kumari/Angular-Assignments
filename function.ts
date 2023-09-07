//Annonymous with parameter without return

let temp=function(a:number,b:number){
    console.log("The value addition is "+(a+b));
}
(7,8);

let temp1=function(a:number,b:number){
    console.log("The value multiplication is "+(a*b));
}
(7,8);

//Annonymous without parameter with return

let temp3=function():string{
    return("hiii selva");
}
console.log(temp3());

let temp4=function():number{
    return(9+10);
}
console.log("The value is "+temp4());

//Fat arrow with parameter & without return

let temp5=(a:number,b:number)=>{
console.log("The smallest value is "+((a<b)?a:b));
}
temp5(5,8);

//Fat arrow without parameter & with return

let temp6=():string=>{
    return("This is perfomed by fat arrow function");
}
console.log(temp6());

//normal function

function add():number{
return (8+8);
}
console.log(`The addition is ${add()}`);
