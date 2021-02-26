import React from "react";
import styled from "styled-components";

import {AiFillTags} from "react-icons/ai";
import Button from "components/Parts/Button";

const Post = ({...p}) => {
    return (
        <Box {...p}>
            <Img
                src="https://doitdjango.com/media/blog/images/2021/02/06/nicole-baster-6_y5Sww0-h4-unsplash.jpg"
                alt="image"
            />
            <Title>623페이지 정정: letsencrypt 인증서 발급</Title>
            <SubTitle>
                [PYCON 2017] 개발자 없는 통계업무 부서에서 Django+Pandas+Selenium+python-docx으로 통계업무도구 만들기
            </SubTitle>
            <Content></Content>
            <Tags>
                <Icon />
                <Tag>#장고</Tag>
                <Tag>#https</Tag>
                <Tag>#init-letsencrypt</Tag>
            </Tags>
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
`;

const Content = styled.main``;

const Tags = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled(AiFillTags)`
    font-size: 1.5rem;
    margin-right: 0.5rem;
`;

const Tag = styled(Button)`
    margin-right: 0.5rem;
`;

const ReadMore = styled(Button)``;

const Created = styled.footer``;
