import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class Soda extends Component {
    render() {
        return (
            <div className="Soda">
                <Message>
                    <Link to="/">Go Back</Link>
                </Message>
                <img src="https://images.unsplash.com/photo-1543253687-c931c8e01820?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <img src="https://images.unsplash.com/photo-1543253687-c931c8e01820?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </div>

        )
    }
}

export default Soda;