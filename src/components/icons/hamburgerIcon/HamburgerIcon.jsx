import React from 'react';
import styled from 'styled-components';
import More_Ico from '../../../images/more_ico.svg';
import Button from '../button/Button';

const HamburgerIcon = ({ openMenu }) => {
    return <HamIcon onClick={(event) => openMenu()} />;
};

export default HamburgerIcon;

const HamIcon = styled(Button)`
    background-image: url(${More_Ico});
`;
