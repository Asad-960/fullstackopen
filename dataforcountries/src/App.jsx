import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({country}) => {
  const api_key = import.meta.env.VITE_SOME_KEY
  const [weather, setWeather] = useState(null)
  const hook = () => {
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`)
    .then(response => {
      setWeather(response.data)
    })
  }
  useEffect(hook, [])
  
  if (weather !== null){
    return (
      <div>
        <h2>Weather in {country.capital}</h2>
        <p>temperature {(weather.main.temp - 273.15).toFixed(2)} Celsius</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
        <p>wind {weather.wind.speed} m/s</p>
      </div>
    )
  }
}
const Print = ({country}) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>Area {country.area}</p>
      <h2>languages:</h2>
      <ul>
        {Object.values(country.languages).map(c => {
          return <li key={c}>{c}</li>
        })}
      </ul>
      <img src={country.flags.png}></img>
      <Weather country={country}/>
    </div>
  )
}
const Countries = ({countries, searched, setCountry}) => {
  if (countries === null || searched === ''){
    return
  }
  if (countries.length > 10 || countries.length === 0) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }
  if (countries.length === 1){
    return (
      <Print country={countries[0]}/>
    )
  }
  const showCountry = (c) => {
    setCountry(c.name.common)
  }
    return(
      <div>
        {countries.map(c => {
          return <p key={c.name.common}>{c.name.common} <button onClick={() => showCountry(c)}>show</button></p>
        })}
      </div>
    )
}

const App = () =>{
  const [country, setCountry] = useState("")
  const [countries, SetCountries] = useState(null)
  const changeCountry = (event) => {
    setCountry(event.target.value)
  }
  useEffect(()=> {
    axios
    .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
    .then(response => {
      const s = response.data.filter(c => {
        return c.name.common.toLowerCase().includes(country.toLowerCase()) 
      })
      SetCountries(s)
    })
  }, [country])
  return(
    <div>
      find countries <input value={country} onChange={changeCountry}/>
      <Countries countries={countries} searched={country} setCountry={setCountry}/>
    </div>
  )
}
export default App
