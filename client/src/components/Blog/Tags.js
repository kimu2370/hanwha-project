import React from 'react';
import styled from 'styled-components';
import {AiFillTags} from 'react-icons/ai';

import Button from 'components/Parts/Button';

const Tag = ({children}) => {
    return <Wrapper>{children}</Wrapper>;
};

// tag의 데이터 만큼 mapping
const Tags = ({...p}) => {
    return (
        <Container>
            <Icon />
            {/* mockup data */}
            <Tag>#장고</Tag>
            <Tag>#https</Tag>
            <Tag>#init-letsencrypt</Tag>
        </Container>
    );
};

export default Tags;

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const Wrapper = styled(Button)`
    margin-right: 0.5rem;
    font-weight: 500;
    background-color: #61dafb;
`;

const Icon = styled(AiFillTags)`
    font-size: 1.5rem;
    margin-right: 0.5rem;
`;
