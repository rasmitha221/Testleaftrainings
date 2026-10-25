//Given a string s consisting of words and spaces, return the length of the last word in the string.
// ex 1

let sentence="hello world";

let lastWordLength=sentence.trim().split(/\s+/).at(-1).length;


console.log( lastWordLength);

//---------------------------------
// ex 2
 let poem ="fly me to the moon";

 let lastWord=poem.trim().split(/\s+/).at(-1).length;

 console.log(lastWord);
 //-------------------------------------
 //ex3

 /*function anagrams(){

    let isAnagram=["silent","listen"]
    let IsAnagram = ["hello","world"];
 
    if(isAnagram[0],[1]){

        console.log("print true");
        
    }
    else if(IsAnagram[0],[1]){

        console.log("print false");
        
    } 
    else{
        console.log("not found");
        
    }  
 }
anagrams();
//---------------------------------------------ex3
*/
function checkAnagram( isAnagram1,isAnagram2){

    let a= isAnagram1.split("").sort().join("");
    let b=isAnagram2.split("").sort().join("");

    if(a===b){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkAnagram("silent","listen"));
console.log(checkAnagram("hello","world"));
//-----------------------------------------
// without parameters

function checkAnagramm(){
    let variable1="hello";
    let variable2="world";

    let a=variable1.split("").sort().join("");
    let b=variable2.split("").sort().join("");

    if(a===b){
        console.log(`isAnagram is not ${variable1} and ${variable2}`);

        
    }
    else{
       console.log(false);
       
    }
}
checkAnagramm();
//----------------------------------------------
//Write a JavaScript program to find the total sum of all numbers present in an array.

let numericValue=[45,67,88,89,23,83];

let sumofArray =0;

for(let i=0; i<numericValue.length; i++){

    sumofArray =sumofArray + numericValue[i];
}
console.log(sumofArray);
//-------------------------------------









    
 











