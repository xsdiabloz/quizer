import React, { useState } from "react";
import classes from "../Task/task.module.css";
import Checkbox from "@mui/material/Checkbox";

export default function Task({ task, onEditTask }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isDone, setIsDone] = useState(task.done);
  const [taskTitle, setTaskTitle] = useState(task.title ?? "");
  const [taskDesc, setTaskDesc] = useState(task.desc ?? "");
  const [isShowDialog, setIsShowDialog] = useState(false);

  return (
    <div className={classes.task}>
      <div className={classes["task-check"]}></div>
      <Checkbox />
      <div className={classes["task-info"]}>
        <h2 className={classes["task-info_title"]}>{task.title}</h2>
        <p className={classes["task-info_desc"]}>{task.desc}</p>
      </div>

      <div className={classes["task-action"]}></div>
    </div>
  );
}
