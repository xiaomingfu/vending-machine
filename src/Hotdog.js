import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hotdog extends Component {
    render() {
        return (
            <div className="Hotdog">
                <h1>Eat as much as you can!</h1>
                <Link to="/">Go Back</Link>
            </div>
        )
    }
}

export default Hotdog;