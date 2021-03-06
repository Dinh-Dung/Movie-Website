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
import MoviePage from "../../pages/movie/Movie";
import UserPage from "../../pages/users/Users";
import CategoryPage from "../../pages/category/Category"
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
              <Route path="/app/movie" component={MoviePage} />
              <Route path="/app/users" component={UserPage} />
              <Route path="/app/categorys" component={CategoryPage}/>

            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
