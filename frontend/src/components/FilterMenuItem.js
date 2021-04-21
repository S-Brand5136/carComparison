import React, { useState } from "react";

import {
  Button,
  Grid,
  FormControl,
  FormLabel,
  FormGroup,
  Menu,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  icon: {
    paddingLeft: "1rem",
  },
  button: {
    padding: ".5rem 0 0 0",
    color: "black",
    fontSize: "11px",
  },
}));

const FilterMenuItem = ({ arrayOfItems, filterLabel }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item xs={2}>
      <FormControl>
        <FormLabel color="primary">Rating</FormLabel>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color="primary"
          variant="text"
          className={classes.button}
        >
          Open Menu <ArrowDropDown className={classes.icon} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Rating</MenuItem>
        </Menu>
      </FormControl>
    </Grid>
  );
};

export default FilterMenuItem;
