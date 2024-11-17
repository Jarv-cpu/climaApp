import { WeatherInfo } from './components/weatherInfo';
import { SearchCity } from './components/searchCity';
import { useWeather } from './hooks/useWeather';
import './App.css';
import { useRef } from 'react';

function App() {
  const {clima, handleSubmit,fetchCity} = useWeather()
  const ref = useRef(null)
  if(!ref.current){
    fetchCity("maracaibo","ve")
  }
  ref.current = "handle"
  return (
    <>
      <main>
        {clima && <WeatherInfo weather={clima} />}
        <SearchCity handleSubmit={handleSubmit} />
      </main>
    </>
  )
}

export default App
