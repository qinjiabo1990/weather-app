import React, { Component } from 'react';
import LocalWeather from './LocalWeather';
import CityWeather from './CityWeather';
import styled from 'styled-components';

const Main = styled.div`
    padding-top: 70px;
`

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '-',
            temp: 0,
            temp_max: 0,
            temp_min: 0,
            weather_main: '-',
            weather_icon: '-',
            feels: 0,
            wind: 0,
            humidity: 0,
            pressure: 0,
        }
    }

    handleLocationSelector(city, lat, lon) {
        let url;
        const API_Key = 'fc7bad7f2b3d44a5fcfcb097beea3a05';
        if (city) {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_Key}`
        }
        else {
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_Key}`
        }
        return url;
    }

    componentDidMount() {
        fetch(this.handleLocationSelector(this.props.city, this.props.lat, this.props.lon), { method: 'GET' })
            .then((response) => response.json())
            .then((data) => this.setState({
                city: data.name,
                temp: data.main.temp,
                temp_max: data.main.temp_max,
                temp_min: data.main.temp_min,
                weather_main: data.weather[0].main,
                weather_icon: data.weather[0].icon,
                feels: data.main.feels_like,
                wind: data.wind.speed,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
            }))
    }

    render() {
        const { city, temp, temp_max, temp_min, weather_main, weather_icon, feels, wind, humidity, pressure } = this.state;
        return (
            <>
                <Main>
                    <LocalWeather
                        city={city}
                        temp={temp}
                        temp_max={temp_max}
                        temp_min={temp_min}
                        weather_main={weather_main}
                        weather_icon={weather_icon}
                        feels={feels}
                        wind={wind}
                        humidity={humidity}
                        pressure={pressure}
                        future_city={this.props.city}
                    />
                    <CityWeather />
                </Main>
            </>
        )
    }
}

export default Body;