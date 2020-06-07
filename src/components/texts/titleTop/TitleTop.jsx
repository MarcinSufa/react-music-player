import React from 'react';
import styled from 'styled-components';

const TitleTop = ({ album }) => {
    return (
        <Title>
            <AlbumHeader> {album && 'ALBUM'}</AlbumHeader>
            <AlbumName> {album} </AlbumName>
        </Title>
    );
};

export default TitleTop;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TitleElement = styled.h3`
    font-size: 0.8rem;
    margin: 0.2rem;
    font-weight: ${(props) => props.theme.font.thin};
`;

const AlbumHeader = styled(TitleElement)`
    font-family: ${(props) => props.theme.font_style.light};
    color: ${(props) => props.theme.colors.primary};
`;

const AlbumName = styled(TitleElement)`
    color: ${(props) => props.theme.font_style.light};
    color: ${(props) => props.theme.colors.white};
`;
