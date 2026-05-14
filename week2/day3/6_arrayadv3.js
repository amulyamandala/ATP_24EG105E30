/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//1. filter() employees from IT department
let itDept=employees.filter(ele=>ele.department==="IT")
console.log(itDept)

//2. map() to add netSalary field
let bonus=employees.map(ele=>({
  name:ele.name,
  netSalary:ele.salary+(ele.salary*0.1)
}))
console.log(bonus)

//3. reduce() to calculate total salary payout
let totalSalary=employees.reduce((acc,ele)=>acc+ele.salary,0)
console.log(totalSalary)

//4. find() employee with salary 30000
let emp=employees.find(ele=>ele.salary===30000)
console.log(emp)

//5. findIndex() of employee "Neha"
let index2=employees.findIndex(ele=>ele.name==="Neha")
console.log(index2)