import './Weather.css'

const Weather = (props) => {
  if (props.loading) return <h1>loading</h1>

  let temp, icon, description, humidity, speed
  let i = props.type - 1

  if (props.type === 0) {
    temp = props.data.temp
    icon = props.data.weather[0].icon
    description = props.data.weather[0].description
    humidity = props.data.humidity
    speed = props.data.wind_speed
  } else {
    temp = props.data[i].temp.day
    icon = props.data[i].weather[0].icon
    description = props.data[i].weather[0].description
    humidity = props.data[i].humidity
    speed = props.data[i].wind_speed
  }

  return (
    <div className={`weather `}>
      <h1 className="temp">{`${temp}°C`}</h1>
      <div className="flex">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt=""
          className="icon"
        />
        <div className="description">{description}</div>
      </div>
      <div className="humidity">{`Humidity: ${humidity}%`}</div>
      <div className="wind">{`Wind speed: ${speed} km/h`}</div>
    </div>
  )
}

export default Weather
