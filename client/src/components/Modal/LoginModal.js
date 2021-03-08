import React, {useState, useCallback, useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {TextField} from '@material-ui/core';

import CommonModal from './CommonModal';
import HideContext from 'Context/HideContext';

const LoginModal = ({formData, setFormData, ...p}) => {
    const history = useHistory();
    const [error, setError] = useState(false);
    const {handleHide} = useContext(HideContext);

    const handleChange = useCallback(
        (e, name) => {
            setFormData({
                ...formData,
                [name]: e.target.value,
            });
        },
        [formData, setFormData]
    );
    useEffect(() => {
        setError(false);
    }, [p.open]);

    const searchForgotPW = useCallback(() => {}, []);

    const moveToSignupPage = useCallback(() => {
        p.setOpen(false);

        handleHide();

        history.push({
            pathname: '/signup',
        });
    }, [history, handleHide, p]);

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
                    label="이메일"
                    variant="outlined"
                    onChange={e => handleChange(e, 'email')}
                />
                <TextField
                    error={!!error}
                    helperText={error}
                    label="패스워드"
                    variant="outlined"
                    onChange={e => handleChange(e, 'password')}
                    autoComplete="off"
                    type="password"
                />
                <Link width={'130px'} left={'180px'} onClick={searchForgotPW}>
                    Forgot password?
                </Link>
                <Link width={'60px'} left={'250px'} onClick={moveToSignupPage}>
                    Sign up
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
