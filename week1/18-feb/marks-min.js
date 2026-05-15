let marks=[90,78,65,98]
//minimum marks
let min=marks[0]
//traversal
for(let i=0;i<marks.length;i++){
    if(min>marks[i])
        min=marks[i]
}
//min marks 
console.log(min)
