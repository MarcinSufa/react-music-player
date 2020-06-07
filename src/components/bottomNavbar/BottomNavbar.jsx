import React from 'react';
import styled from 'styled-components';
import Button from '../icons/button/Button';
import playlist_Ico from '../../images/playlist_ico.svg';

const BottomNavbar = ({ openMenu }) => {
    return (
        <BottomNav>
            <NavInner>
                <HamburgerMenu onClick={() => openMenu()} />

                <BottomText>
                    <BottomTextEl>Next</BottomTextEl>
                    <BottomTextEl>title</BottomTextEl>
                </BottomText>
                <div>3:20</div>
            </NavInner>
        </BottomNav>
    );
};

export default BottomNavbar;

const BottomNav = styled.div`
    position: absolute;
    bottom: 0;
    height: 4rem;
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
    z-index: 5;
    @media (max-width: 800px) {
        position: fixed;
    }
`;

const BottomText = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    width: 100%;
    margin: 1rem;
`;

const BottomTextEl = styled.p`
    margin: 0;
    padding: 0;
    margin-bottom: 0.5rem;
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
