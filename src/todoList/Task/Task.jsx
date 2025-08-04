import React, { useState } from "react";
import classes from "../Task/task.module.css";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Task({ task, onEditTask, deleteTask }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isDone, setIsDone] = useState(task.completed);
  const [taskTitle, setTaskTitle] = useState(task.title ?? "");
  const [taskDesc, setTaskDesc] = useState(task.desc ?? "");
  const [isShowDialog, setIsShowDialog] = useState(false);

  function onChangeDoneStatus() {
    setIsDone(!isDone);
    setTimeout(() => {
      onEditTask(task.id, {
        completed: !isDone,
      });
    }, 50);
  }

  const acceptChanges = () => {
    if (taskTitle !== task.title || taskDesc !== task.desc) {
      onEditTask(task.id, {
        title: taskTitle,
        desc: taskDesc,
      });
    }
    setIsEdit(false);
  };

  const declineChanges = () => {
    setTaskTitle(taskTitle);
    setTaskDesc(taskDesc);
    setIsEdit(false);
  };

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
        {isEdit ? (
          <>
            <div className={classes["task-info_title-input"]}>
              <TextField
                label="Title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </div>
            <div className={classes["task-info_desc-input"]}>
              <TextField
                label="Desc"
                value={taskDesc}
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
            <IconButton onClick={acceptChanges}>
              <CheckIcon
                sx={{
                  color: isDone ? "#D8D8D8" : "#539CFD",
                }}
              />
            </IconButton>
            <IconButton onClick={declineChanges}>
              <CloseIcon
                sx={{
                  color: isDone ? "#D8D8D8" : "#539CFD",
                }}
              />
            </IconButton>
          </>
        ) : (
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon
              className={classes[isDone ? "icon-isDone" : "icon-notDone"]}
            />
          </IconButton>
        )}

        <IconButton onClick={() => deleteTask(task.id)}>
          <DeleteIcon
            sx={{
              color: isDone ? "#D8D8D8" : "#539CFD",
            }}
          />
        </IconButton>
      </div>
    </div>
  );
}
