import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map(name => <h2>{name}</h2>)
    const persons = [
        {
            id: 1,
            name: 'Mayowa',
            age: 34,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Esther',
            age: 31,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Dominion',
            age: 2,
            skill: 'Python'
        },
    ]
    //const personList = persons.map(person => (
        //<h2>
        //    I am {person.name}. I am {person.age} years old. I know {person.skill}
        //</h2>
    //))

    const personList = persons.map(person => <Person person = {person}/>)

    return (
        <div>
            <h2>{names[0]}</h2>
            <h2>{names[1]}</h2> 
            <h2>{names[2]}</h2>
            <p>{nameList}</p>
            <h4>{personList}</h4>
        </div>
    )
}


export default NameList