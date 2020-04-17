import React from "react";
import { useStyles } from "../useStyles";

const Classes = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <h1>Classes page!</h1>
    </main>
  );
};

export default Classes;
