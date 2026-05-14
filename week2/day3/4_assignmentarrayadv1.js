/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard" */
    const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//1.selection
let instock=cart.filter(elements=>elements.inStock===true)
console.log(instock)
//2.modify
let newArray=cart.map(ele=>({name:ele.name,totalPrice:ele.price*ele.quantity}))
console.log(newArray)
//3.total
let total=cart.reduce((acc,element)=>acc+(element.price*element.quantity),0)
console.log(total)
//4.find
let mouse=cart.find(ele=>ele.name==="Mouse")
console.log(mouse)
//5. findindex
let index=cart.findIndex(ele=>ele.name==="Keyboard")
console.log(index)