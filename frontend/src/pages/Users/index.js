import { Grid } from "@material-ui/core";
import React from "react";

const Users = () => {
  return (
    <>
      <Grid container>
        <Grid item md={6}>
          <h1>Hello</h1>
        </Grid>
        <Grid item md={6}>
          <h1>World</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default Users;
