import { React } from "react";

//function Greet() {
//    return <h1>Hello Mayowa!</h1>
//}

// Using arrow function

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
export default Greet 