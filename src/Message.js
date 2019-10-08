import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
    render() {
        return (<h1 className="Message">{this.props.children}</h1>)
    }
}

export default Message;