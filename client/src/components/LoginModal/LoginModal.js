import React, {useState, useCallback} from "react";
import styled from "styled-components";
import {TextField} from "@material-ui/core";

import Button from "components/Parts/Button";

const LoginModal = React.forwardRef(({onClose, ...p}, ref) => {
    const [error, setError] = useState(false);

    const handleCloseModal = () => {
        onClose && onClose();
    };

    return (
        <Container>
            <Header>
                <div>Login</div>
                <Close onClick={handleCloseModal}>x</Close>
            </Header>
            <Content>
                <TextField
                    error={error}
                    helperText={error && "Incorrect entry."}
                    id="outlined-basic"
                    label="아이디"
                    variant="outlined"
                />
                <TextField
                    error={error}
                    helperText={error && "Incorrect entry."}
                    id="outlined-error-helper-text"
                    label="패스워드"
                    variant="outlined"
                />
                <Link>Forgot password?</Link>
            </Content>
            <Footer>
                <StyledButton line big>
                    Submit
                </StyledButton>
            </Footer>
        </Container>
    );
});

export default LoginModal;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 3px;
    min-width: 500px;
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    padding: 20px;
    font-size: 24px;
    font-weight: 500;

    background-color: #efefef;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px 20px 80px 20px;
    > div {
        margin: 15px 0;
    }
`;

const Footer = styled(Header)``;

const Link = styled.a`
    cursor: pointer;
    text-align: right;
    color: ${p => p.theme.subColor};
    text-decoration: underline ${p => p.theme.subColor};

    :hover {
        opacity: 0.8;
    }
`;

const StyledButton = styled(Button)``;

const Close = styled.button`
    position: absolute;
    right: 20px;

    font-size: 25px;
    border-radius: 3px;

    padding: 0 15px 2px 15px;

    color: #ffffff;
    background-color: #dc3545;
    :hover {
        opacity: 0.8;
    }
    cursor: pointer;
    border: none;
    outline: none;
`;
