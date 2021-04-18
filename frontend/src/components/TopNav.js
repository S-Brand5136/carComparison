import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  RadioGroup,
  makeStyles,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {});

const TopNav = () => {
  const classes = useStyles();
  const searchTerm = useState("");

  const clickHandler = () => {};

  return <Box component="nav">Hello World</Box>;
};

export default TopNav;
