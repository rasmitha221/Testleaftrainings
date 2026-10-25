const browserVersion="chrome";
function getBrowserVersion(){
    if(browserVersion==="chrome"){

        var browserVersion="edge";
        console.log("inside block");
        
    }
}
getBrowserVersion();
console.log("outside block");
