import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Main from "pages/main";
import About from "pages/about";
import Blog from "pages/blog";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" children={<Main />} />
                <Route path="/blog" children={<Blog />} />
                <Route path="/about" children={<About />} />
            </Switch>
        </Router>
    );
};
export default Routes;
