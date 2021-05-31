import React, { Component } from 'react';
import styled from 'styled-components';
import FlexRow from '../../../components/FlexRow';
import FlexColumn from '../../../components/FlexColumn'

const Body = styled(FlexRow)`
    align-items: baseline;
    border: 1px solid red;
    margin: 50px;
    padding:20px 0 50px 0;
`

// const Left = styled(FlexColumn)`
//     height:200px;
// `

const WeatherMain = styled(FlexColumn)`
    font-size: 1.5rem;
`

const WeatherDesc = styled(FlexRow)`
    align-items: center;
`

const Img = styled.img`
    width: 70px;
    height: 70px;
`

const MaxMin = styled(FlexRow)`
    font-size:1.2rem;
    justify-content: center;
    width:150px;
`

// const Desc = styled.

const Temp = styled.p`
    text-align: center;
    font-size: 3rem;
`
const City = styled.h1`
    font-size: 3rem;
`


class CurrentWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '-',
            temp: 0,
            temp_max: 0,
            temp_min: 0,
            weather_main: '-',
            weather_icon: '-',
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
            }))
    }

    render() {
        const { city, temp, temp_max, temp_min, weather_main, weather_icon } = this.state;
        return (
            <>
                <Body>
                    <FlexColumn>
                        <FlexColumn>
                            <City>{city}</City>
                            <WeatherDesc>
                                <WeatherMain>{weather_main}</WeatherMain>
                                <Img src={`http://openweathermap.org/img/w/${weather_icon}.png`} alt="weather" />
                            </WeatherDesc>
                        </FlexColumn>
                    </FlexColumn>
                    <FlexColumn>
                        <Temp>{`${temp} °`}</Temp>
                        <MaxMin>
                            <p>{`${temp_max} °`}</p>
                            <hr />
                            <p>{`${temp_min} °`}</p>
                        </MaxMin>
                    </FlexColumn>
                </Body>
                
            </>
        )
    }
}

export default CurrentWeather;