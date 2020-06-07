import React from 'react';
import styled from 'styled-components';
import BackIcon from '../icons/backIcon/BackIcon';
import HamburgerIcon from '../icons/hamburgerIcon/HamburgerIcon';
import TitleTop from '../texts/titleTop/TitleTop';

const Navbar = ({ album, openMenu }) => {
    return (
        <TopNavbar>
            <BackIcon />
            <TitleTop album={album} />
            <HamburgerIcon openMenu={() => openMenu()} />
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
    height: 80px;
    padding: 1rem 2rem;
    z-index: 10;
`;

const TextLink = styled.p`
    color: white;
`;
