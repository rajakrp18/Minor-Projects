import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const API_KEY = 'abcapi_key'; //place your own api key here

function App() {
  const [city, setCity] = useState(localStorage.getItem('city') || 'Kolkata');
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(localStorage.getItem('dark') === 'true');

  useEffect(() => {
    fetchAll(city);
  }, [city]);

  useEffect(() => {
    localStorage.setItem('city', city);
  }, [city]);

  useEffect(() => {
    localStorage.setItem('dark', dark);
    document.body.className = dark ? 'dark' : '';
  }, [dark]);

  const fetchAll = async (q) => {
    setLoading(true);
    try {
      const geo = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=5&appid=${API_KEY}`);
      if (geo.data.length) {
        const { lat, lon, name, country } = geo.data[0];
        setCity(`${name}, ${country}`);
        const [w, f] = await Promise.all([
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`),
          axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
        ]);
        setWeather(w.data);
        // compress forecast to one per day (next 5)
        const daily = f.data.list.filter(item => item.dt_txt.endsWith('12:00:00')).slice(0, 5);
        setForecast(daily);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInput = async (q) => {
    setInput(q);
    if (q.length < 3) return setSuggestions([]);
    const res = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=5&appid=${API_KEY}`);
    setSuggestions(res.data.map(c => `${c.name}, ${c.country}`));
  };

  return (
    <div className='container'>
      <div className='top-bar'>
        <input
          className='city-input'
          value={input}
          onChange={e => handleInput(e.target.value)}
          placeholder='Search city...'
        />
        <button onClick={() => setDark(d => !d)} className='dark-toggle'>
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul className='suggestions'>
          {suggestions.map(s => (
            <li key={s} onClick={() => { setCity(s); setInput(''); setSuggestions([]); }}>
              {s}
            </li>
          ))}
        </ul>
      )}
      <div className='card'>
        {loading ? (
          <div className='loading'>Loading...</div>
        ) : weather ? (
          <>
            <h2 className='weather-name'>{weather.name}</h2>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='' />
            <p className='desc'>{weather.weather[0].description}</p>
            <h3 className='temp'>{Math.round(weather.main.temp)}°C</h3>
            <div className='details'>
              <div><strong>Humidity:</strong> {weather.main.humidity}%</div>
              <div><strong>Wind:</strong> {weather.wind.speed} m/s</div>
            </div>
            <h4>5‑Day Forecast:</h4>
            <div className='forecast'>
              {forecast.map(d => (
                <div key={d.dt} className='forecast-day'>
                  <p>{new Date(d.dt_txt).toLocaleDateString(undefined, { weekday: 'short' })}</p>
                  <img src={`https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`} alt='' />
                  <p>{Math.round(d.main.temp)}°C</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Enter a city above.</p>
        )}
      </div>
    </div>
  );
}

export default App;
