import React from 'react';
import styled from 'styled-components';
import concert_background from '../images/bg_image.jpg';
import back_icon from '../images/back_ico.svg';

import Navbar from '../components/Navbar/Navbar';

const MusicApp = () => {
    return (
        <MainWrapper>
            <Navbar />
            <p>Hello world</p>
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
    padding: 1rem 2rem;

    &:before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 30%;
        z-index: 1;
        opacity: 0.1;
        background-image: url(${concert_background});
        background-repeat: no-repeat;
        background-position: 50% 0;
        background-size: cover;
        filter: grayscale(100%) brightness(1.5);
    }
`;
