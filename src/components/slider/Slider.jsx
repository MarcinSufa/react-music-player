import React, { useRef } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import styled from 'styled-components';
import cover1 from '../../images/cover-1.png';
import cover2 from '../../images/cover.png';
import cover3 from '../../images/unreleased_cover.png';

import Play from '../../images/usertive_logo.svg';

const Slider = () => {
    const buttonRef = useRef();

    return (
        <SliderWrapper>
            <ActiveIcon />
            <SliderMain
                centered
                infinite
                clickToChange
                slidesPerPage={2}
                slides={[
                    <Slide
                        onClick={() => {
                            console.log(buttonRef.current);
                        }}
                        ref={buttonRef}>
                        <Cover src={cover1} />
                    </Slide>,
                    <Slide>
                        <Cover src={cover2} />
                    </Slide>,
                    <Slide>
                        <Cover src={cover3} />
                    </Slide>,
                ]}></SliderMain>
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
