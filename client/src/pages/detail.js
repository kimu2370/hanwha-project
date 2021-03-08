import React, {useState, useEffect, useMemo, useContext} from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';
import marked from 'marked';

import HideContext from 'Context/HideContext';
import Markdown from 'components/Markdown';
import CommonLayout from 'components/Layout/CommonLayout';
import Tags from 'components/Blog/Tags';

const API_HOST = process.env.REACT_APP_URL;

const Detail = React.forwardRef((props, ref) => {
    const [markdown, setMarkdown] = useState('');
    const location = useLocation();
    const post = useMemo(() => location.state, [location.state]);
    const {isHide, handleHide} = useContext(HideContext);

    useEffect(() => {
        isHide && handleHide(false);
    }, [isHide, handleHide]);

    useEffect(() => {
        if (ref && ref.current) {
            ref.current.scrollIntoView(true);
        }
    }, [ref]);

    useEffect(() => {
        fetch(`${API_HOST}/markdown/${post.filename}.md`)
            .then(res => res.text())
            .then(text => {
                const markedText = marked(text);
                setMarkdown(markedText);
            });
    }, [post.filename]);

    return (
        <CommonLayout>
            <Wrapper>
                <Title>{post.title}</Title>
                <SubTitle>{post.subTitle}</SubTitle>
                <Writer>
                    by <Name>SEUNGHYUN</Name>
                </Writer>
                <Created>Posted on Feb. 6, 2021, 1:13 p.m.</Created>
                <Img src={post.thumbnail} alt="image" />
                <Markdown children={markdown} allowDangerousHtml />
                <StyledTags list={post.tags} />
            </Wrapper>
        </CommonLayout>
    );
});

export default React.memo(Detail);

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
    font-size: 2rem !important;
    margin: 0 0 1rem 0 !important;
`;

const SubTitle = styled.h5`
    font-size: 1.5rem !important;
    margin: 0 !important;
    opacity: 0.5;
`;

const Writer = styled.p`
    font-size: 1rem;
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
    font-weight: 600;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Img = styled.img.attrs(() => ({
    alt: 'image',
}))`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 1rem;
    border-radius: 0.25rem;
`;

const StyledTags = styled(Tags)`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 1rem;
`;
