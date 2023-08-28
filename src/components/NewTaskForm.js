import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newText, setNewText] = useState("")
  const [newCategory, setNewCategory] = useState("Code")

  const optionElements = categories.map((category) => (
    <option key={category}>{category}</option>
  ))

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({
      text: newText,
      category: newCategory
    });
    setNewText("");
    setNewCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} >
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;









// import React, { useState } from "react";

// function NewTaskForm({ categories, handleAddNewTask }) {
//   const [newText, setNewText] = useState("")
//   const [newCategories, setNewCategories] = useState("Code")

//   function handleNewTextChange(e) {
//     setNewText(e.target.value)
//   }

//   function handleNewCategoryChange(e) {
//     setNewCategories(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let newTask = {
//       text: newText,
//       category: newCategories,
//     }
//     console.log(newTask)
//     handleAddNewTask(newTask)
//     setNewText("")
//     setNewCategories("Code")
//   }

//   return (
//     <form className="new-task-form" onSubmit={handleSubmit}>
//       <label>
//         Details
//         <input type="text" name="text" onChange={handleNewTextChange} value={newText} />
//       </label>
//       <label>
//         Category
//         <select name="category" onChange={handleNewCategoryChange} value={newCategories}>
//           {categories.map((category) => (
//             category !== "All" ? (
//               <option key={category} value={category}>{category}</option>
//             ) : null
//           ))}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;













// import React, { useState } from "react";

// function NewTaskForm({ categories, handleAddNewTask }) {

//   const [formData, setFormData] = useState({
//     newText: "",
//     newCategory: "Code",
//   })

//   function handleNewChange(e) {
//     const { name, value } = e.target

//     setFormData((formData) => ({
//       ...formData,
//       [name]: value,
//     }))
//   }

//   const { newText, newCategory } = formData

//   function handleSubmit(e) {
//     e.preventDefault();

//     let newTask = {
//       text: newText,
//       category: newCategory,
//     }
//     // console.log('new task:', newTask);

//     handleAddNewTask(newTask);
//     setFormData({
//       newText: "",
//       newCategory: "Code",
//     })
//   }

//   return (
//     <form className="new-task-form" onSubmit={handleSubmit}>
//       <label>
//         Details
//         <input type="text" name="newText" value={newText} onChange={handleNewChange} />
//       </label>
//       <label>
//         Category
//         <select name="newCategory" value={newCategory} onChange={handleNewChange}>
//           {categories.map((category) => (
//             category !== "All" ? (
//               <option key={category} value={category}>{category}</option>
//             ) : null
//           ))}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;
