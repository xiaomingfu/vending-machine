import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';
import vendingMachine from './VendingMachine.png';
class VendingMachine extends Component {
    render() {
        return (
            <div className="VendingMachine"
                style={{
                    backgroundImage: `url(${vendingMachine})`,
                }}>
                <Link exact to="/soda">Soda</Link>
                <Link exact to="/chips">Chips</Link>
                <Link exact to="/hotdog">Hotdog</Link>
                <h1 className="VendingMachine message">Hello! Whate would you like to eat?</h1>

            </div>
        )
    }
}

export default VendingMachine;