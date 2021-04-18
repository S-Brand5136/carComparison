import React from "react";
import {
  Accordion,
  FormGroup,
  FormControlLabel,
  makeStyles,
  Switch,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({});

const SearchForm = () => {
  const classes = useStyles();

  return (
    <Paper component="form" elevation="0">
      <FormGroup row>
        <FormControlLabel control={<Switch name="model" />} />
      </FormGroup>
    </Paper>
  );
};

export default SearchForm;
