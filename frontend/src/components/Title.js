import React, { useState } from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontWeight: "400",
    letterSpacing: "3px",
  },
});

const Title = () => {
  const classes = useStyles();

  return (
    <Box component="nav">
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Typography className={classes.title} variant="h2" component="h1">
              Car Comparison
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Title;
