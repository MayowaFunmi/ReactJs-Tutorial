import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: "Hello Event Bind"
        }
    }
    
    clickHandler() {
        this.setState({
            message: 'Goodbye Event Bind'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={() => this.clickHandler()}>Event Bind</button>
            </div>
        )
    }
}

export default EventBind
