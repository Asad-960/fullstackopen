import User from "./User"

const Persons = ({persons, filter, setPersons}) => {
  return (
    <div>
  {persons.map((person) => 
    <User key={person.id} name={person.name} number={person.number} filter={filter} id={person.id} persons={persons} setPersons={setPersons}/>)}
    </div>
  )
}

export default Persons