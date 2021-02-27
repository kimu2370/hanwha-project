import React, {useState, useCallback, useMemo} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {Backdrop, Fade} from '@material-ui/core';

import StyledModal from 'components/Parts/Modal';
import LoginModal from 'components/LoginModal';

const NavBar = ({...p}) => {
    const [currentTab, setCurrentTab] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [active, setActive] = useState(false);
    const history = useHistory();

    const tabs = useMemo(
        () => [
            {id: 0, label: 'Home', path: '/'},
            {id: 1, label: 'Blog', path: '/blog'},
            {id: 2, label: 'About', path: '/about'},
            {
                id: 3,
                label: 'Board',
                dropdownList: [
                    {id: 0, label: '자유 게시판', path: '/board/1'},
                    {id: 1, label: 'Q&A', path: '/board/2'},
                    {id: 2, label: '웹 사이트 자랑하기', path: '/board/3'},
                ],
            },
        ],
        []
    );

    const moveToClickedPage = useCallback(
        tab => {
            if (tab === 'logo') history.push('/');

            setCurrentTab(tab.id);

            if (tab.dropdownList) {
                setActive(!active);
            } else {
                setActive(false);
            }

            history.push(tab.path);
        },
        [active, history]
    );

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Tabs {...p}>
            <Typography onClick={() => moveToClickedPage('logo')}>Hanwha Project</Typography>
            {tabs.map(tab => (
                <Tab
                    key={tab.id}
                    clicked={currentTab === tab.id}
                    children={
                        tab.dropdownList ? (
                            <>
                                {tab.label}
                                {active && (
                                    <Dropdown>
                                        {tab.dropdownList.map(x => (
                                            <div key={x.id}>{x.label}</div>
                                        ))}
                                    </Dropdown>
                                )}
                            </>
                        ) : (
                            tab.label
                        )
                    }
                    dropdown={tab.dropdownList}
                    onClick={() => moveToClickedPage(tab)}
                />
            ))}
            <LoginTab onClick={handleOpenModal}>Login</LoginTab>
            <StyledModal
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <LoginModal onClose={handleCloseModal}></LoginModal>
                </Fade>
            </StyledModal>
        </Tabs>
    );
};

export default NavBar;

const Tabs = styled.div`
    display: flex;
    position: sticky;
    min-width: 640px;
`;

const Tab = styled.div`
    cursor: pointer;
    position: relative;
    padding: 10px 30px;
    font-weight: 500;
    ${p =>
        !p.dropdown &&
        `
        :hover {
            color: #b5b5b5;
            transition: transform 180ms;
    }`}
    ${p =>
        p.dropdown &&
        `
        display: flex;
        ::after {
            display: inline-block;
            position: relative;
            top: 6px;
            left: 6px;
            content: "";
            border-top: .3em solid;
            border-right: .3em solid transparent;
            border-bottom: 0;
            border-left: .3em solid transparent;
        }
    }
    `}
    ${p =>
        p.clicked &&
        `
        background-color: #EFEFEF;
    `};
`;

const LoginTab = styled(Tab)`
    position: absolute;
    right: 0;
`;

const Typography = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0 30px 0 0;
`;

const Dropdown = styled.div`
    position: absolute;
    top: 2rem;
    left: 3rem;
    width: 180px;
    padding: 0.5rem 0;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    > div {
        z-index: 1;
        padding: 0.25rem 1.5rem;
        :hover {
            color: #b5b5b5;
        }
    }
`;
