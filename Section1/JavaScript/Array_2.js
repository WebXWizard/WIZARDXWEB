let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"]
console.log(fruits)

console.log('')
// 1. push() - add element at the end of the array
// 2. pop() - remove element from the end of the array
// 3. shift() - remove element from the beginning of the array
// 4. unshift() - add element at the beginning of the array
// 5. concat() - merge two arrays
// 6. slice() - extract a portion of an array
// 7. splice() - add/remove elements from an array
// 8. indexOf() - find the index of an element
// 9. forEach() - loop through the array
// 10. map() - create a new array from an existing array
// 11. filter() - create a new array with elements that pass a test

// Indexing and Slicing

console.log(fruits[3])
console.log(fruits[2])
console.log('')

console.log(fruits.slice(1,5))
console.log('')


console.log('Array Methods')
console.log('')


fruits.push("Grapes")
console.log(fruits)
console.log('')

fruits.pop()
console.log(fruits)
console.log('')

fruits.unshift("Kiwi")
console.log(fruits)
console.log('')

fruits.shift()
console.log(fruits)
console.log('')

const vegetables = ["Carrot", "Cabbage", "Tomato", "Potato"]
const new_arr = vegetables.concat(fruits)
console.log(new_arr)
console.log('')


new_arr.push("Pumpkin")
console.log(new_arr)
console.log('')

const index = new_arr.indexOf("Mango")
console.log(index)
console.log('')

new_arr.splice(2, 2, "Spinach", "Lettuce")
console.log(new_arr)
console.log('')

const num = [1,2,3,4,5,6,7,8,9,10]
num.forEach((x) => {
    console.log(x)
})
console.log('')

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let newArr = []
arr.forEach((x) => {
    newArr.push(x*2)
})
console.log(newArr)
console.log('')

let newArr1 = arr.map((x) => x*2)
console.log(newArr1)
console.log('')

const evenNum = arr.filter((x) => x%2==0)
console.log(evenNum)
console.log('')
console.log('')
console.log('')
