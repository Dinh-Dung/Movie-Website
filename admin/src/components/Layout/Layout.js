import React from "react";
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
// styles
import useStyles from "./styles";
// components
import Header from "../Header";
import Sidebar from "../Sidebar";
// pages
import Dashboard from "../../pages/dashboard";
import Movie from "../../pages/movie/Movie";
import Users from "../../pages/users/Users";
import Catagory from "../../pages/catagory/catagory"
import SubCatagory from "../../pages/subcategory/subcategory"
// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/movie" component={Movie} />
              <Route path="/app/users" component={Users} />
              <Route path="/app/catagorys" component={Catagory}/>
              <Route path={"/app/subcategory"} component={SubCatagory}/>
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
