/*ASSIGNMENT 2:
-------------
Student Performance Dashboard
You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//1.
let pass=students.filter(ele=>ele.marks>=40)
console.log(pass)

//2.
let grade=students.map(ele=>{
  let g;
  if(ele.marks>=90){
    g="A"
  }else if(ele.marks>=75){
    g="B"
  }else if(ele.marks>=60){
    g="C"
  }else{
    g="D"
  }
  return {name:ele.name,marks:ele.marks,grade:g}
})
console.log(grade)

//3.
let avg=students.reduce((acc,ele)=>acc+ele.marks,0)
console.log(avg/students.length)

//4.
let score=students.find(ele=>ele.marks===92)
console.log(score)

//5.
let index1=students.findIndex(ele=>ele.name==="Kiran")
console.log(index1)