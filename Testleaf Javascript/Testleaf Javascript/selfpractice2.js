//count how many times the 'a' character occur

let my="anandakarthick";
count=0;

for(let i=0; i<my.length; i++){
    if("a".includes(my[i])){
        count++;
    }
}
console.log(count);

//print simple calulator
function calulator(a,b){
    
   let operator="multiplication";
    switch(operator){
        case "addition":
            console.log(a+b);
            break;
        case "subtraction":
            console.log(a-b);
        case "multiplication":
            console.log(a*b);
            break;
        default:
            console.log("no number found");         
    }
}
calulator(4,6);

// find largest number using loop+condition

let number=[12,45,7,89,34];

let largest =number[0];

for(let i=1; i<number.length;i++){
    if(number[i]>largest){
        largest=number[i];
    }
}
console.log(largest);



