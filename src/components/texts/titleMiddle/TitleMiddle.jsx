import React from 'react';
import styled from 'styled-components';

const TitleMiddle = ({ song, artist }) => {
    return (
        <Title>
            <Song>{song.name}</Song>
            <Artist> {artist} </Artist>
        </Title>
    );
};

export default TitleMiddle;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// const TitleElement = styled.h3`
//     font-size: 0.8rem;
//     margin: 0.2rem;
//     font-weight: ${(props) => props.theme.font.thin};
// `;

const Song = styled.h2`
    font-size: 1.5rem;
    margin: 0.2rem;
    font-style: ${(props) => props.theme.font_style.bold};
    color: ${(props) => props.theme.colors.white};
`;

const Artist = styled.h3`
    font-size: 0.8rem;
    margin: 0.2rem;
    color: ${(props) => props.theme.font_style.light};
    color: ${(props) => props.theme.colors.text_secondary};
`;
