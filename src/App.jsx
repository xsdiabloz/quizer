import { useState } from "react";
import "./App.css";
import TaskList from "./todoList/TaskList/TaskList";
import { taskObject } from "./todoList/taskObject/taskObject";
import AddBtn from "./todoList/Addbtn/AddBtn";
import AddForm from "./todoList/Addform/AddForm";

function App() {
  const [tasks, setTasks] = useState(taskObject);

  const addNewTask = (data) => {
    setTasks([
      ...tasks,
      {
        id: tasks.at(-1)?.id + 1 || 1,
        ...data,
      },
    ]);
  };

  return (
    <>
      <div className="main-wrapper">
        <TaskList tasks={tasks} title="Active" />
        <TaskList tasks={tasks} title="Completed" />
      </div>
      <AddBtn>
        {(closeModal) => {
          return <AddForm closeModal={closeModal} addNewTask={addNewTask} />;
        }}
      </AddBtn>
    </>
  );
}

export default App;
