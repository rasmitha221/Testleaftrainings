//print number 1 to 20
//while loop
let i=0;
while(i<20){
    i++;
    console.log(`print the value is:${i}`);
}
//for loop
//for(i=0; i<20;i++){
   // console.log(i)
//}
// print number 1 to 25 that are divisible by 3
for(a=3;a<=25;a++){
    if(a%3===0){
        console.log(`divisible by value 3: ${a}`);
    }
}
//given age=22 check whether the person is eligible to vote or not

function eligibleVote(){
     let herAge=25;
     if(herAge>=18){
            console.log("yes your are eligible to vote");     
     }else if(herAge<=17){
            console.log("your not eligible for 1month");
     }else{
        console.log("you are not eligible for vote");
     }           
}
eligibleVote();

//print the mark  fail or pass
function studentMarks(){

    let name=["reni","rash","kailash"];
    let mark=[90,80,60];
    for(let i=0; i<name.length; i++){
        if(mark[i]>=90){
            console.log(`${name[i]} got ${mark[i]}- grade A`);  
        }else if(mark[i]>=75){
            console.log(`${name[i]} got ${mark[i]}- grade B`);
            
        }else if(mark[i]>=50){
            console.log(`${name[i]} got ${mark[i]} -grade C`);
        }else{
            console.log("All three students got passed");  
        }
    }
}
studentMarks();

//given str="javascript" count how many vowels are present
let my ="playwright";
console.log(my.lastIndexOf("i"));

// how many vowel count present
let learn="javascript";
let  count=0;

for(let i=0; i<learn.length;i++){
    if("aeiou".includes(learn[i])){
        count++;
    }
}
console.log(count);

//print multiplication table 1 to 10 
let num=7;
for(i=1;i<=10;i++){
    console.log(num*i);
    
}
// print the switch case in weekdays
function weekDays(){
     let week="";
     switch(week){
     case "tuesday":
        console.log("this is tuesday");
        break;
    case "friday":
        console.log("this is friday");
        break;
    case "wednesday" :
        console.log("this is wednesday");
        break;
    case "Monday" :
        console.log("this is monday");
        break;
    default:
        console.log("no more days"); 
     }
}
weekDays();
// 
let GivenNum=  15;
if(GivenNum%3===0){
    console.log("print fizz");   
}
else if(GivenNum%5===0){
    console.log("print buzz");   
}
else if(GivenNum%3===0 && GivenNum%5===0){
    console.log("print fizzbuzz");   
}
else{
    console.log("otherwise");  
}

// check palindrome or not
let subject="english";
let reverse="";

for(let i=subject.length-1; i>=0;i--){
    reverse=reverse+subject[i];
}
if(subject===reverse){
    console.log("palindrome");    
}else{
    console.log("not a palindrome");  
}
// strict equality
function check(){
    let man="human";
    if("man"===true){
         console.log("not a strict equality bcoz string+boolean");
    }
    else if(man==="45"){
        console.log("not a equality bcoz number+string");
        
    }else if(man==="human"){
        console.log("yes correct strict eauality");

    }
    else{
        console.log("verified");   
    }
}
check();



   
    








