import React from "react";
import clsx from "clsx";

// @metrial components
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import { BookAlt } from "@styled-icons/boxicons-solid/BookAlt";
import { BookAdd } from "@styled-icons/boxicons-solid/BookAdd";
import { User } from "@styled-icons/boxicons-solid/User";

// components
import ActiveLink from "./ActiveLink";

// styles module
import { useStyles } from "../useStyles";

const MyDrawer = () => {
  const classes = useStyles();
  const open = true;
  const size = "30";

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}></div>
      <Divider />
      <List className="list-side-bar">
        <ActiveLink activeOnlyWhenExact path="/">
          <ListItemIcon>
            <User color="red" size={size} style={{ color: "#7B8FA5" }} />
          </ListItemIcon>
          <ListItemText style={{ color: "#7B8FA5" }} primary="Caroline" />
        </ActiveLink>

        <ActiveLink activeOnlyWhenExact path="/lessons">
          <ListItemIcon>
            <BookAlt size={size} style={{ color: "#7B8FA5" }} />
          </ListItemIcon>
          <ListItemText style={{ color: "#7B8FA5" }} primary="Lesson Plan" />
        </ActiveLink>

        <ActiveLink activeOnlyWhenExact path="/classes">
          <ListItemIcon>
            <BookAdd size={size} style={{ color: "#7B8FA5" }} />
          </ListItemIcon>
          <ListItemText
            style={{ color: "#7B8FA5" }}
            primary="Supplementary Classes"
          />
        </ActiveLink>

        <ActiveLink activeOnlyWhenExact path="/settings">
          <ListItemIcon>
            <SettingsIcon fontSize="large" style={{ color: "#7B8FA5" }} />
          </ListItemIcon>
          <ListItemText style={{ color: "#7B8FA5" }} primary="Settings" />
        </ActiveLink>
      </List>
    </Drawer>
  );
};

export default MyDrawer;
