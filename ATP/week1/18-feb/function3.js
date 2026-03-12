//write a function that receives an array and search element as args and returns the index of that search element in the array.
//  it should return"not found" when search element is not found
function search(arr,ele){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==ele){
            return i;
    }
}
return "not found"
}
let arr=[1,2,4,5,6,7]
let result=search(arr,7)
console.log(result);
