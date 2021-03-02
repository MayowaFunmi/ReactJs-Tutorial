import React from 'react';

const Hello = () => {
    // with jsx
    //return (
    //    <div className='dummyClass'>
    //        <h1>Trying out JSX</h1>
    //    </div id='withJSX'>
    //)

    // without using jsx

    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', {id: 'noJSX'}, 'Trying out without using JSX')
    )
}

export default Hello