import React, { useEffect, useState } from "react";
import classes from "./taskList.module.css";
import Task from "../Task/Task";

export default function TaskList({
  tasks,
  title,
  onEditTask,
  deleteTask,
  sortBy,
}) {
  const [sortTasks, setSortTasks] = useState([]);

  useEffect(() => {
    setSortTasks(
      [...tasks].filter((val) => (sortBy ? val[sortBy] : !val.completed))
    );
  }, [tasks, sortBy]);

  return (
    <>
      <div className={classes.wrapper}>
        <h2 className={classes["list-title"]}>{title}</h2>
        <div className={classes["task-list"]}>
          {sortTasks.length > 0 ? (
            sortTasks.map((task) => (
              <Task
                deleteTask={deleteTask}
                onEditTask={onEditTask}
                task={task}
                key={`${task.title}-${task.completed}-${task.id}`}
              />
            ))
          ) : (
            <p style={{ textAlign: "center", fontSize: "23px" }}>No tasks...</p>
          )}
        </div>
      </div>
    </>
  );
}
