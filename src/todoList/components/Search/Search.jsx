import React, { useEffect, useState } from "react";
import classes from "./search.module.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Search({ setSearchGlobal, searchTasks }) {
  const [searchText, setSearchText] = useState("");
  const [isClear, setIsClear] = useState(false);

  useEffect(() => {
    if (searchText) {
      setIsClear(true);
      setSearchGlobal(searchText);
      return;
    }
    setIsClear(false);
    setSearchGlobal("");
  }, [searchText]);

  const onClear = () => {
    setSearchText("");
    setIsClear(false);
  };

  return (
    <div className={classes.search}>
      <TextField
        label="Search..."
        variant="outlined"
        fullWidth
        value={searchText}
        onInput={(e) => setSearchText(e.target.value)}
      />

      {isClear && (
        <IconButton onClick={onClear} className={classes.clear}>
          <CloseIcon />
        </IconButton>
      )}
    </div>
  );
}
