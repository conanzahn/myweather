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
    /* display:flex; */
    justify-content: center;
    margin-left: 5%;
    margin-right: 5%;
    /* scroll bar */
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    height: 150px;
`;

const Itembox = styled.div`
    letter-spacing: .1em;
    display: inline-block;
    border-radius: 25% 10%;
    background: #4d4d4d;
    opacity: 0.65;
    color: #ffffff;
    width: 140px;
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
            Daily: [],
        };
    }

    componentDidMount(){
        const {fore_lat, fore_lon} = this.props;

        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${fore_lat}&lon=${fore_lon}&appid=${'06097b28b073d46a2f450fe6f7112b58'}&units=${'metric'}`).then(
        response => {
                console.log('forecast-response',response)
                const {daily} = response.data;
                console.log(daily);

                this.setState({
                    Daily: response.data.daily,
                });
                },
        )
    }

    render() {
        const {Daily} = this.state;

        return (
            <Container>
                <Title>
                    7 Days Forecast
                </Title>

                <Detail>
                    {Daily.map((s) => (
                        <Itembox>
                            <Date>
                            {new window.Date(s.dt*1000).toDateString().substr(4,6)}
                            </Date>
                            <Icon>
                                <ReactAnimatedWeather
                                    icon={WeatherIcon(s.weather[0].main)}
                                    size={20}
                                    color={'white'}
                                />
                            </Icon>
                            <Temp>
                            {Math.floor(s.temp.day)} &#8451;
                            </Temp>
                        </Itembox>
                    ))}

                </Detail>
            </Container>
        )
    }
}

export default Forecast;