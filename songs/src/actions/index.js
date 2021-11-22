
export const selectSong = (songs) =>{
    return {
            type: 'SONG_SELECTED',
            payload: songs
    };
};
