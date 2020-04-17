import React from "react";
import { useStyles } from "../useStyles";

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <h1>Page Not Found!</h1>
    </main>
  );
};

export default PageNotFound;
