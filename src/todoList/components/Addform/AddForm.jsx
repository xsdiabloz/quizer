import React, { useEffect, useState } from "react";
import classes from "./addForm.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function AddForm({ addNewTask, closeModal }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(title && title.trim());
  const [isDescValid, setIsDescValid] = useState(desc && desc.trim());

  useEffect(() => {
    setIsTitleValid(title && title.trim());
    setIsDescValid(desc && desc.trim());
  }, [title, desc]);

  const addTask = (e) => {
    if (!isTitleValid && !isDescValid) return;

    e.preventDefault();

    addNewTask({
      title,
      desc,
    });
    closeModal();
    setTitle("");
    setDesc("");
  };

  return (
    <>
      <form onSubmit={(e) => addTask(e)} className={classes["add-task-form"]}>
        <h2>New Task</h2>
        <div className={classes["task-title"]}>
          <TextField
            error={!isTitleValid}
            helperText={!isTitleValid && "Field should be filled"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Title"
          />
        </div>
        <div className={classes["task-desc"]}>
          <TextField
            error={!isDescValid}
            helperText={!isDescValid && "Field should be filled"}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            label="Description"
          />
        </div>
        <Button type="submit" variant="outlined">
          Add task
        </Button>
      </form>
    </>
  );
}
