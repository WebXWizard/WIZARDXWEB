//Objects---- Key Value Pair as like Dictionary- 

let student ={ 
    name:'John',
    age:21,
    email:'alamshahe9044@gmail.com',
    phone:'9044493289',
    course:'JavaScript',

}
console.log(student)

console.log('-------------------')

// To access the value of object through the key-- 
console.log(student.name)
console.log(student.age)
console.log(student.phone)
console.log(student.course)

console.log('-------------------')

// Replacing the value of object-

student.course="Java";
student.email="bhaurocky9045@gmail.com";
console.log(student)

console.log('-------------------')

student.course="JavaScript";
console.log(student)

console.log('-------------------')


// Add new key-value pair--

student.city='Lucknow'
console.log(student)

console.log('---------------------');


const smartphones ={
    brand: 'Samsung',
    model: "Galaxy S24",
    price: 50000,
    color:['White',"Black", 'Blue', 'Green','Red'],
    ram: '8Gb',
    storage:'128Gb',
    camera:'64Mp',
    battery:'5000mAh',
}
console.log(smartphones)
console.log(smartphones.battery)
console.log(smartphones.model)
console.log(smartphones.color[2])

console.log("-------------")


// Add an Indexing--

smartphones.color[2]="SkyBlue"
console.log(smartphones) 
smartphones.color.push("Green")
console.log(smartphones)


console.log('---------------------')


//  Add Multiple Dictionary or Object in a single  Object --

const phones=[   

    {brand1:"Apple", model:'Iphone 12', price:80000, color: ['white','black','green','red']},
    {brand2:"Samsung", model:'Galaxy s23', price:70000, color: ['white','black','blue','green','red']},
    {brand3:"1plus", model:'8T', price:45000, color: ['white','black','blue','red']},
    {brand4:"Xiaomi", model:'Note 10 pro', price:35000, color: ['white','black','blue','green','red']},
]
console.log(phones)
console.log(phones[0].model)
console.log(phones[2].color[1])

console.log('---------------------')


phones[3].color[4]="brown";
console.log(phones[3].color[4])
console.log(phones)






//C:\Users\hp\Desktop\WIZARDXWEB>npm uninstall create-next-app -g