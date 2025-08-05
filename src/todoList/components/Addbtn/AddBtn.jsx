import React, { useState } from "react";
import classes from "./addBtn.module.css";
import AddForm from "../Addform/AddForm";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";

export default function AddBtn({ children }) {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <Dialog open={isModal} onClose={() => setIsModal(false)}>
        {children(() => setIsModal(false))}
      </Dialog>
      <div onClick={() => setIsModal(true)} className={classes["add-task-btn"]}>
        <AddIcon sx={{ width: 30, color: "white" }} />
      </div>
    </>
  );
}
