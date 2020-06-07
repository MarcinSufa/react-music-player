import { playlist } from './playlist';
import cover1 from '../../images/cover-1.png';
import cover2 from '../../images/cover.png';
import cover3 from '../../images/unreleased_cover.png';

export const data = [
    {
        id: 1,
        album: 'Steel Panther',
        artist: 'FEEL THE STEEL',
        song_list: playlist,
        cover: cover2,
    },
    {
        id: 2,
        album: 'Unreleased',
        artist: 'KAYNE WEST',
        song_list: playlist,
        cover: cover3,
    },
    {
        id: 3,
        album: 'Freshmen Adjustment',
        artist: 'KAYNE WEST',
        song_list: playlist,
        cover: cover1,
    },
];
