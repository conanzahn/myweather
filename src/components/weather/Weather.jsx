import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { IoMdSunny } from "react-icons/io";
import ReactAnimatedWeather from 'react-animated-weather';

const Container = styled.div`
    border: none;
    width: 100%;
    margin-top: 5%;
    margin-left: 5%;
`;

const Citybox = styled.div`
    border: none;
    border-radius:15px;
    background: #A0C1B8;
    opacity: 0.6;
    color: white;
    width: 260px;
    padding: 5px 5px 5px;
    letter-spacing: .25em;
    text-transform: uppercase;
`;

const City = styled.div`
    display: flex;
    padding: 0 15px 0;
    font-size: 18px;
    font-weight: bold;
`;

const Date = styled.div`
    display: flex;
    padding: 0 15px 0;
    font-size: 12px;
`;

const Weatherbox = styled.div`
    border: none;
    display: flex;
`;

const Tempbox = styled.div`
    display: flex;
    border-radius:15px;
    background: white;
    opacity: 0.5;
    color: #353434;
    width: 260px;
    margin-top: 2%; 
    padding: 10px 5px 10px;
`;

const Icon = styled.div`
    margin: 2px 6px 2px;
    padding-left: 30px;
`;

const Temp = styled.div`
    margin-left: 5%;
    
`;

const Degree = styled.div`
    display:flex;
    font-size: 25px;
    font-weight: bold;
`;

const Descrip = styled.div`
    display:flex;
    font-size: 16px;
`;

const Detailbox = styled.div`
    /* display: flex; */
    margin-left: 15%;
    margin-top: 2%; 
    border-radius:15px;
    background: white;
    opacity: 0.5;
    color: #353434;
    width: 350px;
    padding: 10px 5px 10px;
`;

const Row1 = styled.div`
    display: flex;
`;

const Row2 = styled.div`
    display: flex;
`;

const Infobox = styled.div`
    /* background:green; */
    margin: 2px 27px 2px;
`;

const Data = styled.div`

`;

const Label = styled.div`

`;

class Weather extends React.Component{
    constructor (props) {
        super (props);

        this.state = {
            searchResults:'',
            noResult:'',
        };
    }

    componentDidMount(){
        // const {search} = this.props;
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${'perth'}&appid=${'06097b28b073d46a2f450fe6f7112b58'}&units=${'metric'}`).then(
            response => {
                console.log('response',response)
                const {clouds, main, name, sys, weather, wind} = response.data;
                if(response.data.status === 404){
                    this.setState({noResult:true})
                }else {
                    this.setState({noResult:false});

                    this.setState({
                        // searchResults:response.data
                        cityname:name,
                        country:sys.country,
                        temp:main.temp,
                        high:main.temp_max,
                        low:main.temp_min,
                        wind: wind.speed,
                        humidity: main.humidity,
                        sunrise: sys.sunrise,
                        sunset: sys.sunset,
                        describe: weather[0].description,
                        icon: weather[0].icon,
                    });
                }
                },

        ).catch(error=>{
            console.log('error',error.data);
            this.setState({error:true})
        })
    }

    // Timestr = (time) =>{
    //     var timestr = new window.Date(time).toLocaleTimeString()
    //     return timestr
    // }
        
    

    render() {
        // const {searchResults, noResult} = this.state;
        // const {search} = this.props.match.params;
        // console.log('result', searchResults);
        // console.log('noresult', noResult);
        const {cityname, country, temp, high, low, wind, humidity, sunrise, sunset, describe, icon} = this.state;
        
        return (
            <Container>
                <Citybox>
                    <City>{cityname}, {country}</City>
                    <Date>8 sep 2021</Date>
                </Citybox>

                <Weatherbox>
                    <Tempbox>
                        <Icon>
                            <IoMdSunny size='50px'/>
                            {/* <img src={`http://openweathermap.org/img/w/${icon}.png`} /> */}
                        </Icon>
                        <Temp>
                            <Degree>{Math.floor(temp)} &#8451;</Degree>
                            <Descrip>{describe}</Descrip>
                        </Temp>
                    </Tempbox>

                    <Detailbox>
                        <Row1>
                            <Infobox>
                                <Data>{Math.floor(high)}&#8451;</Data>
                                <Label>High</Label>
                            </Infobox>
                            <Infobox>
                                <Data>{wind}Km/h</Data>
                                <Label>Wind</Label>
                            </Infobox>
                            <Infobox>
                                <Data>
                                    {/* {this.Timestr(sunrise)} */}
                                    {new window.Date(sunrise).toLocaleTimeString()}
                                </Data>
                                
                                <Label>Sunrise</Label>
                            </Infobox>
                        </Row1>
                        <Row2>
                            <Infobox>
                                <Data>{Math.floor(low)}&#8451;</Data>
                                <Label>Low</Label>
                            </Infobox>
                            <Infobox>
                                <Data>{humidity}%</Data>
                                <Label>Humidity</Label>
                            </Infobox>
                            <Infobox>
                                <Data>
                                {new window.Date(sunset).toLocaleTimeString()}</Data>
                                <Label>Sunset</Label>
                            </Infobox>
                        </Row2>
                    </Detailbox>
                </Weatherbox>
            </Container>
        )
    }
}
export default Weather; 