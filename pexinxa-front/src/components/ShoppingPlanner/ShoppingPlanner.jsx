import React from 'react';
import useWeather from '../../hooks/useWeather';
import styles from './ShoppingPlanner.module.css';

function ShoppingPlanner() {
  const [city, setCity] = React.useState('Matão'); // Default city
  const { weatherData, error, loading } = useWeather(city);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const translateCondition = (condition) => {
    // Add more translations as needed.  This is a basic example.
    const translations = {
      'clear sky': 'Céu limpo',
      'few clouds': 'Poucas nuvens',
      'scattered clouds': 'Nuvens esparsas',
      'broken clouds': 'Nuvens fragmentadas',
      'overcast clouds': 'Céu nublado',
      'light rain': 'Chuva leve',
      'moderate rain': 'Chuva moderada',
      'heavy intensity rain': 'Chuva forte',
      'light snow': 'Neve leve',
      'moderate snow': 'Neve moderada',
      'heavy snow': 'Neve forte',
      // Add more translations here...
    };
    return translations[condition.toLowerCase()] || condition; // Return original if not found
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (weatherData) {
    const { name, main, weather, wind, humidity, pressure, sys } = weatherData;

    const temp = main.temp;
    const condition = translateCondition(weather[0].description);
    const currentTime = new Date();
    
    const sunriseTime = new Date(sys.sunrise * 1000); // Convert from Unix timestamp (seconds) to milliseconds
    const sunsetTime = new Date(sys.sunset * 1000);

    const isDay = currentTime > sunriseTime && currentTime < sunsetTime;
    const timeOfDay = isDay ? 'Dia' : 'Noite';

    // Format the current time (customize as needed)
    const formattedTime = currentTime.toLocaleTimeString();

    let recommendations = [];

    if (temp > 30) {
        recommendations.push("Leve bastante água!");
        recommendations.push("Use protetor solar e um chapéu.");
        recommendations.push("Considere evitar atividades extenuantes ao ar livre.");
      } else if (temp >= 25) {
        recommendations.push("Leve uma garrafa de água.");
        recommendations.push("Vista roupas leves e confortáveis.");
        recommendations.push("Use protetor solar se estiver exposto ao sol.");
      } else if (temp >= 15) {
        recommendations.push("Vista roupas confortáveis.");
        if (!isDay) recommendations.push("Um casaco leve pode ser útil à noite."); // Added night check
      } else if (temp >= 10) {
        recommendations.push("Leve um casaco leve.");
        if (!isDay) recommendations.push("Pode ser útil um cachecol ou gorro."); // Added night check
      } else if (temp < 10) {
        recommendations.push("Leve um casaco, cachecol e luvas.");
        recommendations.push("Use roupas em camadas.");
      }
    
      if (condition.includes("chuva")) {
        recommendations.push("Leve um guarda-chuva.");
        recommendations.push("Use roupas impermeáveis.");
      }
    
      if (wind.speed > 15) {
        recommendations.push("Esteja preparado para ventos fortes.");
      }
    
      // Add night-specific recommendations
      if (!isDay) {
        recommendations.push("Tenha cuidado ao se locomover à noite."); // General night safety
        if (temp > 20) recommendations.push("Ainda assim, leve um casaco leve."); // Nighttime temp is still warm
      }

    return (
    <div className={styles.weather_panel}>
        <h1>Clima em {name} ({timeOfDay})</h1> 
        <p>Horário Atual: {formattedTime}</p>
        <p>Temperatura: {main.temp}°C</p>
        <p>Sensação Térmica: {main.feels_like}°C</p>
        <p>Condição: {condition}</p>
        <p>Umidade: {humidity}%</p>
        <p>Pressão Atmosférica: {pressure} hPa</p>
        <p>Vento: {wind.speed} m/s, </p>
        <p>Direção: {wind.deg}°</p>

        <div className={styles.weather_recomendation}>
            <h1>Recomendações:</h1>
            <ul>
              {recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
        </div>

      </div>
    );
  }
  return <div>Enter a city</div>;
}

export default ShoppingPlanner;