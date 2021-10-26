import './Weather.css'

const Weather = (props) => {
  if (props.loading) return <h1>loading</h1>



  




  return (
    <div className={`weather `}>
      <h1 className="temp">{`${props.data.temp}°C`}</h1>
      <div className="flex">
        <img
          src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt=""
          className="icon"
        />
        <div className="description">{props.data.weather[0].description}</div>
      </div>
      <div className="humidity">{`Humidity: ${props.data.humidity}%`}</div>
      <div className="wind">{`Wind speed: ${props.data.wind_speed} km/h`}</div>
    </div>
  )
}

export default Weather
