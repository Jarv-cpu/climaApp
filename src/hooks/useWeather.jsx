import { useState } from "react";

export function useWeather() {
    const apis = {
      city: "http://api.openweathermap.org/geo/1.0/direct?q=",
      weather: "https://api.openweathermap.org/data/2.5/weather?",
      key: "e0d661142d959a8c9b819f648d874ef0"
    }

    const [clima, setClima] = useState()

    function handleSubmit(event) {
      event.preventDefault();
      const { ciudad, countryCode } = event.target.elements;
      fetchCity(ciudad.value, countryCode)
    };

    function fetchCity(ciudad, countryCode) {
      fetch(`${apis.city}${ciudad},${countryCode}&appid=${apis.key}`)
        .then((response) => response.json())
        .then((json) => mostrarCiudad(json[0]))
    };

    function mostrarCiudad(json) {
      const { lat, lon } = json
      fetch(`${apis.weather}lat=${lat}&lon=${lon}&appid=${apis.key}&lang=sp`)
        .then((response) => response.json())
        .then((json) => mostrarClima(json))
    }

    function mostrarClima(clima) {
      setClima(clima)
    }

    return {clima, handleSubmit, fetchCity}
  }