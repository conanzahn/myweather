import './App.css';
import React from "react";
import Search from './components/search';
import Header from './components/header';
import Weather from './components/weather';
import Footer from './components/Footer';
import Forecast from './components/forecast';


export default function App() {

  // const [lat, setLat] = useState([]);
  // const [long, setLong] = useState([]);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     setLat(position.coords.latitude);
  //     setLong(position.coords.longitude);
  //   });

  //   console.log("Latitude is:", lat)
  //   console.log("Longitude is:", long)
  // }, [lat, long]);

  return (
    <div className="App">
      <Header />
      <Search />
      <Weather />
      
      <Footer />
    </div>
  );
}
