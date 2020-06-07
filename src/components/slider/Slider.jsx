import React, { useRef, useState } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import styled from 'styled-components';
// import cover1 from '../../images/cover-1.png';
// import cover2 from '../../images/cover.png';
// import cover3 from '../../images/unreleased_cover.png';

import Play from '../../images/usertive_logo.svg';

const Slider = ({ musicList, activeAlbumId, setActiveAlbum }) => {
    const [albumId, setAlbumId] = useState(2);

    const changeSlideHandler = (event) => {
        setAlbumId(event);
        // setActiveAlbum(event, albumId);
    };

    return (
        <SliderWrapper>
            <ActiveIcon />
            <SliderMain
                value={albumId}
                centered
                infinite
                clickToChange
                onChange={(event) => {
                    changeSlideHandler(event);
                    console.log(event, 'onChange event');
                }}
                slidesPerPage={2}
                slides={musicList.map((slide) => {
                    return (
                        <Slide
                            key={slide.id}
                            onClick={(event) => {
                                setActiveAlbum(event, slide.id);
                            }}>
                            <Cover src={slide.cover} />
                        </Slide>
                    );
                })}></SliderMain>
        </SliderWrapper>
    );
};

export default Slider;

const Cover = styled.img`
    max-width: 100%;
    height: 5rem;
`;

const Slide = styled.div`
    /* margin-top: 2rem; */
    transform: scale3d(0.76, 0.76, 0.76);
`;

const SliderMain = styled(Carousel)`
    height: 250px;
`;

const SliderWrapper = styled.div`
    position: relative;
`;
const ActiveIcon = styled.div`
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50px;
    height: 50px;
    z-index: 9999;
    /* opacity: 0.1; */
    background-image: url(${Play});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: 50% 100%;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 50%;
    border: 5px solid ${(props) => props.theme.colors.primary};
    transform: translate(-50%, -50%);
`;
