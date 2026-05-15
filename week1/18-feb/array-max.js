 //write a function that recieves 3 numbers args and returns the big number
function findBig(a,b,c){
    if(a>b && a>c){
        return a
    }
    else if(b>a && b>c){
        return b
    }
    else{
        return c
    }
}
let result=findBig(1,2,3)
console.log(result)
