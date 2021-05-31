import React, { Component } from 'react';
import styled from 'styled-components';
import FlexRow from '../../../components/FlexRow';
import CurrentWeatherBody from './CurrentWeatherBody';
import CurrentWeatherDetails from './CurrentWeatherDetails';
import FutureWeather from './FutureWeather';

const WeatherForecast = styled(FlexRow)`
    border: 1px red solid;
    justify-content: space-evenly;
    width: auto;
    margin:50px;
    padding: 50px 0 50px 0; 
`

const Border = styled.div`
    border-right: 1px gray solid;
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
                        future_city={this.props.future_city}
                    // lat='-27.4679'
                    // lon='153.0281'
                    />
                </WeatherForecast>
            </>
        )
    }
}

export default LocalWeather;