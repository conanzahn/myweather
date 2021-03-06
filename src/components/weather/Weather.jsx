import React from 'react';
import styled from 'styled-components';
import ReactAnimatedWeather from 'react-animated-weather';
import Forecast from '../forecast';
import WeatherIcon from '../../data/weatherIcon/WeatherIcon';
import First from '../Info/First';
import Error from '../Info/Error';
import Load from '../Info/Load';

const Container = styled.div`
    border: none;
    width: 100%;
    margin-top: 5%;
`;

const Citybox = styled.div`
    border: none;
    color: white;
    width: 260px;
    padding: 0 5px 0;
    letter-spacing: .25em;
    text-transform: uppercase;
    margin-left: 5%;
`;

const City = styled.div`
    display: flex;
    padding: 0 15px 0;
    font-size: 16px;
    font-weight: bold;
`;

const Date = styled.div`
    display: flex;
    padding: 0 15px 0;
    font-size: 11px;
`;

const Weatherbox = styled.div`
    border: none;
    display: flex;
    justify-content:center;
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
    margin-left: 15%;
    margin-top: 2%; 
    border-radius:15px;
    background: white;
    opacity: 0.5;
    color: #353434;
    width: 360px;
    padding: 10px 5px 10px;
`;

const Row = styled.div`
    display: flex;
`;

const Infobox = styled.div`
    margin: 2px 27px 2px;
`;

const Data = styled.div`
    font-weight: bold;
`;

const Label = styled.div`

`;

class Weather extends React.Component{

    render() {
        
        const {result, isFirst,isLoading, err} = this.props
        const {coord, dt, main, name, sys, weather, wind} = result

        console.log('render=====', this.props.result)
        return (
            <Container>
            {
                isFirst ? <First /> :
                isLoading ? <Load /> :
                err ? <Error /> :
                <>
                <Citybox>
                    <City>{name}, {sys.country}</City>
                    <Date>{new window.Date(dt*1000).toLocaleString()}</Date>
                </Citybox>

                <Weatherbox>
                    <Tempbox>
                        <Icon>
                            <ReactAnimatedWeather
                                icon={WeatherIcon(weather[0].main)}
                                size={80}
                                color={'black'}
                            />
                        </Icon>
                        <Temp>
                            <Degree>{Math.floor(main.temp)} &#8451;</Degree>
                            <Descrip>{weather[0].description}</Descrip>
                        </Temp>
                    </Tempbox>

                    <Detailbox>
                        <Row>
                            <Infobox>
                                <Data>{Math.floor(main.temp_max)}&#8451;</Data>
                                <Label>High</Label>
                            </Infobox>
                            <Infobox>
                                <Data>
                                    {new window.Date(sys.sunrise*1000).toLocaleTimeString()}
                                </Data>
                                <Label>Sunrise</Label>
                            </Infobox>
                            <Infobox>
                                <Data>{wind.speed}Km/h</Data>
                                <Label>Wind</Label>
                            </Infobox>
                        </Row>
                        <Row>
                            <Infobox>
                                <Data>{Math.floor(main.temp_min)}&#8451;</Data>
                                <Label>Low</Label>
                            </Infobox>
                            <Infobox>
                                <Data>
                                {new window.Date(sys.sunset*1000).toLocaleTimeString()}</Data>
                                <Label>Sunset</Label>
                            </Infobox>
                            <Infobox>
                                <Data>{main.humidity}%</Data>
                                <Label>Humidity</Label>
                            </Infobox>
                        </Row>
                    </Detailbox>
                </Weatherbox>
                <Forecast fore_lat={coord.lat} fore_lon={coord.lon}/>
                </>
            }
            </Container>
        )
    }
}
export default Weather; 