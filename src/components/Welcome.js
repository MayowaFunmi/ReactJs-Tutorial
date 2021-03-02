import React, { Component } from "react";

// this is a class component

// without destructuring props
{/*
class Welcome extends Component {
    render() {
        return (
            <div>
                <h3>
                    This is from a class component.
                </h3>
                <p>
                    Welcome {this.props.name} a.k.a {this.props.heroName}
                </p>
            </div>
        )
    }
}
*/}


// destructuring props 1

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        // const {state1, state2} = this.state

        return (
            <div>
                <h3>
                    This is from a class component.
                </h3>
                <p>
                    Welcome {name} a.k.a {heroName}
                </p>
            </div>
        )
    }
}

export default Welcome