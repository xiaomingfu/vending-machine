import React, { Component } from 'react';


class VendingMachine extends Component {
    render() {
        return (
            <div className="VendingMachine"
                style={{
                    backgroundImage: "url(" + "https://images.unsplash.com/photo-1541051279467-e07e60ac6e5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>

                <h1>Hello! Whate would you like to eat?</h1>

            </div>
        )
    }
}

export default VendingMachine;