import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState("All")

  const handleDeleteTask = (deletedTask) => {
    setTasks(tasks.filter((task) => task !== deletedTask))
  }

  const handleFormSubmit = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const tasksToDisplay = tasks.filter((task) => categories === "All" || categories === task.category)
  const categoriesToDisplay = CATEGORIES.filter((category) => category !== "All")

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={categories} onSelectCategory={setCategories} />
      <NewTaskForm categories={categoriesToDisplay} onTaskFormSubmit={handleFormSubmit} />
      <TaskList tasks={tasksToDisplay} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;











// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";
// import { CATEGORIES, TASKS } from "../data";


// function App() {
//   const [tasks, setTasks] = useState(TASKS);
//   const [categories, setCategories] = useState(CATEGORIES);

//   const handleDeleteTask = (deletedTask) => {
//     // console.log(deletedTask)
//     const tasksToDisplay = tasks.filter((task) => deletedTask.text !== task.text)
//     setTasks(tasksToDisplay)
//   }

//   const handleAddNewTask = (newTask) => {
//     setTasks([...tasks, newTask])
//   }

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter categories={categories} />
//       <NewTaskForm categories={categories} handleAddNewTask={handleAddNewTask} />
//       <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
//     </div>
//   );
// }

// export default App;
