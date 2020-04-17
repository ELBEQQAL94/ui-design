import React from "react";
import { useStyles } from "../useStyles";

const Lessons = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <h1>Lssons Page!</h1>
    </main>
  );
};

export default Lessons;
