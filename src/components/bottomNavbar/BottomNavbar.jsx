import React from 'react';
import styled from 'styled-components';
import Button from '../icons/button/Button';
import playlist_Ico from '../../images/playlist_ico.svg';

const BottomNavbar = ({ openMenu }) => {
    return (
        <BottomNav>
            <NavInner>
                <HamburgerMenu onClick={() => openMenu()} />

                <div>
                    <p>Next</p>
                    <p>title</p>
                </div>
                <div>3:20</div>
            </NavInner>
        </BottomNav>
    );
};

export default BottomNavbar;

const BottomNav = styled.div`
    position: fixed;
    bottom: 0;
    height: 4rem;
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
`;

const NavInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding: 0rem 2rem;
    z-index: 10;
`;

const HamburgerMenu = styled(Button)`
    background-image: url(${playlist_Ico});
    height: 2rem;
    width: 2rem;
`;
