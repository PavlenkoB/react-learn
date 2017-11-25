import React from 'react';

import {connect} from 'react-redux';

import {getTracks} from './actions/tracks';
import Menu from './Menu';

const App = ({tracks, onAddTrack, onFindTrack,onGetTracks}) => {
    let trackInput = '';
    let searchInput = '';

    const addTrack = () => {
        console.log('Add track', trackInput.value);
        onAddTrack(trackInput.value);
        trackInput.value = '';
    };

    const findTrack = () => {
        console.log('Find track', searchInput.value);
        onFindTrack(searchInput.value);
    };

    return (
        <div>
            <div>
                <input ref={(input) => {
                    trackInput = input
                }} type="text" placeholder="Track"/>
                <button onClick={addTrack}>Add track</button>
            </div>
            <div>
                <input ref={(input) => {
                    searchInput = input
                }} type="text" placeholder="Find Track"/>
                <button onClick={findTrack}>Find track</button>
            </div>
            <div>
                <button onClick={onGetTracks}>Get tracks</button>
            </div>
            <ul>
                {tracks.map((track, index) =>
                    <li key={index}>{track.name}</li>
                )}
            </ul>
        </div>
    );
};

export default connect(
    state => ({
        tracks: state.tracks.filter(track => track.name.includes(
            state.filterTracks
        ))
    }),
    dispatch => ({
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({type: 'ADD_TRACK', payload: payload});
        },
        onFindTrack: (name) => {
            dispatch({type: 'FIND_TRACK', payload: name})
        },
        onGetTracks: () => {
            dispatch(getTracks());
        }
    })
)(App);