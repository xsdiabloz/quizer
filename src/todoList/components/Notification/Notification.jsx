import React from "react";
import classes from "../Notification/notification.module.css";
import Alert from "@mui/material/Alert";

export default function Notification({ noti }) {
  return (
    <div className={classes.noti} key={noti?.id ?? 0}>
      <Alert severity={noti.type}>{noti?.text ?? "text"}</Alert>
    </div>
  );
}
