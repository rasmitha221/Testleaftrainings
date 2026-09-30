//global scope,function scope,block scope assignment

const genderType="male";// global scope

function printGender(){
    let human1="brown";
    if(genderType==="female"){
        
        console.log("yes female");
          
    }else{
        console.log("male");
    }
    console.log(human1);

    let human2= "male";
    if(genderType==="male"){
        console.log("yes male");
    }else{
        console.log("no male");
        
    }
    console.log(human2);  
}
console.log(genderType);
printGender();





