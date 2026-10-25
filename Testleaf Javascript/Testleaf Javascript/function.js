//function concept
let person1={
    myname:"rash",
    age: 27
}
function printUserName(uName,uage){
    console.log("hello",person1.myname,person1.age);
    if(uage>50){
        console.log(`hi ${uName}, your age is ${uage}`);
        
    }
    else{
        console.log("not found"); 
    }   
}
printUserName("rash",27);
printUserName("reni",21);
printUserName("rekha",49);
printUserName("retinam",73)

//----------------------------------
// default parameter
function demoprameter(gender="kailash",clr="white"){


    console.log(`hi im a ${gender} and im a ${clr}`);
            
}
demoprameter("female","brown");
demoprameter("male");
demoprameter();
demoprameter(undefined,"dark");
//

//-------------------------------------------
// how to set default parameter in variable
let employeeID=""
let newID=employeeID || "UQWEG233"
console.log(newID);

//------------------------------------------
//function return type
function findrectanglearea(l,b){
    let condition="false";
     if(condition){

        return l*b;
     }
     else{
        return null;
     }    
     
}
let newval=findrectanglearea(20,60)

console.log(findrectanglearea(100,50), newval);

findrectanglearea(100,50);
//------------------------------------------
function cubic(num){

    // multiple return value  kuduthalum last la erukira single value 
    // than consider pannum.

    console.log(num**3);
    
    return (num**3, "eighty",true, 120)
}
let newvalue=cubic(4)

console.log(newvalue);
//---------------------------------------
// non return type
function  sweet(){
      
    console.log("non return type");
    
}
//sweet()
 let noreturn=sweet()
 
 // oru variable ku oru value aa assign pannama oru varable aa cl
 //panuna undefined than varum.


console.log(noreturn);

