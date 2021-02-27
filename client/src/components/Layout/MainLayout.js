import React from "react";
import styled from "styled-components";

import NavBar from "components/NavBar";
import Footer from "components/Parts/Footer";

const MainLayout = ({children}) => {
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

const NavbarWrapper = styled.div`
    width: 100%;
    padding: 8px 0;
    color: gray;
    background-color: #f8f9fa;
    > div {
        margin: 0 auto;
        max-width: 1180px;
    }
`;
