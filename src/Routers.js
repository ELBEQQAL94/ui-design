import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStyles } from "./useStyles";

import SideBar from "./components/SideBar";

import Dashboard from "./views/Dashboard";
import Classes from "./views/Classes";
import Settings from "./views/Settings";
import Lessons from "./views/Lessons";
import PageNotFound from "./views/PageNotFound";

const Routers = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <SideBar />
        <Switch>
          <Route restricted={false} component={Dashboard} path="/" exact />
          <Route restricted={false} component={Classes} path="/classes" />
          <Route restricted={false} component={Settings} path="/settings" />
          <Route restricted={false} component={Lessons} path="/lessons" />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routers;
