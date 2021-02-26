import React from "react";
import styled from "styled-components";

const Mini = ({...p}) => {
    return (
        <Box>
            {/* <div>{p.content}</div> */}
            {/* <Creator>{p.addedAt}</Creator> */}
            <Text>테스트 포스트 입니다.</Text>
            <Creator>2021년 02월 26일 5시08분</Creator>
        </Box>
    );
};

export default Mini;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    border-radius: 3px;

    background-color: rgba(255, 255, 255, 0.6);

    :hover {
        cursor: pointer;
        opacity: 0.8;
        transform: scale(1.04);
        transition: transform 250ms;
    }
`;

const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #343a40;
`;

const Creator = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
