import React, {useCallback} from 'react';
import styled from 'styled-components';

import Tags from 'components/Blog/Tags';
import Button from 'components/Parts/Button';

const text = `[PYCON 2017] 개발자 없는 통계업무 부서에서 Django+Pandas+Selenium+python-docx으로
통계업무도구 만들기 <br />
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
Ipsum has been the industry's standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged. It was popularised in the 1960s with
the release of Letraset sheets containing Lorem Ipsum passages, and more recently
with desktop publishing software like Aldus PageMaker including versions of Lorem
Ipsum.`;

const Post = ({...p}) => {
    const replaceOverText = useCallback(text => {
        // fetched data의 blog text에 생략기호 대체.
        if (typeof text !== 'string') return;

        const LIMIT_TEXT_LEN = 300;
        const ELLIPSIS = '...';
        let result = '';

        if (LIMIT_TEXT_LEN <= text.length) {
            result = text.slice(0, LIMIT_TEXT_LEN) + ELLIPSIS;
        }
        return {__html: result};
    }, []);

    return (
        <Box {...p}>
            <Img
                src="https://doitdjango.com/media/blog/images/2021/02/06/nicole-baster-6_y5Sww0-h4-unsplash.jpg"
                alt="image"
            />
            <Title>623페이지 정정: letsencrypt 인증서 발급</Title>
            <SubTitle dangerouslySetInnerHTML={replaceOverText(text)} />
            <Content></Content>
            <Tags />
        </Box>
    );
};

export default Post;

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

const Img = styled.img``;

const Title = styled.h1`
    font-size: 2rem;
`;

const SubTitle = styled.h5`
    font-size: 1.25rem;
    opacity: 0.5;
`;

const Content = styled.main``;

const ReadMore = styled(Button)``;

const Created = styled.footer``;
