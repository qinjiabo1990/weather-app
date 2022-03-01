import React, {Component} from 'react';
import styled from 'styled-components';
import FlexColumn from '../../../components/FlexColumn';
import FlexRow from '../../../components/FlexRow';
import CityWeatherTheme from './CityWeatherTheme';
require('dotenv').config();


const OtherCity = styled(FlexColumn)`
    width: auto;
    margin: 50px;
    background-color: rgba(19, 63, 85, 0.8);
    border-radius: 12px;
    padding: 50px 0;
    @media screen and (max-width: 600px) {
        margin: 50px 10px;
    }
`

const City = styled(FlexRow)`
    flex-wrap: wrap;
`

class CityWeather extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityList: ['Sydney', 'Melbourne', 'Perth', 'Adelaide', 'Hobart', 'Brisbane'],
            weatherList: [],
        }
        this.addData = this.addData.bind(this);
				this.citySelectHandler = this.citySelectHandler.bind(this);
    }

    componentDidMount(){
        const API_KEY = process.env.REACT_APP_API_KEY;
        for(let i=0; i< this.state.cityList.length; i++){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityList[i]}&units=metric&appid=${API_KEY}`,{method: 'GET'})
            .then((response) => response.json())
            .then((data) => this.setState({
                weatherList: this.addData(data),
            }))
        }
    }

    addData(data){
        const array = this.state.weatherList;
        array.push(data);
        return array;
    }

		citySelectHandler = (city) => {
			this.props.citySelector(city)
		}

    render(){
        return (
            <>
                <OtherCity>
                    <h2>Other Cities</h2>
                    <City>
                        {this.state.weatherList.map((data)=>(
                            <CityWeatherTheme 
                            key={data.id}
                            city={data.name}
                            temp={data.main.temp}
                            weather_icon={data.weather[0].icon}
														cityHandler={this.citySelectHandler}
                            />
                        ))}
                    </City>
                </OtherCity>
            </>
        )
    }
}

export default CityWeather;