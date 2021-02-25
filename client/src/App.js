import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import Routes from './routes';
import NavBar from 'components/NavBar';

const App = () => {
    return (
        <Router>
            <Route
                render={({location}) =>
                    (
                        <>
                            <NavBar />
                            <Div>
                                <Routes location={location} />
                            </Div>
                        </>
                    ).props.children
                }
            />
        </Router>
    );
};
export default App;

const Div = styled.div`
    width: 100%;
    position: absolute;
`;
