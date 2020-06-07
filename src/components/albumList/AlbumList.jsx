import React from 'react';
import styled from 'styled-components';
import Button from '../icons/button/Button';
import Back_Svg from '../../images/back_ico.svg';
import ButtonMui from '@material-ui/core/Button';

const AlbumList = ({ album, openMenu }) => {
    return (
        <AlbumListWrapper>
            <SongsList>
                {album.map((song, index) => {
                    return (
                        <Song key={song.id}>
                            <ListNumber>{index + 1}.</ListNumber>
                            <SongName>{song.name}</SongName>
                            <ListTime>{song.duration}</ListTime>
                        </Song>
                    );
                })}
            </SongsList>
            <ButtonsBottom>
                <Shuffle>Shuffle Play</Shuffle>
                <ArrowBottom onClick={() => openMenu()} />
            </ButtonsBottom>
        </AlbumListWrapper>
    );
};

export default AlbumList;
const ButtonsBottom = styled.div`
    /* position: fixed;
    bottom: 0; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
`;

const Shuffle = styled(ButtonMui)`
    && {
        width: 85%;
        color: white;
        background-color: ${(props) => props.theme.colors.primary};
        border-radius: 15px;
        margin: 0 1rem;
    }
`;

const ArrowBottom = styled(Button)`
    background-image: url(${Back_Svg});
    transform: rotate(-90deg);
    margin-top: 1rem;
`;

const AlbumListWrapper = styled.div`
    height: 90vh;
    background-color: white;
    position: relative;
`;

const SongsList = styled.div`
    margin-top: 2rem;
    overflow: scroll;
    max-height: 70vh;
`;

const Song = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 2rem;
`;

const ListNumber = styled.div`
    flex-basis: 5%;
    text-align: center;
    margin-right: 1rem;
    font-family: ${(props) => props.theme.font_style.light};
    color: ${(props) => props.theme.colors.text_secondary};
    font-size: 1rem;
`;
const ListTime = styled.div`
    flex-basis: 15%;
    text-align: right;
    font-family: ${(props) => props.theme.font_style.light};
    color: ${(props) => props.theme.colors.text_secondary};
    font-size: 1.2rem;
`;

const SongName = styled.div`
    flex-basis: 80%;
    font-family: ${(props) => props.theme.font_style.light};
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.text_primary};
`;
