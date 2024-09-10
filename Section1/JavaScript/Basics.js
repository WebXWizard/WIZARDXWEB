// Set-Up Javascript---- Brendan 
// Firstly you have installed Node.js---

// using cd command to enter in the directory---
// for running code--- node filename.js


// node --watch filename.js-- for simultaneously running---

// We can write Js in browser console--Temporary
//Permanent- GitHub and VS-Code...(Microsoft)

//----------
//-JavaScript is a Programming language.
//-client side interpreted language..
//Dynamically typed---
//-JavaScript is a lightweight programming language commonly used by web developers to add dynamic interactions to web pages, applications, servers, and even games.
//-It works seamlessly alongside HTML and CSS, complementing CSS in formatting HTML elements while providing user interaction, a capability that CSS alone lacks.

/// JAVASCRIPT BEGINNING____(ES6 and  ES7 )
///Some Basics Concepts of JavaScript are---
//-Printing Output..
//-Variables--{Container or Storage Location}
//-Keywords and Identifiers-'''
//-Data Types...
//-Operators---
//-Conditional statements--
//-Looping--
//-Functions***
//-etc


//------- for printing output--console.log

console.log("Start JavaScript Language-----");
console.log("  ");
console.log("Hello World!!!!")
console.log("Shahe Alam.. ")
console.log("This is my first Js Code...")
console.log("JavaScript.....")
console.log("Toh kaise hain AAP LOG!!!!")
console.log("Framework.....")

// START SERVER AND CODE RUN DEFAULT node -- watch Filename

console.log("------")


// VARIABLES...... = Container for data,changes(vary) according to the users
///Camel case= fullName..


x = null;
console.log(x);


y = undefined;
console.log(y);

isfollow = false;
console.log(isfollow)

var name = "Shahe Alam"
console.log(name)

//Types Of Variables---3 types
//1-var
//2-let 
//3-const



//let used Most----

let fullName = "Shahe Alam";
console.log(fullName);

let age = 21
console.log(age)

//Differences between 'let' and 'const'

let city = "Barabanki"//declaration
console.log(city)

city = "Lucknow" //reassignment
console.log(city)

const country = "India"
console.log(country)

//country="Pakistan"
//console.log(country)
//Errors 

//Difference between"var" and "let"

var a = 10, b = 20, c
c = a + b
console.log(c)

//re declaration and reassigning both are possible

var a = 10
console.log(a)
var a = 20 //re declaration
console.log(a)
a = 30
console.log(a)

// In "let---"

let d = 20
//re declaration is not possible(not good)
//let b=10

d = 30
console.log(d)
//Reassignment is possible in let


console.log("........................")


//Local Scope
console.log("Local Scope")
let num = 10
console.log(num)

if (true) {
      let num = 20
      console.log(num)
}
console.log(num)
console.log("........................")

//Global Scope 
console.log("Global Scope")

var num1 = 10
console.log(num1)

if (true)
{
      var num1 = 20
      console.log(num1)
}

console.log(num1)


//String Concatenation---


let firstname = "Aloneboy"
let lastname = " ShaheAlam"
let fullname = firstname + " " + lastname
console.log(fullname)

console.log("")

        // VARIABLE EXAMPLE---
console.log("VARIABLE EXAMPLE---");

console.log("")
var bs = 50000
hra = (10 / 100) * bs
da = (5 / 100) * bs

console.log("Basic Salary=", bs)

console.log("Human Resources allowance=", hra)
console.log("Dearness allowance", da)
var gross = bs + hra + da
console.log("Gross Salary=", gross)
