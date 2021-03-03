import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: "Hello Event Bind"
        }

        this.clickHandler = this.clickHandler.bind(this);    {/* use with this.clickHandler */}
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
                {/*
                    <button onClick={() => this.clickHandler()}>Event Bind</button>
                    <button onClick={this.clickHandler.bind(this)}>Event Bind</button>
                */}
                <button onClick={this.clickHandler}>Event Bind</button>
                {/* use for binding in the constructor method 
                    clickHandler can also be an arrow function.
                    add = () => after the clickHandler method
                */}
            </div>
        )
    }
}

export default EventBind
