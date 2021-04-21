import React from "react";

import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { DriveEta, Compare, Settings } from "@material-ui/icons";

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
  welcomeMessage: {
    backgroundColor: "#00bcd4",
    color: "white",
    padding: "1rem",
  },
  message: {
    marginTop: "1rem",
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
        <Box className={classes.welcomeMessage}>
          <Typography variant="body2" component="p">
            Hi, Welcome to Car Competition!
          </Typography>
          <Typography className={classes.message} variant="body2" component="p">
            Select your cars and see which one wins
          </Typography>
        </Box>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <DriveEta />
            </ListItemIcon>
            <ListItemText>Saved Cars</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Compare />
            </ListItemIcon>
            <ListItemText>Compare Cars</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
