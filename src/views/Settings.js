import React from "react";
import { useStyles } from "../useStyles";

const Manage = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <h1>Manage page!</h1>
    </main>
  );
};

export default Manage;
