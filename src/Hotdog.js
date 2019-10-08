import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class Hotdog extends Component {
    render() {
        return (
            <div className="Hotdog">
                <h1>Eat as much as you can!</h1>
                <Message>
                    <Link to="/">Go Back</Link>
                </Message>
                <img src="https://images.unsplash.com/photo-1496905583330-eb54c7e5915a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </div>
        )
    }
}

export default Hotdog;