
//Arrays----

let fruits= ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Grapes', 'Watermelon', 'Kiwi', 'Papaya', 'Guava']
console.log(fruits)

// Array Methods

console.log('-------------------')

// 1. push() - add element at the end of the array
// 2. pop() - remove element from the end of the array
// 3. shift() - remove element from the beginning of the array
// 4. unshift() - add element at the beginning of the array
// 5. splice() - add or remove element from the array
// 6. slice() - copy elements from the array
// 7. indexOf() - find the index of the element
// 8. concat() - merge two arrays
// 9. map() - iterate over the array
// 10. filter() - filter the elements of the array
// 11. forEach() - iterate over the array

// Indexing and Slicing---


//Indexing--

console.log(fruits[4])
console.log(fruits[2])
console.log(fruits[6])


console.log('-------------------')


//Slicing-

//slice(2,5) means start from 2 and last indexing not count--

console.log(fruits.slice[3])
console.log(fruits.slice(2,7))

console.log('-------------------')

//-------------

let mobile = ['Iphone' , 'RealMe' , 'Samsung' , 'Motorola' , 'Nokia' ,'RedMi' , 'Vivo' ,'Lava' ,'Jio']
console.log(mobile.slice(2,8))
console.log(mobile.length)

console.log('-------------------')

//Push()
mobile.push("Reliance")
console.log(mobile)

console.log('-------------------')

//Pop()
mobile.pop("Reliance")
console.log(mobile)

//Unshift()
mobile.unshift("Pixel")
console.log(mobile)
console.log('-------------------')


//shift()
mobile.shift("Pixel")
console.log(mobile)
console.log('-------------------')

//concat()
const model = ["F15" ,'K20Pro' ,'Y18']
const newArr = model.concat(mobile) 
console.log(newArr)
console.log('-------------------')

newArr.push('F17')
console.log(newArr)
console.log('-------------------')


//indexOf()
const index = newArr.indexOf("Vivo")
console.log(index)
console.log('-------------------')


//splice()
newArr.splice (2,1)
console.log(newArr)

console.log('-------------------')

newArr.splice(2,2,'Note10')
console.log(newArr)

console.log('-------------------')

// forEach()

const Num = [1,2,3,4,5,6,7,8,9,10]
Num.forEach((x) => {
    console.log(x)
})

console.log('-------------------')


const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let newArr1 = []
arr.forEach((x) => {
    newArr1.push(x*2)
})
console.log(newArr1)

console.log('-------------------')

// map()
let newArr2 = arr.map((x) => x*2)
console.log(newArr2)


console.log('-------------------')


//filter()
const evenNum = arr .filter ((x) => x%2==0)
console.log(evenNum)




