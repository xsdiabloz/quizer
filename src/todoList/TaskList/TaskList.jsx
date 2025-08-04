import React from "react";
import classes from "../TaskList/taskList.module.css";
import Task from "../Task/Task";

export default function TaskList({ tasks, title, onEditTask, deleteTask }) {
  return (
    <>
      <div className={classes.wrapper}>
        <h2 className={classes["list-title"]}>{title}</h2>
        <div className={classes["task-list"]}>
          {tasks.length > 0
            ? tasks.map((task) => (
                <Task
                  deleteTask={deleteTask}
                  onEditTask={onEditTask}
                  task={task}
                  key={task.id}
                />
              ))
            : "No tasks"}
        </div>
      </div>
    </>
  );
}
