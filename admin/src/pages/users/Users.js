import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


// components
import PageTitle from "../../components/PageTitle/PageTitle";



// data



const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Users() {
  const classes = useStyles();
  return (
    <>
      <PageTitle title="Users" />
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
      <th scope="col">Pass</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Bịp</td>
      <td>094375834</td>
      <td>bip@gamil.com</td>
      <td>VanBip</td>
      <td></td>
      <td><a className="btn btn-sm btn-primary" href="">Delete</a></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Bịp</td>
      <td>094375834</td>
      <td>bip@gamil.com</td>
      <td>VanBip</td>
      <td></td>
      <td><a className="btn btn-sm btn-primary" href="">Delete</a></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Bịp</td>
      <td>094375834</td>
      <td>bip@gamil.com</td>
      <td>VanBip</td>
      <td></td>
      <td><a className="btn btn-sm btn-primary" href="">Delete</a></td>
    </tr>
  </tbody>
</table>
      
    </>
  );
}
