
                  // TODO: Import task functions
                   import {addTask,completeTask,getAllTasks} from './task.js';
                  // Test your module system

                  // 1. Add some tasks
                  addTask("fssdsdjfdfg","high","2026-03-01")
                  addTask("fssd","high","2026-04-01")
                  // 2. Display all tasks
                  let tasks=getAllTasks()
                  console.log(tasks)

                  // 3. Complete a task
                  console.log(completeTask(1))
                  // 4. Display all tasks again */
                   console.log(getAllTasks())