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

  const onEditTask = (id, data) => {
    return [...tasks].map((val) =>
      val.id === id ? { ...tasks, ...data } : tasks
    );
  };

  return (
    <>
      <div className="main-wrapper">
        <TaskList onEditTask={onEditTask} tasks={tasks} title="Active" />
        <TaskList onEditTask={onEditTask} tasks={tasks} title="Completed" />
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
