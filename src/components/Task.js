import React from "react";

function Task({ category, text, task, onDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDelete(task)} >X</button>
    </div>
  );
}

export default Task;


















// import React from "react";

// function Task({ task, handleDeleteTask }) {
//   const handleDelete = () => {
//     handleDeleteTask(task);
//   }

//   const { category, text } = task

//   return (
//     <div className="task">
//       <div className="label">{category}</div>
//       <div className="text">{text}</div>
//       <button
//         className="delete"
//         onClick={handleDelete}
//         // onClick={() => handleDeleteTask(task)}
//       >
//         X
//       </button>
//     </div>
//   );
// }

// export default Task;
