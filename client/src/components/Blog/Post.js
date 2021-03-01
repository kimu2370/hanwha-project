import React, {useState, useCallback, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import marked from 'marked';

import Tags from 'components/Blog/Tags';
import Button from 'components/Parts/Button';

const Post = ({...p}) => {
    const history = useHistory();
    const [markdown, setMarkdown] = useState('');

    const replaceOverText = useCallback(text => {
        // fetched data의 blog text에 생략기호 대체.
        if (typeof text !== 'string') return;

        const LIMIT_TEXT_LEN = 300;
        const ELLIPSIS = '...';
        let result = '';

        if (LIMIT_TEXT_LEN <= text.length) {
            result = text.slice(0, LIMIT_TEXT_LEN) + ELLIPSIS;
        }
        return result;
    }, []);

    const moveToPage = useCallback(() => {
        history.push('board/1');
    }, [history]);

    useEffect(() => {
        fetch('http://localhost:3000/markdown/post-1.md')
            .then(res => {
                return res.text();
            })
            .then(text => {
                const markedText = marked(text);
                setMarkdown(markedText);
            });
    }, []);

    return (
        <Box {...p}>
            <Img
                src="https://doitdjango.com/media/blog/images/2021/02/06/nicole-baster-6_y5Sww0-h4-unsplash.jpg"
                alt="image"
            />
            <StyleMD children={markdown} allowDangerousHtml />
            <Tags />
            <ReadMore onClick={moveToPage}>Read More</ReadMore>
        </Box>
    );
};

export default Post;

const StyleMD = styled(ReactMarkdownWithHtml)`
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 6; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 820px;
    position: relative;

    background-color: #ffffff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;

    > :not(:first-child) {
        padding: 0 1.25rem;
    }

    > * {
        margin-bottom: 1.5rem;
    }
`;

const Img = styled.img.attrs(() => ({
    alt: 'image',
}))``;

const ReadMore = styled(Button)`
    display: flex;
    justify-content: flex-start;

    width: 97px;
    margin: 0 1.25rem 1.5rem 1.2rem;
    font-size: 1rem;
    line-height: 2.5;

    color: #fff;
    background-color: #007bff;
    border-color: #007bff;

    ::after {
        margin-left: 5px;
        content: '→';
    }
`;

const Created = styled.footer``;
