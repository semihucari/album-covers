import React, {Component} from 'react';

class NameAndCover extends Component {

    render() {

        let {image, text} = this.props;

        return (

            <div>
                <img src={image}/>
                <h2>
                    {text}
                </h2>
            </div>

        );

    }

}

export default NameAndCover;