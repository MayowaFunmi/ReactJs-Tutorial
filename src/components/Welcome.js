import React, { Component } from "react";

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

export default Welcome