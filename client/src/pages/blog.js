import React from "react";
import styled from "styled-components";

import Button from "components/Parts/Button";
import Post from "components/Blog/Post";
import CommonLayout from "components/Layout/CommonLayout";
import ButtonBase from "components/Parts/Button";

const Blog = () => {
    return (
        <CommonLayout>
            <Wrapper>
                <Container>
                    <Title>
                        Blog <Tag>programming</Tag>
                    </Title>
                    <Posts>
                        <StyledPost />
                        <StyledPost />
                        <StyledPost />
                    </Posts>
                </Container>
                <StickyBox>
                    <CardBox>
                        <CardHeader>Search</CardHeader>
                        <CardBody>
                            <SearchInput />
                            <StyledButton small>GO!</StyledButton>
                        </CardBody>
                    </CardBox>
                    <CardBox>
                        <CardHeader>Categories</CardHeader>
                        <CardBody></CardBody>
                    </CardBox>
                </StickyBox>
            </Wrapper>
        </CommonLayout>
    );
};

export default Blog;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1180px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-right: 1.5rem;
`;

const StickyBox = styled.div`
    position: fixed;
    margin-top: 4.3rem;
    flex: 1;
    padding-left: 910px;
`;

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    margin-bottom: 2rem;
`;

const CardHeader = styled.h5`
    padding: 12px 20px;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;
    background-color: rgba(0, 0, 0, 0.03);
`;

const CardBody = styled.div`
    display: flex;
    padding: 1.25rem;
`;

const SearchInput = styled.input`
    width: 100%;
    padding: 5px;
`;

const StyledButton = styled(ButtonBase)`
    padding: 10px;
`;

const Title = styled.h1`
    text-align: left;
    font-size: 2.5rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`;

const Posts = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledPost = styled(Post)`
    margin-bottom: 1.5rem;
`;

const Tag = styled(Button)`
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    background-color: gray;
`;
