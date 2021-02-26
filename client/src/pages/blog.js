import React, {useState, useCallback, useEffect, useRef} from "react";
import styled from "styled-components";
import Scrollbars from "react-custom-scrollbars";

import Button from "components/Parts/Button";
import Post from "components/Blog/Post";

const Blog = () => {
    return (
        <Container>
            <Title>
                Blog <Tag>programming</Tag>
            </Title>
            <ScrollPosts autoHeight autoHeightMax={735} autoHide autoHideTimeout={500}>
                <StyledPost />
                <StyledPost />
                <StyledPost />
            </ScrollPosts>
        </Container>
    );
};

export default Blog;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`;

const ScrollPosts = styled(Scrollbars)`
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

const StickyBox = styled.div`
    position: sticky;
`;
