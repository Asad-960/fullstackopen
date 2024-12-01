import Part from './Part'
import Total from './Total'
const Content = ({parts}) => {
  return (
    <>
      {parts.map(part => 
        <Part key ={part.id} part={part.name} exercise={part.exercises}/>)
      }
      <Total parts={parts} />
    </>
    )
}
  export default Content