// There are three types of conditions in JavaScript
// 1. if statement
// 2. if-else statement
// 3. if-else-if statement
// 4. switch statement
// 5. ternary operator

// if statement
let age = 18
if (age >= 18) {
    console.log("You can vote")
} if (age === 18) {
    console.log("You are 18 so you also can vote")
} if (age < 18) {
    console.log("You can't vote")
}

console.log("---------------------------")

// if-else-if statement
let age1 = 18
if (age1 >= 18) {
    console.log("You can vote")
} else if (age1 === 18) {
    console.log("You are 18 so you also can vote")
} else {
    console.log("You can't vote")
}

console.log("---------------------------")

let a = 19
if (a >= 18) {
    console.log("You are eligible for vote")
} else {
    console.log("You are not eligible for vote")
}


console.log("---------------------------")

// switch statement
let day = 5
switch (day) {
    case 0:
        console.log("Sunday")
        break
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    default:
        console.log("Invalid day")
}

console.log('--------------------------')
// ternary operator
let age2 = 18
let message = age2 < 18 ? "You are a minor" : age2>=18 && age2<60 ? "You are an adult" : "You are a senior"
console.log(message)