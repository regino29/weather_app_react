import './Weather.css'
import { useState, useEffect } from 'react'

const api = {
  key: '1ea4a48ba1c9e89c6d1a5e9077ad6693',
  base: 'https://api.openweathermap.org/data/2.5/weather?q=',
}

const Weather = (props) => {
  const [loading, setLoading] = useState(true)

  const [data, setData] = useState({})

  const search = async () => {
    setLoading(true)
    fetch(`${api.base}${props.city}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result)
        setLoading(false)
      })
  }

  useEffect(() => {
    search()
  }, [props.city])

  if (loading) return <h1>loading</h1>

  return (
    <div className={`weather `}>
      <h2 className="city">{`Weather in ${data.name}`}</h2>
      <h1 className="temp">{`${data.main.temp}°C`}</h1>
      <div className="flex">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt=""
          className="icon"
        />
        <div className="description">{data.weather[0].description}</div>
      </div>
      <div className="humidity">{`Humidity: ${data.main.humidity}%`}</div>
      <div className="wind">{`Wind speed: ${data.wind.speed} km/h`}</div>
    </div>
  )
}

export default Weather
