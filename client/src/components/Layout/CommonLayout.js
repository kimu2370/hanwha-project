import React from "react";
import styled from "styled-components";

import NavBar from "components/NavBar";
import Footer from "components/Parts/Footer";

const CommonLayout = ({children}) => {
    return (
        <Wrapper>
            <NavbarWrapper>
                <NavBar />
            </NavbarWrapper>
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
    width: 100%;
`;

const NavbarWrapper = styled.div`
    width: 100%;
    padding: 8px 0;
    color: gray;
    > div {
        margin: 0 auto;
        max-width: 1180px;
    }
`;
