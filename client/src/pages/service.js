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

// AF   #2F4F4F
// AM   #A0522D
// TR   #006400
// PS   #F7CACA
// DT   #FF0000
// PT   #00FF00
// EV   #00CED1
// LC   #FFA500
// TI   #FFFF00
// QT   #0000FF
// MT   #FF00FF
// OG   #6495ED
// CV   #FF1493
// FD   #98FB98
// TM   #4B0082

const colors = [
    {id: 'AF', color: '#2F4F4F'},
    {id: 'AM', color: '#A0522D'},
    {id: 'TR', color: '#006400'},
    {id: 'PS', color: '#F7CACA'},
    {id: 'DT', color: '#FF0000'},
    {id: 'PT', color: '#00FF00'},
    {id: 'EV', color: '#00CED1'},
    {id: 'LC', color: '#FFA500'},
    {id: 'TI', color: '#FFFF00'},
    {id: 'QT', color: '#0000FF'},
    {id: 'MT', color: '#FF00FF'},
    {id: 'OG', color: '#6495ED'},
    {id: 'CV', color: '#FF1493'},
    {id: 'FD', color: '#98FB98'},
    {id: 'TM', color: '#4B0082'},
];

// const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const PYTHON_TEST = process.env.REACT_APP_PYTHON;

const Blog = React.forwardRef((props, ref) => {
    // const history = useHistory();
    // const location = useLocation();
    // const [categories, setCategories] = useState([]);

    // const [posts, setPosts] = useState([]);
    // const query = useMemo(() => qs.parse(location.search.slice(1)), [location]);

    const [text1, setText1] = useState('');
    const [result, setResult] = useState('');
    const [check, setCheck] = useState(false);

    const handleClickUp = useCallback(() => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }, [ref]);

    // const handleClickSearch = useCallback(
    //     text => {
    //         history.push({
    //             pathname: location.pathname,
    //             search: qs.stringify({q: text}),
    //         });
    //         if (ref && ref.current) {
    //             ref.current.scrollIntoView(true);
    //         }
    //     },
    //     [history, location.pathname, ref]
    // );

    const handleChange = useCallback(e => {
        setText1(e.target.value);
    }, []);

    const handleClick = async () => {
        const fetchWrite = await axios.post(`${PYTHON_TEST}/write`, {
            data: {
                text: text1,
                checked: check,
            },
        });

        if (!fetchWrite.data.payload) return;

        const fetchRead = await axios.get(`${PYTHON_TEST}/read`);

        // console.log(fetchRead);
        setResult(fetchRead.data);
    };

    const visualizedText = useCallback(text => {
        const regex = /\[(.*?)\]/gm;
        let str = `직업에는 다양한 것들이 있는데[CEO,:CV-B][CTO,:AF-B] [메이크업:CV-B] [아티스트:DT-I] 등이 있다.`;
        let m;
        let arr = [];

        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                if (groupIndex === 0) {
                    colors.forEach(x => {
                        if (match.includes(x.id)) {
                            arr.push({
                                id: m.index,
                                origin: match,
                                html: `<span style="border: 3px solid ${x.color}; border-radius: 8px;margin: 0 5px;">${match}<span style="background-color: ${x.color}; display: inline-block;">${x.id}</span></span>`,
                            });
                        }
                    });
                }
            });
        }

        arr.forEach(obj => {
            str = str.replace(obj.origin, obj.html);
        }, []);
        console.log(arr);

        return str;
    }, []);

    const handleCheck = useCallback(() => {
        setCheck(!check);
        // check && python 파일 실행
    }, [check]);

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
                    {/* <Title>Service {query.q && <Tag>{query.q}</Tag>}</Title> */}
                    <Title>Sevice</Title>
                    <SubTitle>저장 버튼을 누르면 파일을 저장 후 결과창이 나옵니다.</SubTitle>
                    입력:
                    <Div>
                        <TextArea type="text" onChange={handleChange} value={text1} />
                        <CheckBox>
                            <input
                                type="checkbox"
                                id="check"
                                name="check"
                                checked={check}
                                onChange={handleCheck}
                            />
                            <label>execute</label>
                        </CheckBox>
                    </Div>
                    <InputBox>
                        <Button onClick={handleClick}>저장</Button>
                    </InputBox>
                    결과:
                    <ResultBox dangerouslySetInnerHTML={{__html: visualizedText(result)}} />
                    {/* <Posts>
                        {posts.map(post => {
                            return <StyledPost key={post.id} post={post} />;
                        })}
                    </Posts> */}
                </Container>
                {/* <StickyBox categories={categories} onClickSearch={handleClickSearch} /> */}
            </Wrapper>
            <ArrowUp onClick={handleClickUp} />
        </StyledLayout>
    );
});

export default Blog;

const HighLightingText = styled.span``;

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
    padding: 10px;
    width: 500px;
    height: 100px;
    resize: none;
`;

const Div = styled.div`
    display: flex;
    align-items: center;
`;

const Button = styled(ButtonBase)`
    margin-left: 20px;
    font-size: 1rem;
    padding: 8px 1.2rem;
    font-weight: 700;
    line-height: 1;
    color: #ffffff;
    background-color: dodgerblue;
`;

const CheckBox = styled.div`
    margin-left: 1rem;
`;

const ResultBox = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    width: 800px;
    letter-spacing: 1.1;
    line-height: 1.5;
    /* border: 1px solid black; */
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

const SubTitle = styled.h3`
    text-align: left;
    font-size: 1.5rem;
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
