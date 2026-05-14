// TODO: Export these validation functions
 // 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
 if(!title){
 return "title is required"
}
if(title && title.length>=3){
  return "title is valid"
}
 return "title must be at least 3 characters long"
 }
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
if((priority=="low")|| (priority=="medium")|| (priority=="high")){
return priority 
 }
}
 // 3. Validate due date (must be future date)
 function validateDueDate(date) {
return "valid date"
 }
export {validateTitle,validatePriority,validateDueDate}
 