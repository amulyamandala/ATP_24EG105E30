
                    // TODO: Import validator functions
                     import {validateTitle,validatePriority,validateDueDate} from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                      /*const title1=validateTitle(title)
                      const priority1=validatePriority(priority)
                      const dueDate1=validateDueDate(dueDate)*/
                      if(validateTitle(title)&& validatePriority(priority) && validateDueDate(dueDate)){
                        tasks.push({title,priority,dueDate})
                        return "task added successfully"
                      }
                      return "false"

                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {//56 
                     return tasks;
                     
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                    // return success/error message
                    //if(taskId && taskId > 0 && taskId <= tasks.length){
                     // tasks[taskId-1].completed = true;
                      return "task completed"}
                    //}}

                  // Export functions
                  export {addTask,completeTask,getAllTasks}