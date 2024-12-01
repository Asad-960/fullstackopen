import noteService from '../services/notes'

const User = ({name, number, filter, id, persons, setPersons}) => {
  const deletePerson = () => {
    if (window.confirm(`Delete ${name}`)){
      noteService
      .deleteUser(id)
      .then(xContact => {
        setPersons(persons.filter(person => person.id !== xContact.id))
      })
    }
  }

  if (filter === ''){
    return(
      <p>{name} {number} <button onClick={deletePerson}>delete</button></p> 
    )
  }
  if (filter.length > name.length) return
  for (let i = 0; i < filter.length; i++){
    if (name[i].toLowerCase() != filter[i].toLowerCase()){
      return
    }
  }
  return(
    <p>{name} {number} <button onClick={deletePerson}>delete</button></p>
  )
} 
export default User