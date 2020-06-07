import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import concert_background from '../images/bg_image.jpg';
import back_icon from '../images/back_ico.svg';
import Drawer from '@material-ui/core/Drawer';

import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/slider/Slider';
import TitleMiddle from '../components/texts/titleMiddle/TitleMiddle';
import PlayerNav from '../components/player/navigation/PlayerNav';
import SideDrawer from '../components/sideDrawer/SideDrawer';
import BottomNavbar from '../components/bottomNavbar/BottomNavbar';
import AlbumList from '../components/albumList/AlbumList';

import { data } from '../utils/data/data';

const MusicApp = () => {
    const [musicData, setMusicData] = useState(data);
    const [activeAlbumId, setActiveAlbumId] = useState(0);
    const [activeAlbum, setActiveAlbum] = useState({});
    const [activeSong, setActiveSong] = useState({});
    const [sideMenu, toggleSideMenu] = useState(false);
    const [bottomMenu, toggleBottomMenu] = useState(false);

    useEffect(() => {
        updateActiveAlbum(musicData);
    }, [activeAlbumId, activeSong]);

    const slideClicked = (event, id) => {
        event.preventDefault();
        setActiveAlbumId(id);
        updateActiveAlbum(musicData);
    };

    const updateActiveAlbum = (musicData) => {
        const pickedAlbum = musicData.find((m) => m.id === activeAlbumId);
        setActiveAlbum(pickedAlbum);
        setActiveSong(pickedAlbum.song_list[0]);
    };

    const toggleMenu = () => {
        toggleSideMenu(!sideMenu);
    };

    return (
        <MainWrapper>
            <Navbar album={activeAlbum.album} openMenu={() => toggleMenu()} />
            <Slider musicList={musicData} activeAlbumId={activeAlbumId} setActiveAlbum={(event, id) => slideClicked(event, id)} />
            <TitleMiddle song={activeSong} artist={activeAlbum.artist} />
            <PlayerNav />
            <MuiDrawer anchor='right' width='100vw' open={sideMenu} onClose={() => toggleSideMenu(!sideMenu)}>
                <SideDrawer openMenu={() => toggleMenu()} src={activeAlbum.cover} song={activeSong} artist={activeAlbum.artist}></SideDrawer>
            </MuiDrawer>
            <MuiDrawer anchor='bottom' width='80vw' open={bottomMenu} onClose={() => toggleBottomMenu(!bottomMenu)}>
                <AlbumList album={activeAlbum.song_list} openMenu={() => toggleBottomMenu(!bottomMenu)} />
            </MuiDrawer>
            <BottomNavbar album={activeAlbum.album} openMenu={() => toggleBottomMenu(!bottomMenu)} />
        </MainWrapper>
    );
};

export default MusicApp;

const MuiDrawer = styled(Drawer)`
    && {
        .MuiDrawer-paper {
            background: transparent;
            backdrop-filter: grayscale(1.5) opacity(0.8);
            background-color: ${(props) => props.theme.colors.secondary_rgba};
        }
    }
`;

const MainWrapper = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.secondary};
    width: 100%;
    height: 100vh;
    position: relative;

    &:before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 30%;
        opacity: 0.1;
        background-image: url(${concert_background});
        background-repeat: no-repeat;
        background-position: 50% 0;
        background-size: cover;
        filter: grayscale(100%) brightness(1.5);
    }
`;
