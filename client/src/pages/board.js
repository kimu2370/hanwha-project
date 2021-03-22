import React, {useState} from 'react';
import styled from 'styled-components';

import CommonLayout from 'components/Layout/CommonLayout';
import StickyBox from 'components/Parts/StickyBox';

const Board = () => {
    return (
        <CommonLayout>
            <Wrapper>
                <Container>
                    <Title>게시판</Title>
                    <SubTitle>자유롭게 의견을 적어주세요.</SubTitle>
                </Container>
                <StickyBox />
            </Wrapper>
        </CommonLayout>
    );
};

export default Board;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1180px;
    margin-top: 3rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-right: 1.5rem;
`;

const Title = styled.h1`
    margin: 0 auto;
    font-size: 2.5rem;
    font-weight: 500;
`;

const SubTitle = styled.h4`
    padding-top: 1rem;
    margin: 0 auto;
    font-size: 1.25rem;
    font-weight: 300;
`;
