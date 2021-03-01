import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {TextField} from '@material-ui/core';

import CommonModal from './CommonModal';

const LoginModal = ({...p}) => {
    const [error, setError] = useState(false);

    return (
        <CommonModal
            {...p}
            size={'350px'}
            title={'Log in'}
            btnType={'login'}
            btnText={'submit'}
            titleAlign={'center'}
            btnAlign={'center'}
        >
            <Content>
                <TextField
                    error={error}
                    helperText={error && 'Incorrect entry.'}
                    id="outlined-basic"
                    label="아이디"
                    variant="outlined"
                />
                <TextField
                    error={error}
                    helperText={error && 'Incorrect entry.'}
                    id="outlined-error-helper-text"
                    label="패스워드"
                    variant="outlined"
                />
                <Link>Forgot password?</Link>
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

    :hover {
        opacity: 0.8;
    }
`;
