import React, { Component } from 'react'

class Counter extends Component {
    // never implement the state outside the constructor
    // and don't try to modify state directly, use the this.setState({}) method after the constructor method
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment() {
        // this.state.count = this.state.count + 1 ---- is wrong
        this.setState(
            {
                count: this.state.count + 1
            },
            () => {
                console.log('Callback value: ', this.state.count)
            }
        )
        // console.log(this.state.count)....this is before the state is set. It's wrong
        //whenever you need to execute a code after the setState method, 
        //do not write the code after the setState but as a second argument in the setState object
    }
    
    fiveTimes() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
        // whenever you have to update state based on the previoys state value,
        // pass in a function as an argument instead of the regular object
    }

    incrementFive() {
        this.fiveTimes()
        this.fiveTimes()    
        this.fiveTimes()    
        this.fiveTimes()    
        this.fiveTimes()    
    }


    render() {
        return (
            <div>
                <p>Count = {this.state.count}</p>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementFive()}>Increment Five</button>
            </div>
        )
    }
}

export default Counter