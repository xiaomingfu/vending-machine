import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Soda extends Component {
    render() {
        return (
            <div className="Soda">
                <div className="Soda-description">
                    <h1>No sugar</h1>
                    <Link to="/">Go Back</Link>
                </div>
                <img src="https://images.unsplash.com/photo-1543253687-c931c8e01820?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <img src="https://images.unsplash.com/photo-1543253687-c931c8e01820?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />

            </div>

        )
    }
}

export default Soda;