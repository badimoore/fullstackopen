import React, { useState } from 'react';

const Person = ({ person }) => <div>{person.name} {person.number}</div>

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1231244'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmitClick = evt => {
    evt.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>name: <input value={newName} onChange={(evt) => setNewName(evt.target.value)} /></div>
        <div>number: <input value={newNumber} onChange={(evt) => setNewNumber(evt.target.value)} /></div>
        <div><button type="submit" onClick={handleSubmitClick}>add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person person={person} key={person.name} />)}
    </div>
  )
}

export default App;
