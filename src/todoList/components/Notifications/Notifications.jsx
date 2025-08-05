import React from "react";
import classes from "../Notifications/notifications.module.css";
import Notification from "../Notification/Notification";

export default function Notifications({ notifications }) {
  return (
    <div className={classes["noti-wrapper"]}>
      {notifications &&
        notifications.map((noti) => (
          <Notification key={`Noti-${noti.id}`} noti={noti} />
        ))}
    </div>
  );
}
