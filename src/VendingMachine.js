import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';
import vendingMachine from './VendingMachine.png';
import Message from './Message';

class VendingMachine extends Component {
    render() {
        return (
            <div className="VendingMachine"
                style={{
                    backgroundImage: `url(${vendingMachine})`,
                }}>
                <Message>
                    <Link exact to="/soda">Soda</Link>
                    <Link exact to="/chips">Chips</Link>
                    <Link exact to="/hotdog">Hotdog</Link>
                </Message>
                <Message>
                    <p>Hello! Whate would you like to eat?</p>
                </Message>
            </div>
        )
    }
}

export default VendingMachine;