import { React } from "react";
// this is a function component


//function Greet() {
//    return <h1>Hello Mayowa!</h1>
//}

// Using arrow function
// without destructuring props

{/*
const Greet = (props) => {
    console.log(props.name)
    // only one html tag is allowed
    return (
        <div>
            <h1>
                Hello Mayowa! This props is from {props.name} a.k.a {props.heroName}
            </h1>
            <p>
                {props.children}
            </p>
        </div>
    )
}
*/}

// destructuring props 1

{/*
const Greet = ({name, heroName, children}) => {
    // only one html tag is allowed
    return (
        <div>
            <h1>
                Hello Mayowa! This props is from {name} a.k.a {heroName}
            </h1>
            <p>
                {children}
            </p>
        </div>
    )
}
*/}

// destructuring props 2

const Greet = (props) => {
    const {name, heroName, children} = props
    return (
        <div>
            <h1>
                Hello Mayowa! This props is from {name} a.k.a {heroName}
            </h1>
            <p>
                {children}
            </p>
        </div>
    )
}

export default Greet 