import noteService from '../services/notes'

const PersonForm = ({newName, newNumber, setNewName, setNewNumber, persons, setPersons, setMessage})=> {
    const addNewContact = (event) => {
      event.preventDefault()
      const newObject = { name: newName, number: newNumber}
      setNewName('')
      setNewNumber('')
      for(const person of persons) {
        if (person.name === newName){
          const text = "is already added to phonebook, repace the old number with a new one?"
          
          if (window.confirm(`${person.name} ${text}`)){
            noteService
            .updateNumber(person.id, newObject)
            .then(newPerson => {
              setPersons(persons.map(p => p.id === newPerson.id ? newPerson : p))
              setMessage(`${newPerson.name} updated successfully`)
              setTimeout(()=>{
                setMessage(null)
              }, 4000)
            })
            .catch(error => {
              setMessage(`${person.name} has already been removed from server`)
              setTimeout(()=>{
                setMessage(null)
              }, 4000)
              setPersons(persons.filter(p => p.id !== person.id))
            })
          }
          return
        }
      }
      noteService
        .create(newObject)
        .then(newContact => {
          setPersons(persons.concat(newContact))
          setMessage(`${newContact.name} Added Successfully`)
          setTimeout(()=>{
            setMessage(null)
          }, 4000)
        })
        
    }
    const handleNameChange = (event) => {
      setNewName(event.target.value)
    }
  
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
    }
    return (
      <form onSubmit={addNewContact}>
        <div> name: <input value={newName} onChange={handleNameChange}/> </div>
        <div> number: <input value={newNumber} onChange={handleNumberChange}/> </div>
        <div> <button type="submit">add</button> </div>
      </form>
    )
  }

export default PersonForm