import { useState, useEffect } from 'react'
import noteService from './services/notes'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  useEffect( () => {
    noteService
      .getAll()
      .then(allNames => {        
        setPersons(allNames)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <Filter filter={filter} setFilter={setFilter}/>
      <h3>add a new</h3>
      <PersonForm 
        newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}
        persons={persons} setPersons={setPersons} setMessage={setMessage}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} setPersons={setPersons}/>
    </div>
  )
}
const Notification = ({message}) => {
  if (message === null) {
    return null
  }
  return (
    <div className="displayMessage">
      {message}
    </div>
  )
}
export default App