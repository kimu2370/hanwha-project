import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {TextField} from '@material-ui/core';

import CommonModal from './CommonModal';

const LoginModal = ({formData, setFormData, ...p}) => {
    const [error, setError] = useState(false);

    const handleChange = useCallback(
        (e, name) => {
            setFormData({
                ...formData,
                [name]: e.target.value,
            });
        },
        [formData, setFormData]
    );
    return (
        <CommonModal
            {...p}
            size={'350px'}
            title={'Log in'}
            btnType={'login'}
            btnText={'submit'}
            titleAlign={'center'}
            btnAlign={'center'}
            formData={formData}
            setAuthenticated={p.setAuthenticated}
            setError={setError}
        >
            <Content>
                <TextField
                    error={!!error}
                    helperText={error}
                    id="outlined-basic"
                    label="이메일"
                    variant="outlined"
                    onChange={e => handleChange(e, 'email')}
                />
                <TextField
                    error={!!error}
                    helperText={error}
                    id="outlined-error-helper-text"
                    label="패스워드"
                    variant="outlined"
                    onChange={e => handleChange(e, 'password')}
                    autoComplete="off"
                    type="password"
                />
                <Link>Forgot password?</Link>
                <Link>Sign up</Link>
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
    cursor: pointer;
    text-align: right;
    color: ${p => p.theme.subColor};
    text-decoration: underline ${p => p.theme.subColor};
    margin-top: 10px;
    :hover {
        opacity: 0.8;
    }
`;
