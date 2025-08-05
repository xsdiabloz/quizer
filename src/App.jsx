import { useState, createContext } from "react";
import "./App.css";
import TaskList from "./todoList/components/TaskList/TaskList";
import { taskObject } from "./todoList/components/taskObject/taskObject";
import AddBtn from "./todoList/components/Addbtn/AddBtn";
import AddForm from "./todoList/components/Addform/AddForm";
import Search from "./todoList/components/Search/Search";
import useSearchtasks from "./todoList/Hooks/useSearchTasks";
import deleteTask from "./todoList/helpers/deleteTasks/deleteTasks";
import addTasks from "./todoList/helpers/addTask/addTasks";
import editTasks from "./todoList/helpers/editTasks/editTasks";
import Notifications from "./todoList/components/Notifications/Notifications";
import useNoti from "./todoList/Hooks/useNoti";

export const NotifyContext = createContext(null);

function App() {
  const [tasks, setTasks] = useState(taskObject);
  const [searchGlobal, setSearchGlobal] = useState("");

  const { notifications, showNoti, removeNotiById } = useNoti();

  const addNewTask = addTasks(tasks, setTasks);
  const onEditTask = editTasks(tasks, setTasks);
  const onDeleteTask = deleteTask(tasks, setTasks);
  const searchTasks = useSearchtasks(tasks, searchGlobal);

  return (
    <NotifyContext.Provider value={{ notifications, showNoti, removeNotiById }}>
      <Notifications notifications={notifications} />
      <Search setSearchGlobal={setSearchGlobal} searchTasks={searchTasks} />
      <div className="main-wrapper">
        <TaskList
          deleteTask={onDeleteTask}
          onEditTask={onEditTask}
          tasks={searchTasks}
          title="Active"
          sortBy={null}
        />
        <TaskList
          sortBy="completed"
          deleteTask={onDeleteTask}
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
    </NotifyContext.Provider>
  );
}

export default App;
