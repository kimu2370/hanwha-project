import React, {useCallback} from 'react';
import styled from 'styled-components';

import {FaArrowAltCircleUp} from 'react-icons/fa';
import Button from 'components/Parts/Button';
import Post from 'components/Blog/Post';
import CommonLayout from 'components/Layout/CommonLayout';
import ButtonBase from 'components/Parts/Button';

const Blog = React.forwardRef((props, ref) => {
    const handleClickUp = useCallback(() => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }, [ref]);

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
                            <StyledButton>GO!</StyledButton>
                        </CardBody>
                    </CardBox>
                    <CardBox>
                        <CardHeader>Categories</CardHeader>
                        <Categories>
                            {/* mockup data */}
                            <li>
                                <button>Programming(2)</button>
                            </li>
                            <li>
                                <button>미분류(1)</button>
                            </li>
                        </Categories>
                    </CardBox>
                </StickyBox>
            </Wrapper>
            <ArrowUp onClick={handleClickUp} />
        </CommonLayout>
    );
});

export default Blog;

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

const StickyBox = styled.div`
    margin-top: 3.5rem;
`;

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    margin-bottom: 2rem;
`;

const CardHeader = styled.div`
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

const Categories = styled(CardBody)`
    flex-direction: column;
    > li {
        margin-bottom: 1rem;
    }
    > li > button {
        font-size: 1rem;
        outline: none;
        border: none;
        background-color: #ffffff;
        color: dodgerblue;
        :hover {
            cursor: pointer;
            text-decoration: underline;
            opacity: 0.8;
        }
    }
`;

const SearchInput = styled.input.attrs(() => ({
    placeholder: 'Search for...',
}))`
    width: 100%;
    padding: 5px;
    font-size: 1rem;
`;

const StyledButton = styled(ButtonBase)`
    padding: 10px;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    background-color: #6c757d;
`;

const Title = styled.h1`
    text-align: left;
    font-size: 2.5rem;
    font-weight: 500;
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
    color: #ffffff;
`;

const ArrowUp = styled(FaArrowAltCircleUp).attrs(() => ({
    fill: 'gray',
    stroke: 'gray',
    strokeWidth: 20,
}))`
    position: fixed;
    font-size: 3rem;
    right: 80px;
    bottom: 36px;
    z-index: 100;
    background-color: #ffffff;
    border-radius: 50%;

    :hover {
        transform: scale(1.07);
        transition: transform 200ms;
        cursor: pointer;
        opacity: 0.8;
    }
`;
