import React, {useState, useRef, useEffect, useContext} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HideContext from 'Context/hide/HideContext';

import Main from 'pages/main';
import About from 'pages/about';
import Blog from 'pages/blog';
import Detail from 'pages/detail';

import NavBar from 'components/NavBar';

const Routes = () => {
    const topRef = useRef(null);

    const {isHide} = useContext(HideContext);
    return (
        <Router>
            <NavbarWrapper ref={topRef}>{!isHide && <NavBar />}</NavbarWrapper>
            <Switch>
                <Route exact path="/" children={<Main />} />
                <Route path="/blog" children={<Blog ref={topRef} />} />
                <Route path="/about" children={<About />} />
                <Route path="/detail/:id" children={<Detail ref={topRef} />} />
            </Switch>
        </Router>
    );
};
export default Routes;

const NavbarWrapper = styled.div`
    width: 100%;
    padding: 12px 0;
    color: gray;
    > div {
        margin: 0 auto;
        max-width: 1180px;
    }
`;
