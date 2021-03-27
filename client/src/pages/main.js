import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Mini from 'components/Blog/Mini';
import MainLayout from 'components/Layout/MainLayout';
import Button from 'components/Parts/Button';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const PYTHON_TEST = process.env.REACT_APP_PYTHON;

const Service = () => {
    const [data, setData] = useState([]);
    const [strResult, setStrResult] = useState('');

    useEffect(() => {
        const getPosts = async () => {
            const response = await axios.get(`${SERVER_URL}/posts`);
            return response.data;
        };

        getPosts().then(res => {
            setData(res);
        });
    }, []);
    const handleClick = useCallback(() => {
        axios
            .post(`${PYTHON_TEST}/python`, {
                data: {
                    name: '승현',
                    message: '유레카',
                },
            })
            .then(res => {
                setStrResult(res.data);
            });
    }, []);

    return (
        <MainLayout>
            <Content>
                <Section>
                    <Title>Hello React World</Title>
                    <P>리액트는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다.</P>
                    <List>
                        <Li>React는 상호작용이 많은 UI를 만들 때 생기는 어려움을 줄여줍니다.</Li>
                        <Li>애플ㅍ리케이션의 각 상태에 대한 간단한 뷰만 설계하세요.</Li>
                        <Li>그럼 React는 데이터가 변경됨에 따라 적절한 컴포넌트만 갱신합니다.</Li>
                    </List>
                </Section>
                {/* <Section>
                    <StyledButton submit onClick={handleClick}>
                        파이썬 스크립트 실행
                    </StyledButton>
                    <ResultBox>결과 = `{strResult}`</ResultBox>
                </Section> */}
                {/* <Section>
                    <Title>Blog - Recent posts</Title>
                    <List>
                        {data.map(post => (
                            <Mini key={post.id} post={post} />
                        ))}
                    </List>
                </Section> */}
            </Content>
        </MainLayout>
    );
};

export default Service;

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

const ResultBox = styled.div`
    transform: translateY(10px);
    width: 300px;
    height: 300px;
    background-color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    border-radius: 50px;
    padding: 30px;
    color: #1e1e1e;
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

const StyledButton = styled(Button)`
    background-color: lightpink;
`;
