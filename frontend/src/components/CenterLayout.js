import React, { useEffect } from "react";
import SearchForm from "./SearchForm";

import { Grid } from "@material-ui/core";
import searchForm from "./SearchForm";

const CenterLayout = () => {
  useEffect(() => {}, []);

  return (
    <Grid container justify="center">
      <Grid item xs={4}>
        <SearchForm />
      </Grid>
      <Grid item xs={8}>
        <Grid container justify="center"></Grid>
      </Grid>
    </Grid>
  );
};

export default CenterLayout;
