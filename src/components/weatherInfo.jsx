export function WeatherInfo({weather}){
    return(
        <section className='weatherInfo'>
          <h2>{weather.name.toUpperCase()}</h2>
          <h3>{weather.weather[0].description.toUpperCase()}</h3>
          <h2>{weather.main.temp.toString().slice(0, 2)} °C</h2>
          <div>
            <h4>HUMEDAD: {weather.main.humidity}%</h4>
            <h4>VIENTO: {weather.wind.speed}M/S</h4>
          </div>
        </section>
    )
}