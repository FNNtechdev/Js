//voting age confirmation
let age = 13;
let membership = true;
if (age>=18 &&  membership==true){
    console.log("You are eligible to vote.");
}
else if( age>=18 && membership==false){
    console.log("You need to be a member to vote.");
}
else if(age<18 && membership==true){
    console.log("You need to be of legal age to vote.");
}
else{
    console.log("You are not eligible to vote.");
}
