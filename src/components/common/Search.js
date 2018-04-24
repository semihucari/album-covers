import React, {Component} from 'react';
import {Debounce} from 'react-throttle';

class Search extends Component {

    handleSearch = (event) => {
        console.log(event.target.value);
    }

    render() {

        return (

            <div className="centered">
                <img/>
                <Debounce time="1000" handler="onChange">
                    <input type="text" onChange={() => this.handleSearch}/>
                </Debounce>
            </div>

        );

    }

}

export default Search;