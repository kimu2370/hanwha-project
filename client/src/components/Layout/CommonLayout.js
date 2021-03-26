import React from 'react';
import styled from 'styled-components';

import Footer from 'components/Parts/Footer';

const CommonLayout = ({children, ...p}) => {
    return (
        <Wrapper {...p}>
            {children}
            <Footer>Copyright © dev_Hyun 2021</Footer>
        </Wrapper>
    );
};

export default CommonLayout;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    position: absolute;
    z-index: -1;
    width: 100%;
`;
