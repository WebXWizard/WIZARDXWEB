 
 
 
let fruits= ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Grapes', 'Watermelon', 'Kiwi', 'Papaya', 'Guava']
 
 
 //Array Methods--

 console.log("Array Methods")
      
 //Built-in Functions in Arrays--

// 1- push() =  Add the elements at the end of an array
// 2- pop() = Remove the elements from the end of an array
// 3- shift() = Remove the elements from the beginning of an array
// 4- unshift() = Add the elements at the beginning of an array
// 5- splice() = Add or Remove elements from the array range or Add/Remove elements from an array
// 6- slice() = Copy elements from the array or Extract a portion of an array
// 7- indexOff() = Find the Index of the Elements
// 8- concat() = Merge two arrays
// 9- map() = Iterate over the array *****MI
// 10- filter() = Filter the elements of an array or Create a new array with elements that pass a test
// 11- forEach() = Iterate/Loop over the array




console.log("------")


let fr=['Apple','Banana','Mango','Orange']

console.log(fr[3])//Positive Indexing

console.log(fr[-2])//Negative Indexing

console.log(fr.length)//Length of an Array



////Built-in Functions in Arrays--


//push()

fr.push('Strawberry')
console.log(fr)

//pop()

console.log('-------')

console.log(fr.pop)
console.log(fr)

//shift()
console.log(fr.shift())
console.log(fr)

// unshift()
console.log(fr.unshift('Kiwi'))
console.log(fr)


//splice()
console.log(fr.slice(2,5))
console.log(fr)



//indexOff()
console.log(fr.indexOf('Strawberry'))
console.log(fr)


//concat()
console.log(fr.concat('Potato'))


console.log('-----------')


//Iteration using Loop--

let num=[1,2,3,4,5,6,7,8,9,10];

for (i=0;i<num.length;i++)
{
 console.log(num[i]**2)
}
console.log("-----------")

//Iteration using foreach() function--]
 
num.forEach((i) =>
{
console.log(i**2)
})  


//Iteration using map()--  New Array Answer---

let square = num.map((x) => x**2)
console.log(square)




//filter()
let odd =num.filter((x) => x%2!=0)
console.log(odd)

let even =num.filter((x) => x%2==0)
console.log(even)





     //Examples---

let col=['Red','Black','White','Blue','Yellow','Grey','Brown','Purple','Orange']
console.log(col)
let col1=col.filter((x) => x.length>4)
console.log(col1)



let p=[1000,2000,3000,4000,5000,6000,7000,8900]
console.log[p]

let r=p.filter((x) => x>1000 && x<=9000 )
console.log(r)






