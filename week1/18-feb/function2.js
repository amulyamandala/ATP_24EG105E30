//write a function that rceives an array as arg and return their sum
function sum(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
let arr=[1,2,3,3,4,4]
let result=sum(arr)
console.log(result)
