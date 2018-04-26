import React, {Component} from 'react';
import {Debounce} from 'react-throttle';
import QueryString from 'query-string';

class Search extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            albumCovers: []
        }
    }

    handleSearch = (event) => {
        let q = event.target.value;

        let parsed = QueryString.parse(window.location.search);
        let accessToken = parsed.access_token;

        fetch(`https://api.spotify.com/v1/search?q=${q}&type=track`, {
            headers: {'Authorization': 'Bearer ' + accessToken}
        }).then(response => response.json())
        .then(data => {
            let images = [];
            data.tracks && data.tracks.items.map(item => images.push(item.album.images[1]));
            this.setState({data: images});
        })
        .then(() => {
            let albumCovers = this.state.data.map(image => <img src={image.url}/>);
            this.setState({albumCovers})
        });

    }

    render() {

        return (

            <div className="centered">
                <Debounce time="1000" handler="onChange">
                    <input type="text" onChange={this.handleSearch}/>
                </Debounce>
                {this.state.albumCovers.length > 0 && <hr/>}
                {this.state.albumCovers}
            </div>

        );

    }

}

export default Search;