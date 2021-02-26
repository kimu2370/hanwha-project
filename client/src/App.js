import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import styled from "styled-components";

import Routes from "./routes";
import NavBar from "components/NavBar";
import Container from "components/Parts/Container";

const App = () => {
    return (
        <Router>
            <Route
                render={({location}) =>
                    (
                        <>
                            <Nav>
                                <Container>
                                    <NavBar />
                                </Container>
                            </Nav>
                            <Main path={location.pathname}>
                                <Container>
                                    <Routes location={location} />
                                </Container>
                            </Main>
                            <Footer>Copyright © Hanwha project 2021</Footer>
                        </>
                    ).props.children
                }
            />
        </Router>
    );
};
export default App;

const Nav = styled.nav`
    > div {
        padding: 8px 0;
        background-color: #f8f9fa;
    }
`;

const Main = styled.main`
    width: 100%;
    overflow: hidden;
    height: calc(100vh - 134px);
    background-color: ${p => p.path === "/" && p.theme.gdacColor};
`;

const Footer = styled.footer`
    text-align: center;
    background-color: #343a40;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    padding: 2rem 0;
`;
