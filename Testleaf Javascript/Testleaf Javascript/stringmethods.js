// stringmethod
//1.slice()  // negative indices
let fileName="document.pdf";
let ext=fileName.slice(-3);
console.log(ext);

//positive indices
//1.calculate string length=12
//2.you want to last 3char start at index=12-3=9
//3.end index is string lenth(12)
let fileNamee="document.pdf";
let extt=fileName.slice(9,12);
console.log(extt);
//----------------------------------------------------
//2.includes()
// check if a string contain value

let sweet="kitkat";
console.log(sweet.includes("kit"));
console.log(sweet.includes("cart"));

//---------------------------------------------------------
//3.start()and end()
let play="football";
console.log(play.startsWith("ball"));
console.log(play.endsWith("ball"));

//--------------------------------------------------
//4.touppercase()and tolowercase()
let girl="cute";
console.log(girl.toUpperCase());
//---------------------------------
//5. trim()/trim start()/trim end()

let userStory=  "    automation      ";
console.log(userStory.trim());
console.log(userStory.trimStart());
console.log(userStory.trimEnd());
//--------------------------------------------
//6.replace
 
let game="we are in football team";
console.log(game.replace("football","hockey"));

//important conept

let computer= "we are working in laptop";
console.log(computer.replace("we","they"));
console.log(computer.replaceAll("we are working in laptop","they are happy"));

//----------------------------------------------
//7.split()

let show="kuku with komali";
console.log(show.split(""));
//---------------------------------------
//8.lastindexof

let table="woodtable";
console.log(table.lastIndexOf("b"));
//----------------------------------------------














