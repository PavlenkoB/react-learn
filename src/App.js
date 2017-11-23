import React, {Component} from 'react';

import {connect} from 'react-redux';

class App extends Component {
    addTrack() {
        let trackValue = this.trackInput.value;
        console.log('Add track', trackValue);
        this.props.onAddTrack(trackValue);
        this.trackInput.value = '';
    }
    findTrack() {
        let trackValue = this.searchInput.value;
        this.props.onFindTrack(trackValue);
        console.log('Find track', trackValue);
    }

    render() {
        console.log(this.props.tracks);
        return (
            <div>
                <div>
                    <input ref={(input) => {
                        this.trackInput = input
                    }} type="text" placeholder="Track"/>
                    <button onClick={this.addTrack.bind(this)}>Add track</button>
                </div>
                <div>
                    <input ref={(input) => {
                        this.searchInput = input
                    }} type="text" placeholder="Find Track"/>
                    <button onClick={this.findTrack.bind(this)}>Find track</button>
                </div>
                <ul>
                    {this.props.tracks.map((track, index) =>
                        <li key={index}>{track.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        tracks: state.tracks.filter(track =>  track.name.includes(
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
        onFindTrack: (name)=>{
            dispatch({type: 'FIND_TRACK',payload: name})
        }
    })
)(App);