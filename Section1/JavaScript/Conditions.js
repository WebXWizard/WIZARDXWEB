console.log("Conditional Statements----")

console.log("-------------")

//--------------

//Types of Conditions--


//-if(to check single condition--)
//-if-else(to check single conditions--)
//-if-else-if(to check multiple conditions)
// Ternary--(to check)


// if statements---
let age = 19;
if(age >= 18);
{
console.log("You are Eligible to Vote ")
}

//if-else conditions--
console.log("..............")
let a = 10;
if(a >= 18)
{   
console.log("You are Eligible to Vote ")
}
else{
    console.log("You are not Eligible to vote")

}
//if-else statements---

console.log("..........")
let temp=45;
if(temp<45){
    console.log("Ghar pe Raho...")
}
else{
    console.log("Digipodium aa jaao")
}


//-------------
/// if-else-if statements---
console.log("..........")
let marks= 80;
if(marks>=90){
    console.log("Grade A")
}
else if(marks>=80){
    console.log("Grade B")
}
else if(marks>=60){
    console.log("Grade C")
}
else{
    console.log("Fail.....")
}


//------------
console.log("")
console.log("")
let c=20;
let result=c>10 ? "Greater than 10" :"Less than 10"
console.log(result)


// There are three types of conditions in JavaScript
// 1. if statement
// 2. if-else statement
// 3. if-else-if statement
// 4. switch statement


console.log("")
console.log("")
// if statement
let age_1 = 18
if (age_1 >= 18) {
    console.log("You can vote")
} if (age_1 === 18) {
    console.log("You are 18 so you also can vote")
} if (age_1 < 18) {
    console.log("You can't vote")
}

console.log("---------------------------")

// if-else-if statement
let age_2 = 18
if (age_2 >= 18) {
    console.log("You can vote")
} else if (age_2 === 18) {
    console.log("You are 18 so you also can vote")
} else {
    console.log("You can't vote")
}

console.log("---------------------------")



//Ternary Operator -- 
let age2 = 18;
let message = age2 >= 18 ? "You can Vote" : "You can't Vote"
console.log(message)

console.log("---------------------------")


let age3 = 18;
let message2 = age3 < 18 ? "You are minor" : age3>=18 && age3<60 ? "You are an Adult" : "You are Senior" 
console.log(message2)