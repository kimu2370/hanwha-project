import React from 'react';
import styled from 'styled-components';

import Footer from 'components/Parts/Footer';

const CommonLayout = ({children}) => {
    return (
        <Wrapper>
            {children}
            <Footer>Copyright © Hanwha project 2021</Footer>
        </Wrapper>
    );
};

export default CommonLayout;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: -1;
    width: 100%;
`;
