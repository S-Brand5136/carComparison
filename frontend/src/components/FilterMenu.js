import React from "react";
import FilterMenuItem from "./FilterMenuItem";

import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    paddingBottom: "1rem",
    borderBottom: "1px solid #00bcd4",
  },
});

const FilterMenu = () => {
  const classes = useStyles();

  return (
    <form>
      <Grid className={classes.root} container alignItems="flex-end">
        <Grid item xs={1}>
          <Typography align="left" color="textSecondary">
            Filter:{" "}
          </Typography>
        </Grid>
        <Grid item xs={11}>
          <Grid container>
            <FilterMenuItem />
            <FilterMenuItem />
            <FilterMenuItem />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default FilterMenu;
