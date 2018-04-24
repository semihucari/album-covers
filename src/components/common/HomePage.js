import React, {Component} from 'react';
import './home.css';
import NameAndCover from './NameAndCover';
import Search from './Search';

class HomePage extends Component {

    render() {
        return (

            <div>
                <h1 className="pulsate">
                    Gizzard & Lizard Wizard
                </h1>
                <Search/>
                <NameAndCover/>
            </div>

        );
    }
}

export default HomePage;