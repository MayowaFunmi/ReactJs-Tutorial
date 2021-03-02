import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log('Function component button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Func Event</button>
        </div>
    )
}

export default FunctionClick
