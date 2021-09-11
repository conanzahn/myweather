import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactAnimatedWeather from 'react-animated-weather';
import WeatherIcon from '../../data/weatherIcon/WeatherIcon';

const Container = styled.div`
    opacity: 0.8;
    color: #353434;
    /* width: 260px; */
    margin-top: 1%; 
    padding: 10px 5px 10px;
`;

const Title = styled.div`
    border: none;
    width: 260px;
    padding: 0 5px 0;
    letter-spacing: .25em;
    text-transform: uppercase;
    display: flex;
    font-size:16px;
    font-weight:bolder;
    color: white;
    margin-left: 5%;
`;

const Detail = styled.div`
    display:flex;
    justify-content: center;
    margin-left: 1%;

`;

const Itembox = styled.div`
    letter-spacing: .1em;
    display: inline-block;
    border-radius: 25% 10%;
    background: #4d4d4d;
    opacity: 0.65;
    color: #ffffff;
    width: 180px;
    margin-top: 2% ; 
    margin-right: 3%;
    padding: 10px 5px 10px;
`;

const Date = styled.div`
    margin-bottom: 10px;
`;

const Icon = styled.div`
    padding: 2px 0 2px;
`;

const Temp = styled.div`
    font-weight: bold;
`;

class Forecast extends React.Component{
    constructor (props) {
        super (props);

        this.state = {
            results:'',
        };
    }

    componentDidMount(){
        const {fore_lat, fore_lon} = this.props;

        axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${fore_lat}&lon=${fore_lon}&appid=${'06097b28b073d46a2f450fe6f7112b58'}&units=${'metric'}`).then(
        response => {
                console.log('forecast-response',response)
                const {daily} = response.data;

                this.setState({
                    day0: daily[0].dt,
                    day0icon: daily[0].weather[0].main,
                    day0temp: daily[0].temp.day,
                    day1: daily[1].dt,
                    day1icon: daily[1].weather[0].main,
                    day1temp: daily[1].temp.day,
                    day2: daily[2].dt,
                    day2icon: daily[2].weather[0].main,
                    day2temp: daily[2].temp.day,
                    day3: daily[3].dt,
                    day3icon: daily[3].weather[0].main,
                    day3temp: daily[3].temp.day,
                    day4: daily[4].dt,
                    day4icon: daily[4].weather[0].main,
                    day4temp: daily[4].temp.day,
                });
                },
        )
    }

    render() {
        const {day0,day0icon,day0temp,day1,day1icon,day1temp, day2,day2icon,day2temp, 
            day3,day3icon,day3temp, day4,day4icon,day4temp} = this.state;

        return (
            <Container>
                <Title>
                    5 Days Forecast
                </Title>

                <Detail>
                    <Itembox>
                        <Date>
                        {new window.Date(day0*1000).toDateString().substr(4,6)}
                        </Date>
                        <Icon>
                            <ReactAnimatedWeather
                                icon={WeatherIcon(day0icon)}
                                size={20}
                                color={'white'}
                            />
                        </Icon>
                        <Temp>
                        {Math.floor(day0temp)} &#8451;
                        </Temp>
                    </Itembox>
                    <Itembox>
                        <Date>
                        {new window.Date(day1*1000).toDateString().substr(4,6)}
                        </Date>
                        <Icon>
                            <ReactAnimatedWeather
                                icon={WeatherIcon(day1icon)}
                                size={20}
                                color={'white'}
                            />
                        </Icon>
                        <Temp>
                        {Math.floor(day1temp)} &#8451;
                        </Temp>
                    </Itembox>
                    <Itembox>
                        <Date>
                        {new window.Date(day2*1000).toDateString().substr(4,6)}
                        </Date>
                        <Icon>
                            <ReactAnimatedWeather
                                icon={WeatherIcon(day2icon)}
                                size={20}
                                color={'white'}
                            />
                        </Icon>
                        <Temp>
                        {Math.floor(day2temp)} &#8451;
                        </Temp>
                    </Itembox>
                    <Itembox>
                        <Date>
                        {new window.Date(day3*1000).toDateString().substr(4,6)}
                        </Date>
                        <Icon>
                            <ReactAnimatedWeather
                                icon={WeatherIcon(day3icon)}
                                size={20}
                                color={'white'}
                            />
                        </Icon>
                        <Temp>
                        {Math.floor(day3temp)} &#8451;
                        </Temp>
                    </Itembox>
                    <Itembox>
                        <Date>
                        {new window.Date(day4*1000).toDateString().substr(4,6)}
                        </Date>
                        <Icon>
                            <ReactAnimatedWeather
                                icon={WeatherIcon(day4icon)}
                                size={20}
                                color={'white'}
                            />
                        </Icon>
                        <Temp>
                        {Math.floor(day4temp)} &#8451;
                        </Temp>
                    </Itembox>
                </Detail>
            </Container>
        )
    }
}

export default Forecast;