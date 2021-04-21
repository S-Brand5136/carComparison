import React, { useEffect } from "react";
import FilterMenu from "./FilterMenu";
import SearchBar from "./SearchBar";

import { Box, Grid } from "@material-ui/core";

const CenterLayout = () => {
  useEffect(() => {}, []);

  return (
    <Box component="section">
      <SearchBar />
      <Grid container justify="center">
        <Grid item xs={12}>
          <FilterMenu />
        </Grid>
        <Grid item xs={8}>
          <Grid container justify="center"></Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CenterLayout;
