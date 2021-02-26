import styled from "styled-components";
import React from "react";

const Button = styled.div`
    border-radius: 3px;
    font-size: 12px;
    letter-spacing: -0.36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 6px 10px;
    outline: none;
    cursor: pointer;
    user-select: none;
    transition: all 0.1s linear;
    color: #ffffff;
    background-color: ${p => p.theme.gdacColor};

    :hover {
        opacity: 0.8;
    }

    ${p =>
        p.big &&
        `
        width: 250px;
        padding: 16px;
        font-size: 16px;
    `};

    ${p =>
        p.small &&
        `
        padding: 4px 16px;
    `};
`;

const ButtonBase = ({children, ...p}) => {
    return <Button {...p}>{children}</Button>;
};

export default ButtonBase;
