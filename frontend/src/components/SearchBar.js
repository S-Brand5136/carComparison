import React, { useState } from "react";
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { ArrowDownwardRounded } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className={classes.appBar} color="primary" elevation="0">
      <Toolbar>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="text"
          onClick={handleClick}
        >
          All Manufacturers <ArrowDownwardRounded />
        </Button>
        <Menu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>Ford</MenuItem>
          <MenuItem>Audi</MenuItem>
          <MenuItem>Toyota</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default SearchBar;
