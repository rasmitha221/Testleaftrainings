// hoisting in var
console.log(nick); // undefined

var nick="rash";

// hoisting in let

console.log(channel); // reference error

let channel="suntv";

// hoisting in const

console.log(girl); // reference error

let girl="cute";

//TDZ(temporal dead zone )
// the time period b/w hoisting and intialization of a variable where 
// it cannot be accesd
