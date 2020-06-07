import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import concert_background from '../images/bg_image.jpg';
import back_icon from '../images/back_ico.svg';
import Drawer from '@material-ui/core/Drawer';
import SliderMui from '@material-ui/core/Slider';

import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/slider/Slider';
import TitleMiddle from '../components/texts/titleMiddle/TitleMiddle';
import PlayerNav from '../components/player/navigation/PlayerNav';
import SideDrawer from '../components/sideDrawer/SideDrawer';
import BottomNavbar from '../components/bottomNavbar/BottomNavbar';
import AlbumList from '../components/albumList/AlbumList';
import WaveForm from '../components/waveForm/WaveForm';

import { data } from '../utils/data/data';

const MusicApp = () => {
    const [musicData, setMusicData] = useState(data);
    const [activeAlbumId, setActiveAlbumId] = useState(0);
    const [activeAlbum, setActiveAlbum] = useState({});
    const [activeSong, setActiveSong] = useState({});
    const [sideMenu, toggleSideMenu] = useState(false);
    const [bottomMenu, toggleBottomMenu] = useState(false);
    const [totalTrackTime, setTotalTrackTime] = useState(5000);
    const [trackTimePlay, setTrackTimePlay] = useState(0);
    const [timerStop, setTimerStop] = useState(false);

    useEffect(() => {
        updateActiveAlbum(musicData);
        // updateTotalSongTime(activeSong.duration);
    }, [activeAlbumId]);

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

    const millisToMinutesAndSeconds = (millis) => {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    };

    const convertTimeToMilis = (time) => {
        const [minutes, seconds] = time.split(':');
        const minutesMili = parseInt(minutes) * 60;
        const secondsMili = parseInt(seconds);
        const totalMili = (minutesMili + secondsMili) * 1000;
        return totalMili;
    };

    const startTimer = () => {
        console.log('timer');
        setTimerStop(false);
        let totalTimePlayed = 0;
        const interval2 = setInterval(() => {
            totalTimePlayed = totalTimePlayed + 1000;
            setTrackTimePlay((trackTimePlay) => trackTimePlay + 1000);
            console.log(totalTimePlayed, 'totalTimePlayed');
            if (totalTimePlayed >= 5000) {
                clearInterval(interval2);
                return;
            }
            if (timerStop) {
                clearInterval(interval2);
                return;
            }
        }, 1000);
    };
    const stopTimer = () => {
        setTimerStop(true);
    };
    const resetTimer = () => {
        setTrackTimePlay(0);
    };

    const toggleNextSong = () => {
        stopTimer();
        resetTimer();
        const currentIndex = activeSong.id;
        let nextIndex = currentIndex + 1;
        if (activeAlbum.song_list.length === currentIndex) {
            nextIndex = 1;
        }
        const newSong = activeAlbum.song_list.find((s) => s.id === nextIndex);
        setActiveSong(newSong);
        updateTotalSongTime(activeSong.duration);
    };

    const togglePrevSong = () => {
        stopTimer();
        resetTimer();
        const currentIndex = activeSong.id;
        let nextIndex = currentIndex - 1;
        if (currentIndex === 1) {
            nextIndex = activeAlbum.song_list.length;
        }
        const newPrevSong = activeAlbum.song_list.find((s) => s.id === nextIndex);
        setActiveSong(newPrevSong);
        updateTotalSongTime(activeSong.duration);
    };

    const updateTotalSongTime = (track) => {
        const time = convertTimeToMilis(track);
        setTotalTrackTime(time);
    };

    return (
        <MainWrapper>
            <Navbar album={activeAlbum.album} openMenu={() => toggleMenu()} />
            <Slider musicList={musicData} activeAlbumId={activeAlbumId} setActiveAlbum={(event, id) => slideClicked(event, id)} />
            <TitleMiddle song={activeSong} artist={activeAlbum.artist} />
            <PlayerNav prev={() => togglePrevSong()} next={() => toggleNextSong()} play={() => startTimer()} stop={() => stopTimer()} />
            <MuiDrawer anchor='right' width='100vw' open={sideMenu} onClose={() => toggleSideMenu(!sideMenu)}>
                <SideDrawer openMenu={() => toggleMenu()} src={activeAlbum.cover} song={activeSong} artist={activeAlbum.artist}></SideDrawer>
            </MuiDrawer>
            <MuiDrawer anchor='bottom' width='80vw' open={bottomMenu} onClose={() => toggleBottomMenu(!bottomMenu)}>
                <AlbumList album={activeAlbum.song_list} openMenu={() => toggleBottomMenu(!bottomMenu)} />
            </MuiDrawer>
            <BottomNavbar album={activeAlbum.album} openMenu={() => toggleBottomMenu(!bottomMenu)} />
            <AudioWrapper>
                <TimeStart>{millisToMinutesAndSeconds(trackTimePlay)}</TimeStart>
                <AudioTrack />
                <TimeEnd>{millisToMinutesAndSeconds(totalTrackTime)} </TimeEnd>
            </AudioWrapper>
            <WaveForm />
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

const TimeStart = styled.div`
    color: ${(props) => props.theme.colors.text_secondary};
`;

const TimeEnd = styled.div`
    color: ${(props) => props.theme.colors.text_secondary};
`;

const MainWrapper = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.secondary};
    width: 100%;
    height: 100%;

    align-self: center;
    @media (min-width: 800px) {
        position: relative;
        max-height: 800px;
        max-width: 600px;
    }

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

const AudioTrack = styled(SliderMui)`
    && {
        color: ${(props) => props.theme.colors.seledin};
        width: 80%;
        margin: 0 1rem;
    }
`;

const AudioWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
`;
