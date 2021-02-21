import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Movie from "../Routes/Movie";
import Tv from "../Routes/Tv";
import Search from "../Routes/Search";
import Header from "./Header"

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Movie} />
                <Route path="/tv" exact component={Tv} />
                <Route path="/search" exact component={Search} />
                <Redirect from="*" to={"/"} />
            </Switch>
        </>
    </Router>
)