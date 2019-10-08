import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Chips extends Component {
    constructor(props) {
        super(props);
        this.state = { cnt: 0 };
        this.countClick = this.countClick.bind(this);
    }
    countClick(e) {
        this.setState(st => (st.cnt += 1))
    }
    render() {
        return (
            <div className="Chips">
                <div className="Chips-description">
                    <p>Bags eaten: {this.state.cnt}</p>
                    <button onClick={this.countClick}>Eat Eat Eat</button>
                    <Link to="/">Go Back</Link>
                </div>

            </div>
        )
    }
}

export default Chips;