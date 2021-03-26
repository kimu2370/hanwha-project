import React, {useState, useCallback, useEffect, useMemo} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import qs from 'querystring';
import axios from 'axios';
import styled from 'styled-components';

import {FaArrowAltCircleUp} from 'react-icons/fa';
import Post from 'components/Blog/Post';
import CommonLayout from 'components/Layout/CommonLayout';
import ButtonBase from 'components/Parts/Button';
import StickyBox from 'components/Parts/StickyBox';

// const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const PYTHON_TEST = process.env.REACT_APP_PYTHON;

const Blog = React.forwardRef((props, ref) => {
    const history = useHistory();
    const location = useLocation();
    const [categories, setCategories] = useState([]);

    const [posts, setPosts] = useState([]);
    const query = useMemo(() => qs.parse(location.search.slice(1)), [location]);

    const [text1, setText1] = useState('');
    const [result, setResult] = useState('');

    const handleClickUp = useCallback(() => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }, [ref]);

    const handleClickSearch = useCallback(
        text => {
            history.push({
                pathname: location.pathname,
                search: qs.stringify({q: text}),
            });
            if (ref && ref.current) {
                ref.current.scrollIntoView(true);
            }
        },
        [history, location.pathname, ref]
    );

    const handleChange = useCallback(e => {
        setText1(e.target.value);
    }, []);

    const handleClick = useCallback(() => {
        axios
            .post(`${PYTHON_TEST}/write`, {
                data: {
                    text: text1,
                },
            })
            .then(res => {
                if (res.data.payload) {
                    axios
                        .post(`${PYTHON_TEST}/python`, {
                            data: {
                                text: text1,
                            },
                        })
                        .then(res => {
                            setResult(res.data);
                        });
                }
            });
    }, [text1]);

    // useEffect(() => {
    //get result text
    // });

    // useEffect(() => {
    //     if (query.q) {
    //         axios
    //             .get(`${SERVER_URL}/posts?q=${query.q}`)
    //             .then(res => {
    //                 setPosts(res.data);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             });
    //     }
    //     const getPosts = async () => {
    //         const response = await axios.get(`${SERVER_URL}/posts`);
    //         return response.data;
    //     };
    //     const getCategories = async () => {
    //         const response = await axios.get(`${SERVER_URL}/categories`);
    //         return response.data;
    //     };

    //     getPosts().then(res => {
    //         setPosts(res);
    //     });

    //     getCategories().then(res => {
    //         setCategories(res);
    //     });
    // }, [query]);

    return (
        <StyledLayout>
            <Wrapper>
                <Container>
                    <Title>Service {query.q && <Tag>{query.q}</Tag>}</Title>
                    입력:
                    <TextArea type="text" onChange={handleChange} value={text1} />
                    <InputBox>
                        <Button onClick={handleClick}>저장</Button>
                    </InputBox>
                    결과:
                    <ResultBox>{result}</ResultBox>
                    {/* <Posts>
                        {posts.map(post => {
                            return <StyledPost key={post.id} post={post} />;
                        })}
                    </Posts> */}
                </Container>
                <StickyBox categories={categories} onClickSearch={handleClickSearch} />
            </Wrapper>
            <ArrowUp onClick={handleClickUp} />
        </StyledLayout>
    );
});

export default Blog;

const StyledLayout = styled(CommonLayout)`
    height: calc(100% - 63px);
`;

const InputBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0;
`;

const TextArea = styled.textarea.attrs(() => ({
    type: 'text',
}))`
    width: 500px;
    height: 100px;
    resize: none;
`;

const Button = styled(ButtonBase)`
    margin-left: 20px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    color: #ffffff;
    background-color: dodgerblue;
`;

const ResultBox = styled.div`
    width: 500px;
    height: 300px;
    border: 1px solid black;
`;

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

const Tag = styled(ButtonBase)`
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
