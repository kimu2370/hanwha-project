import React, {useCallback, useState, useEffect} from 'react';
import styled from 'styled-components';
import {TextField} from '@material-ui/core';

const Signup = ({...p}) => {
    const [data, setData] = useState({});

    const handleChange = useCallback(() => {}, []);

    const handleSignin = useCallback(() => {}, []);

    const handleSignup = useCallback(() => {}, []);

    return (
        <Container>
            <ButtonBox>
                <Link onClick={handleSignin}>Sign in</Link>
                <Link onClick={handleSignup}>Sign up</Link>
            </ButtonBox>
            <FormBox>
                <TextField />
                <TextField />
                <TextField />
                <TextField />
            </FormBox>
        </Container>
    );
};

export default Signup;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 540px;
    width: 100%;
    height: 100%;
`;

const ButtonBox = styled.div`
    display: flex;
`;

const Link = styled.a`
    cursor: pointer;
    text-align: right;
    color: ${p => p.theme.subColor};
    text-decoration: underline ${p => p.theme.subColor};
    margin-top: 10px;
    :hover {
        opacity: 0.8;
    }
`;

const FormBox = styled.div`
    padding: 1.25rem;
`;
