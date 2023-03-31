import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Search from './components/search/search';
import Forecast from './components/forecast/forecast';
import CurrentWeather from './components/current_weather/currentWeather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';
function App() {

  const [currentWeather, setCurrentWeather] = useState(null); 
  const [forecast, setforecast] = useState(null); 

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({city: searchData.label, ...weatherResponse});
        setforecast({city: searchData.label, ...forecastResponse});

      })

      .catch((err) => console.log(err));
  } 

  console.log(currentWeather);
  console.log(forecast);
  return (
  <>
    <Navbar bg="dark" variant="dark" className='navigation'>
        <Container>
          <Navbar.Brand href="#home" className='heading'>Weather App</Navbar.Brand>
          <Nav className="me-right">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <div className="container">
      <p class = "pcity">Get current weather and Seven days of forecast</p>
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <Forecast data = {forecast}/>} 
    </div>
    </>
  );
}

export default App;
