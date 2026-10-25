// conditional statement assignment
// create function 1
function launchBrowser(){
    let browserName="chrome";
    if(browserName==="firebox"){
        console.log("this is firebox");
    }else if(browserName==="microsoft"){
        
        console.log("this is microsoft");

    }else if(browserName==="chrome"){

        console.log("this is chrome");
    }
    else{
        console.log("its not a firebox");
    }   
}
launchBrowser();

// create function 2
function runTest(){
    let typeTest="smoke";

    switch(typeTest){
        case "sanity":
            console.log("typetest sanity");
            break;
        case "regression":
            console.log("typetest regression");
            break;
        case "waterfall":
            console.log("typetest waterfall");
            break;
        case "smoke":
            console.log("typetest smoke");
            break;
        default:
            console.log("invalid testing");                         
    }
}
runTest();
