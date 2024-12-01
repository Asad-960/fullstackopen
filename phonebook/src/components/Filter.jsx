const Filter = ({filter, setFilter}) => {
  const doFilter = (event) => {
    setFilter(event.target.value)
  }
  return (
    <>
    filter shown with <input value={filter} onChange={doFilter}/>
    </>
  )
}

export default Filter