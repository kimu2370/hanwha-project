import React, {useState, useCallback, useMemo} from 'react';
import {withStyles} from '@material-ui/core/styles';
import styled from 'styled-components';
import {Tabs, Tab} from '@material-ui/core';
import {useHistory, useLocation} from 'react-router-dom';

const NavBar = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const history = useHistory();

    const tabs = useMemo(
        () => [
            {id: 1, label: 'Home', path: '/'},
            {id: 2, label: 'About', path: '/about'},
            {id: 3, label: 'Blog', path: '/post'},
        ],
        []
    );

    const moveToClickedPage = useCallback(
        path => {
            history.push(path);
        },
        [history]
    );

    const handleChange = useCallback((e, value) => {
        setCurrentTab(value);
    }, []);

    return (
        <Flex>
            <Tabs value={currentTab} indicatorColor="primary" onChange={handleChange}>
                {tabs.map(tab => (
                    <Tab
                        key={tab.id}
                        label={tab.label}
                        onClick={() => moveToClickedPage(tab.path)}
                    />
                ))}
            </Tabs>
        </Flex>
    );
};

export default NavBar;

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    border: 1px solid red;
`;
