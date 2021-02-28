import React from 'react';
import styled from 'styled-components';

import Mini from 'components/Blog/Mini';
import MainLayout from 'components/Layout/MainLayout';

const Main = () => {
    return (
        <MainLayout>
            <Content>
                <Section>
                    <Title>Hello React World</Title>
                    <P>리액트는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다.</P>
                    <List>
                        <Li>React는 상호작용이 많은 UI를 만들 때 생기는 어려움을 줄여줍니다.</Li>
                        <Li>애플리케이션의 각 상태에 대한 간단한 뷰만 설계하세요.</Li>
                        <Li>그럼 React는 데이터가 변경됨에 따라 적절한 컴포넌트만 갱신합니다.</Li>
                    </List>
                </Section>
                <Section>
                    <Title>Blog - Recent posts</Title>
                    <List>
                        <Mini />
                        <Mini />
                        <Mini />
                        <Mini />
                        <Mini />
                    </List>
                </Section>
            </Content>
        </MainLayout>
    );
};

export default Main;

const Content = styled.main`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1180px;
    justify-content: space-between;
`;

const Section = styled.section`
    margin-top: 3rem;
    max-width: 520px;
    min-width: 410px;
    font-size: 1rem;
    line-height: 1.5;
`;

const Title = styled.div`
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;

    > div:not(:last-child) {
        margin-bottom: 8px;
    }
`;

const P = styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
`;

const Li = styled.li`
    line-height: 1.8;
`;
