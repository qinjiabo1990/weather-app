import React, { Component } from 'react';
import styled from 'styled-components';
import FlexRow from '../../../components/FlexRow';
import CurrentWeatherBody from './CurrentWeatherBody';
import CurrentWeatherDetails from './CurrentWeatherDetails';
import FutureWeather from './FutureWeather';

const WeatherForecast = styled(FlexRow)`
    flex-wrap: wrap;
    background-color: rgba(19, 63, 85, 0.8);
    border-radius: 12px;
    justify-content: space-evenly;
    width: auto;
    margin: 50px;
    padding: 50px 50px;
    @media screen and (max-width: 600px) {
        margin: 50px 10px;
    }
`

const Border = styled.div`
    width: 3px;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 0 20px;
    @media screen and (max-width: 1019px){
        display: none;
    }
`

class LocalWeather extends Component {
    render() {
        return (
            <>
                <CurrentWeatherBody
                    city={this.props.city}
                    weather_main={this.props.weather_main}
                    weather_icon={this.props.weather_icon}
                    temp={this.props.temp}
                    temp_min={this.props.temp_min}
                    temp_max={this.props.temp_max}
                />
                <WeatherForecast>
                    <CurrentWeatherDetails
                        feels={this.props.feels}
                        wind={this.props.wind}
                        humidity={this.props.humidity}
                        pressure={this.props.pressure}
                    />
                    <Border />
                    <FutureWeather
                        future_city={this.props.city}
                    // lat='-27.4679'
                    // lon='153.0281'
                    />
                </WeatherForecast>
            </>
        )
    }
}

export default LocalWeather;