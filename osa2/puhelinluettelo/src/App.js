import React, { useState } from 'react';
import PersonList from './components/PersonList';
import Filter from './components/Filter';
import NewPersonForm from './components/NewPersonForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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

  const newPersonProps = {
    newName,
    setNewName,
    newNumber,
    setNewNumber,
    handleSubmitClick
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} text='filter names containing:' />
      <NewPersonForm {...newPersonProps} />
      <PersonList list={persons.filter(person => person.name.toLowerCase().match(filter.toLowerCase()))} />
    </div>
  )
}

export default App;
