import React from 'react';
import styled from 'styled-components';
import BackIcon from '../icons/backIcon/BackIcon';
import HamburgerIcon from '../icons/hamburgerIcon/HamburgerIcon';
import TitleTop from '../texts/titleTop/TitleTop';

const Navbar = () => {
    return (
        <TopNavbar>
            <BackIcon />
            <TitleTop />
            <HamburgerIcon />
        </TopNavbar>
    );
};

export default Navbar;

const TopNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    width: 100%;
`;

const TextLink = styled.p`
    color: white;
`;
