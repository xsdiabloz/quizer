import { useState } from "react";
import "./App.css";
import TaskList from "./todoList/components/TaskList/TaskList";
import { taskObject } from "./todoList/components/taskObject/taskObject";
import AddBtn from "./todoList/components/Addbtn/AddBtn";
import AddForm from "./todoList/components/Addform/AddForm";
import Search from "./todoList/components/Search/Search";
import useSearchtasks from "./todoList/Hooks/useSearchTasks";

function App() {
  const [tasks, setTasks] = useState(taskObject);
  const [searchGlobal, setSearchGlobal] = useState("");

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
    const updatedTasks = tasks.map((val) =>
      val.id === id ? { ...val, ...data } : val
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    setTasks([...tasks].filter((val) => val.id !== id));
  };

  const searchTasks = useSearchtasks(tasks, searchGlobal);

  return (
    <>
      <Search setSearchGlobal={setSearchGlobal} searchTasks={searchTasks} />
      <div className="main-wrapper">
        <TaskList
          deleteTask={deleteTask}
          onEditTask={onEditTask}
          tasks={searchTasks}
          title="Active"
          sortBy={null}
        />
        <TaskList
          sortBy="completed"
          deleteTask={deleteTask}
          onEditTask={onEditTask}
          tasks={searchTasks}
          title="Completed"
        />
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
