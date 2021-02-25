import './style.css';

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import Main from 'pages/main';
import About from 'pages/about';
import Post from 'pages/post';

const Routes = ({location}) => {
    return (
        <TransitionGroup>
            <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
                <Switch location={location}>
                    <Route exact path="/" children={<Main />} />
                    <Route path="/about" children={<About />} />
                    <Route path="/post" children={<Post />} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
};
export default Routes;
