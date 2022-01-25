import React from "react";

const Person = ({ person }) => <div>{person.name} {person.number}</div>

const PersonList = ({ list }) => (
    <div>
        <h2>Numbers</h2>
        {list.map(person =>
            <Person person={person} key={person.name}
            />)}
    </div>
)

export default PersonList