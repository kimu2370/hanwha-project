import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Backdrop, Fade} from '@material-ui/core';

import Modal from 'components/Parts/Modal';
import Button from 'components/Parts/Button';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const CommonModal = ({
    children,
    btnText,
    title,
    open,
    setOpen,
    btnType,
    size,
    titleAlign,
    btnAlign,
    hBgColor,
    fBgColor,
    ...p
}) => {
    const {formData, setAuthenticated, setError} = p;
    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleClick = () => {
        if (btnType === 'login') {
            const getAccessToken = async () => {
                const response = await axios.get(`${SERVER_URL}/token`);
                return response.data;
            };

            const doLogin = async ({accessToken}) => {
                const response = await axios.post(`${SERVER_URL}/auth/login`, {
                    email: formData.email,
                    password: formData.password,
                    headers: {
                        authorization: accessToken,
                    },
                });
                return response.data;
            };
            getAccessToken().then(res => {
                doLogin(res)
                    .then(() => {
                        setOpen(false);
                        setAuthenticated(true);
                    })
                    .catch(err => {
                        console.dir(err.response.data.message);
                        setError(err.response.data.message);
                    });
            });
        }

        if (btnType === 'close') {
            setOpen(false);
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Container size={size}>
                    <Header hBgColor={hBgColor} titleAlign={titleAlign}>
                        <div>{title}</div>
                        <Close btnType={btnType} onClick={handleCloseModal}>
                            x
                        </Close>
                    </Header>
                    {children}
                    <Footer fBgColor={fBgColor} btnAlign={btnAlign}>
                        <Button btnType={btnType} onClick={handleClick}>
                            {btnText}
                        </Button>
                    </Footer>
                </Container>
            </Fade>
        </Modal>
    );
};

export default CommonModal;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 0.25rem;
    min-width: ${p => p.size || '500px'};
    max-width: ${p => p.size || '500px'};
    outline: none;
    border: none;
`;

const Header = styled.header`
    display: flex;
    ${({titleAlign}) => {
        if (titleAlign === 'left') {
            return `
                justify-content: flex-start;
            `;
        }

        if (titleAlign === 'right') {
            return `
                justify-content: flex-end;
            `;
        }

        return `
            justify-content: center;
        `;
    }};
    align-items: center;

    position: relative;

    padding: 20px;
    font-size: 24px;
    font-weight: 500;

    background-color: ${p => p.hBgColor || '#efefef'};
`;

const Footer = styled(Header)`
    ${({btnAlign}) => {
        if (btnAlign === 'left') {
            return `
                justify-content: flex-start;
            `;
        }

        if (btnAlign === 'right') {
            return `
                justify-content: flex-end;
            `;
        }

        return `
            justify-content: center;
        `;
    }};
    background-color: ${p => p.fBgColor || '#efefef'};
`;

const Close = styled.button`
    position: absolute;
    right: 20px;

    font-size: 25px;
    border-radius: 0.25rem;

    padding: 0 15px 2px 15px;

    ${p =>
        p.btnType === 'login' &&
        `
        color: #ffffff;
        background-color: #dc3545;
    `};

    ${p =>
        p.btnType === 'close' &&
        `
        color: #6c757d;
        background-color: #ffffff;
    `};

    :hover {
        opacity: 0.8;
    }
    cursor: pointer;
    border: none;
    outline: none;
`;
