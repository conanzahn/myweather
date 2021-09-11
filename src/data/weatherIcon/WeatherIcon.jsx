// Match weather with React Animated Weather Icon

const WeatherIcon = (descrip) => {
    const Icon = {
        // OWM Api:React Animated Weather
        Thunderstorm: "SLEET",
        Drizzle: "RAIN",
        Rain: "RAIN",
        Snow: "SNOW",
        Mist:"FOG",
        Smoke:"FOG",
        Dust: "FOG",
        Fog: "FOG",
        Squall: "WIND",
        Tornado: "WIND",
        Clear: "CLEAR_DAY",
        Clouds:"PARTLY_CLOUDY_DAY",
        
        // SET DEFAULT ICON
        Default: "Cloudy",
    };
    return Icon[descrip] || Icon["Default"];
};

export default WeatherIcon;