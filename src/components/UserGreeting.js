import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {

        // approach one

        {/*
        if (this.state.isLoggedIn) {
            return (
                <div>Welcome Mayor</div>
            )
        } else {
            return (
                <div>Welcome Guest</div>
            )
        }
        */}
        
        // approach 2

        {/*

        let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome Mayor from Message.</div>
        } else {
            message = <div>Welcome Guest from Message.</div>
        }

        return <div>{message}</div>
        */}

        // approach 3 ternary condition approach

        return (
            this.state.isLoggedIn ? (
                <div>Welcome Mayor</div>
            ) : (
            <div>Welcome Guest</div>
            )
        )

        // approach 4
        //return this.state.isLoggedIn && <div>Welcome Approach 4</div>
    }
}

export default UserGreeting
