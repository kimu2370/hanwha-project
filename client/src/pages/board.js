import React from 'react';
import styled from 'styled-components';

import CommonLayout from 'components/Layout/CommonLayout';

const Board = () => {
    return (
        <CommonLayout>
            <Wrapper>
                <Title>623페이지 정정: letsencrypt 인증서 발급</Title>
                <SubTitle>Black Lives Matter 운동과 IT</SubTitle>
                <Writer>
                    by <Name>SEUNGHYUN</Name>
                </Writer>
                <Created>Posted on Feb. 6, 2021, 1:13 p.m.</Created>
                <Img
                    src="https://doitdjango.com/media/blog/images/2021/02/06/nicole-baster-6_y5Sww0-h4-unsplash.jpg"
                    alt="image"
                />
            </Wrapper>
        </CommonLayout>
    );
};

export default Board;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 1180px;

    margin-top: 3rem;

    > * {
        margin-bottom: 1rem;
    }
`;

const Title = styled.h1`
    font-size: 2rem;
`;

const SubTitle = styled.h5`
    font-size: 1.25rem;
    opacity: 0.5;
`;

const Writer = styled.p`
    font-size: 1.25rem;
    font-weight: 300;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Name = styled.button`
    outline: none;
    border: none;
    background-color: #ffffff;
    color: dodgerblue;
    font-size: 1.2rem;
    :hover {
        cursor: pointer;
        text-decoration: underline;
        opacity: 0.8;
    }
`;

const Created = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Img = styled.img.attrs(() => ({
    alt: 'image',
}))`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
