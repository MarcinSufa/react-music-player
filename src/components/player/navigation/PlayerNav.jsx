import React from 'react';
import styled from 'styled-components';
import Button from '../../icons/button/Button';

import shuffle_icon from '../../../images/shuffle_ico.svg';
import prev_icon from '../../../images/previous_ico.svg';
import play_inactive from '../../../images/Play_inactive.png';
import play_active from '../../../images/Play_active.png';
import next_icon from '../../../images/next_ico.svg';
import repeat_icon from '../../../images/repeat_ico.svg';

const PlayerNav = () => {
    return (
        <PayerNavbar>
            <Shuffle />
            <Prev />
            <PlayActive />
            <Next />
            <Repeat />
        </PayerNavbar>
    );
};

export default PlayerNav;

const PayerNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: transparent;
    width: 100%;
    padding: 0rem 2rem;
`;

const Shuffle = styled(Button)`
    background-image: url(${shuffle_icon});
`;
const Prev = styled(Button)`
    background-image: url(${prev_icon});
`;
const PlayInactive = styled(Button)`
    background-image: url(${play_inactive});
`;
const PlayActive = styled(Button)`
    background-image: url(${play_active});
    height: 8rem;
    width: 6rem;
    background-size: 130%;
`;
const Next = styled(Button)`
    background-image: url(${next_icon});
`;
const Repeat = styled(Button)`
    background-image: url(${repeat_icon});
`;
