//scope assignment
const browserVersion="chrome"; //global scope

function getBrowserVersion(){   // function scope
    let browserVersion="chrome";
    if(browserVersion==="chrome"){        // block scope
        console.log("true");
    }
    var oneMorebrowserVersion ="firebox";
    if(oneMorebrowserVersion){
        console.log("firebox");
   }
   console.log(browserVersion);
}
console.log(browserVersion);
getBrowserVersion();
