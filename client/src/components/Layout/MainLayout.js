import React from 'react';
import styled from 'styled-components';

import Footer from 'components/Parts/Footer';

const MainLayout = ({children}) => {
    return (
        <Wrapper>
            {children}
            <Footer>Copyright © Hanwha project 2021</Footer>
        </Wrapper>
    );
};

export default MainLayout;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    color: #ffffff;
    background-color: ${p => p.theme.gdacColor};
`;
