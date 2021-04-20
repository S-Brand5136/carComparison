import React from "react";

import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  makeStyles,
} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: "0",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  title: {
    marginTop: "1rem",
    fontWeight: "800",
    letterSpacing: "1.1px",
  },
}));

const SideBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.toolbar}>
          <Typography
            className={classes.title}
            variant="h5"
            component="h5"
            align="center"
            color="textPrimary"
          >
            Car Competition
          </Typography>
        </div>
        <Divider />
        <List></List>
      </Drawer>
    </div>
  );
};

export default SideBar;
