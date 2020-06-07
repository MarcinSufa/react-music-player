import { playlist, playlistFreshmen, playlistSteel } from './playlists';
import cover1 from '../../images/cover-1.png';
import cover2 from '../../images/cover.png';
import cover3 from '../../images/unreleased_cover.png';

export const data = [
    {
        id: 0,
        album: 'Steel Panther',
        artist: 'FEEL THE STEEL',
        song_list: playlistSteel,
        cover: cover2,
    },
    {
        id: 1,
        album: 'Unreleased',
        artist: 'KAYNE WEST',
        song_list: playlist,
        cover: cover3,
    },
    {
        id: 2,
        album: 'Freshmen Adjustment',
        artist: 'KAYNE WEST',
        song_list: playlistFreshmen,
        cover: cover1,
    },
];
