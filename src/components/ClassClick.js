import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log('Class component button clicked')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class Event</button>
            </div>
        )
    }
}

export default ClassClick
