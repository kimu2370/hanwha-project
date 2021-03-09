import React, {useState, useCallback, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import {TextField} from '@material-ui/core';

import CommonModal from './CommonModal';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const LoginModal = ({...p}) => {
    const [error, setError] = useState(false);

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleChange = useCallback(
        (e, target) => {
            setData({
                ...data,
                [target]: e.target.value,
            });
        },
        [data]
    );
    useEffect(() => {
        setError(false);
    }, [p.open]);

    const searchForgotPW = useCallback(() => {}, []);

    const handleLogin = () => {
        const getAccessToken = async () => {
            const response = await axios.get(`${SERVER_URL}/token`);
            return response.data;
        };

        const doLogin = async ({accessToken}) => {
            const response = await axios.post(`${SERVER_URL}/auth/login`, {
                email: data.email,
                password: data.password,
                headers: {
                    authorization: accessToken,
                },
            });
            return response.data;
        };
        getAccessToken().then(res => {
            doLogin(res)
                .then(() => {
                    p.setOpen(false);
                    p.setAuthenticated(true);
                })
                .catch(err => {
                    console.log(err.response.data.message);
                    setError(err.response.data.message);
                });
        });
    };

    return (
        <CommonModal
            {...p}
            size={'350px'}
            title={'Log in'}
            btnText={'submit'}
            btnType={'submit'}
            titleAlign={'center'}
            btnAlign={'center'}
            formData={data}
            setAuthenticated={p.setAuthenticated}
            setError={setError}
            handler={handleLogin}
        >
            <Content>
                <TextField
                    error={!!error}
                    helperText={error}
                    label="Email"
                    variant="outlined"
                    onChange={e => handleChange(e, 'email')}
                />
                <TextField
                    error={!!error}
                    helperText={error}
                    label="Password"
                    variant="outlined"
                    onChange={e => handleChange(e, 'password')}
                    autoComplete="off"
                    type="password"
                />
                <Link width={'130px'} left={'180px'} onClick={searchForgotPW}>
                    Forgot password?
                </Link>
            </Content>
        </CommonModal>
    );
};

export default LoginModal;

const Content = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px 20px 80px 20px;
    > div {
        margin: 15px 0;
    }
`;

const Link = styled.a`
    position: relative;
    left: ${p => p.left};
    width: ${p => p.width};
    text-align: right;
    cursor: pointer;
    color: ${p => p.theme.subColor};
    text-decoration: underline ${p => p.theme.subColor};
    margin-top: 10px;
    :hover {
        opacity: 0.8;
    }
`;
