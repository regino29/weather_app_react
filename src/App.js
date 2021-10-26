import './App.css'
import Search from './components/Search'
import Weather from './components/Weather'
import { useState, useEffect } from 'react'


const api = {
  key: '1ea4a48ba1c9e89c6d1a5e9077ad6693',
  base: 'https://api.openweathermap.org/data/2.5/weather?q=',
}

function App() {
  const [c, setC] = useState('larisa')



  const [loading, setLoading] = useState(true)

  const [data, setData] = useState({})

  const search = async () => {
    setLoading(true)
    fetch(`${api.base}${c}&units=metric&appid=${api.key}`)
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
      <div className="container">
        <div className="card">
          <Search city={setC}></Search>
          <Weather data={data} loading={loading}></Weather>
        </div>
      </div>
    </div>
  )
}

export default App
