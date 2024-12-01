const Total = ({parts}) => {
  return (
    <>
      <p>Number of exercises {parts.reduce((sum, currentValue) => sum + currentValue.exercises, 0)} </p>
    </>
  )
}

export default Total