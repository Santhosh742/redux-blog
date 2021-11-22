import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
return (<div>
    {song === null? <div></div>
    :
    <div>
        <h2>Song Details</h2>
        <div className="item">
            <div className="content">Song : {song.title}</div>
            <div className="content">Duration : {song.duration}</div>
        </div>
    </div>
    }
</div>
    
)
};

const mapStateToProps = (state) => {
    return {song: state.selectSong }
}

export default connect(mapStateToProps) (SongDetail);
