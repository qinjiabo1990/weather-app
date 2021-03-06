import React, { Component } from 'react';
import FutureWeatherDetails from './FutureWeatherDetails';
import FlexRow from '../../../../components/FlexRow';
import FlexColumn from '../../../../components/FlexColumn';
import styled from 'styled-components';

const Body = styled(FlexRow)`
    flex-wrap: wrap;
`

class FutureWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fiveDayWeather: [],
        }
        this.getDate = this.getDate.bind(this);
    }

    handleLocationSelector(city, lat, lon) {
        let url;
        const API_Key = 'fc7bad7f2b3d44a5fcfcb097beea3a05';
        if (city) {
            url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_Key}`
        }
        else {
            url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_Key}`
        }
        return url;
    }

		getFutureWeatherAPI() {
			fetch(this.handleLocationSelector(this.props.future_city, this.props.lat, this.props.lon), { method: 'GET' })
			//.then((response) => console.log(response.list))
			.then((response) => response.json())
			.then((data) => this.setState({
					fiveDayWeather: this.handleDateSelector(data.list),
			}))
		}

    componentDidMount() {
        this.getFutureWeatherAPI()
    }

		componentDidUpdate(prevProps, prevState) {
			if (prevProps.future_city!== this.props.future_city) {
				this.getFutureWeatherAPI()
			}
	}

    handleDateSelector(data) {
        let i;
        const array = [];
        for (i = 0; i < data.length; i++) {
            if (i % 8 === 0) {
                array.push(data[i + 4]);
            }
        }
        return array;
    }

    getDate(date) {
        return date.slice(5, 10);
    }

    render() {
        return (
            <>
                <FlexColumn>
                    <h2>Forecast</h2>
                    <Body>
                        {this.state.fiveDayWeather.map((data) => (
                            <FutureWeatherDetails
                                key={data.dt}
                                date={this.getDate(data.dt_txt)}
                                max_temp={data.main.temp_max}
                                weather_icon={data.weather[0].icon}
                            />
                        ))}
                    </Body>
                </FlexColumn>
            </>
        )
    }
}

export default FutureWeather;