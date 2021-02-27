import React from "react";
import styled from "styled-components";

import Mini from "components/Blog/Mini";
import MainLayout from "components/Layout/MainLayout";

const Main = () => {
    return (
        <MainLayout>
            <Content>
                <Section>
                    <Title>Hello React World</Title>
                    <p>
                        파이썬 진영의 가장 대표적인 웹프레임워크 중 하나인 django를 이용하여 여러분만의 블로그 사이트를
                        만들어보세요.
                    </p>
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
`;

const List = styled.div`
    display: flex;
    flex-direction: column;

    > div:not(:last-child) {
        margin-bottom: 8px;
    }
`;
