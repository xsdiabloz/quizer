import React, { useState } from "react";
import classes from "../Task/task.module.css";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Task({ task, onEditTask }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isDone, setIsDone] = useState(task.completed);
  const [taskTitle, setTaskTitle] = useState(task.title ?? "");
  const [taskDesc, setTaskDesc] = useState(task.desc ?? "");
  const [isShowDialog, setIsShowDialog] = useState(false);

  function onChangeDoneStatus() {
    setIsDone(!isDone);
    setTimeout(() => {
      onEditTask(task.id, {
        done: !isDone,
      });
    }, 50);
  }

  return (
    <div className={classes.task}>
      <div className={classes["task-check"]}></div>
      <Checkbox
        sx={{
          color: isDone ? "#D8D8D8" : "#539CFD",
          "&.Mui-checked": {
            color: isDone ? "#D8D8D8" : "#539CFD",
          },
        }}
        checked={isDone}
        onChange={() => onChangeDoneStatus()}
      />
      <div className={classes["task-info"]}>
        {isDone ? (
          <>
            <div className={classes["task-info_title-input"]}>
              <TextField
                label="Title"
                defaultValue={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </div>
            <div className={classes["task-info_desc-input"]}>
              <TextField
                label="Desc"
                defaultValue={taskDesc}
                onChange={(e) => setTaskDesc(e.target.value)}
              />
            </div>
          </>
        ) : (
          <>
            <h2 className={classes["task-info_title"]}>{task.title}</h2>
            <p className={classes["task-info_desc"]}>{task.desc}</p>
          </>
        )}
      </div>
      <div className={classes["task-action"]}>
        {isEdit ? (
          <>
            <IconButton>
              <CheckIcon />
            </IconButton>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </>
        ) : (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
}
