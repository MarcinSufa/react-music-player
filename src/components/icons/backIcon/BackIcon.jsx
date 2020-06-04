import React from 'react';
import styled from 'styled-components';
import Back_Svg from '../../../images/back_ico.svg';
import Button from '../button/Button';

const BackIcon = () => {
    return <BackButton />;
};

export default BackIcon;

const BackButton = styled(Button)`
    background-image: url(${Back_Svg});
`;
