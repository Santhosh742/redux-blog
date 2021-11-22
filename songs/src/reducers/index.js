import { combineReducers } from 'redux';

const songReducer = () =>{
    return [
        {title: 'No Scrubs', duration: '2.30'},
        {title: 'Macarena', duration: '3.30'},
        {title: 'Jai Hanuman', duration: '4.30'},
        {title: 'Jai Matha', duration: '5.30'}
    ]
};

const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectSong: selectedSongReducer
});