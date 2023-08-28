import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  const taskComponents =  tasks.map((task) => (
    <Task key={task.text} category={task.category} text={task.text} task={task} onDelete={onDelete} />
  ))

  return (
    <div className="tasks">
      {taskComponents}
    </div>
  );
}

export default TaskList;








// import React from "react";
// import Task from "./Task";

// function TaskList({ tasks, handleDeleteTask }) {  
//   return (
//     <div className="tasks">
//       {tasks.map((task) => (
//         <Task key={task.text} task={task} handleDeleteTask={handleDeleteTask} />
//       ))}
//     </div>
//   );
// }

// export default TaskList;