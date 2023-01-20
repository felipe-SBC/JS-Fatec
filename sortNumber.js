var prompt = require('prompt-sync')();
var name = prompt("What's your name? ");
console.log("Hi %s, Discovery your sort number!!",name);
var  a = prompt("Y/N?");
if(a == "Y"){
    var sort = Math.floor(Math.random()*11);
    console.log("Your sort number is: ",sort);    
}else{
    console.log("Okay, leave it for next time");
}   