import './App.css'
import Search from './components/Search'
import Weather from './components/Weather'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

const api = {
  key: '1ea4a48ba1c9e89c6d1a5e9077ad6693',
  base: 'https://api.openweathermap.org/data/2.5/onecall?',
}

function App() {
  const [c, setC] = useState('larisa')
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})

  const search = async () => {
    setLoading(true)

    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${c}&limit=5&appid=${api.key}`,
    )
      .then((res) => res.json())
      .then((result) => {
        fetchData(result)
      })
  }

  const fetchData = (geo) => {
    fetch(
      `${api.base}lat=${geo[0].lat}&lon=${geo[0].lon}&units=metric&exclude=hourly&appid=${api.key}`,
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result)
        setLoading(false)
      })
  }

  useEffect(() => {
    search()
  }, [c])

  return (
    <div>
      <Helmet>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
      </Helmet>
      <div className="container">
        <div className="card">
          <Search city={setC}></Search>
          <h2 className="city">{`Weather in ${c}`}</h2>
          <Weather data={data.current} loading={loading} type={0}></Weather>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <Weather data={data.daily} loading={loading} type={1}></Weather>
        </div>
        <div className="card">
          <Weather data={data.daily} loading={loading} type={2}></Weather>
        </div>
        <div className="card">
          <Weather data={data.daily} loading={loading} type={3}></Weather>
        </div>
        <div className="card">
          <Weather data={data.daily} loading={loading} type={4}></Weather>
        </div>
      </div>
    </div>
  )
}

export default App;
