import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import TitleMiddle from '../texts/titleMiddle/TitleMiddle';

const SideDrawer = ({ openMenu, src, song, artist }) => {
    return (
        <SideDrawerWrapper>
            <Navbar album={null} openMenu={() => openMenu()} />

            <CoverWrapper>
                <Cover src={src} />
            </CoverWrapper>
            <TitleMiddle song={song} artist={artist} />
            <Divider>
                <span />
                <span />
                <span />
            </Divider>
            <MenuTextWrapper>
                <MenuText>Add to playlist</MenuText>
                <MenuText>Show album</MenuText>
                <MenuText>Add to friends</MenuText>
            </MenuTextWrapper>
        </SideDrawerWrapper>
    );
};

export default SideDrawer;

const MenuTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const MenuText = styled.h3`
    font-size: 1.2rem;
    margin: 0.4rem;
    font-weight: ${(props) => props.theme.font.regular};
    font-family: ${(props) => props.theme.font_style.light};
    color: ${(props) => props.theme.colors.white};
`;
const Divider = styled.div`
    text-align: center;
    margin: 1rem 0;
    & span {
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background: ${(props) => props.theme.colors.text_secondary};
        display: inline-block;
        margin: 0 5px;
    }
`;

const CoverWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Cover = styled.img`
    height: 5rem;
    width: 5rem;
`;

const SideDrawerWrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    background: transparent;
`;
