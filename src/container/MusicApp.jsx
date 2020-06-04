import React from 'react';
import styled from 'styled-components';
import concert_background from '../images/bg_image.jpg';
import back_icon from '../images/back_ico.svg';

import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/slider/Slider';
import TitleMiddle from '../components/texts/titleMiddle/TitleMiddle';
import PlayerNav from '../components/player/navigation/PlayerNav';

const MusicApp = () => {
    return (
        <MainWrapper>
            <Navbar />
            <Slider />
            <TitleMiddle />
            <PlayerNav />
        </MainWrapper>
    );
};

export default MusicApp;

const MainWrapper = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.secondary};
    width: 100%;
    height: 700px;

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
