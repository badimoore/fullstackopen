import React, { useState } from 'react';

const Person = ({person}) => <div>{person.name}</div>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleSubmitClick = evt => {
    evt.preventDefault()
    const newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={(evt) => setNewName(evt.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmitClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person person={person} key={person.name} />)}
    </div>
  )
}

export default App;
