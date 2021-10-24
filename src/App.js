import './App.css'
import Search from './components/Search'
import Weather from './components/Weather'
import { useState, useEffect } from 'react'

function App() {
  const [c, setC] = useState('larisa')

  return (
    <div>
      <div className="container">
        <div className="card">
          <Search city={setC}></Search>
          <Weather city={c}></Weather>
        </div>
      </div>
    </div>
  )
}

export default App
