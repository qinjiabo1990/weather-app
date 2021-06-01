import React, {Component} from 'react';
import styled from 'styled-components';
import FlexColumn from '../../../components/FlexColumn';
import FlexRow from '../../../components/FlexRow';
import CityWeatherTheme from './CityWeatherTheme';

const OtherCity = styled(FlexColumn)`
    width: auto;
    margin:50px;
    border: 1px red solid;
    padding: 50px 0;
`

class CityWeather extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityList: ['Sydney', 'Melbourne', 'Perth', 'Adelaide', 'Hobart', 'Gold Coast'],
            weatherList: [],
        }
        this.addData = this.addData.bind(this);
    }

    componentDidMount(){
        const API_Key = 'fc7bad7f2b3d44a5fcfcb097beea3a05';
        for(let i=0; i< this.state.cityList.length; i++){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityList[i]}&units=metric&appid=${API_Key}`,{method: 'GET'})
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

    render(){
        return (
            <>
                <OtherCity>
                    <h2>Other Cities</h2>
                    <FlexRow>
                        {this.state.weatherList.map((data)=>(
                            <CityWeatherTheme 
                            key={data.id}
                            city={data.name}
                            temp={data.main.temp}
                            weather_icon={data.weather[0].icon}
                            />
                        ))}
                    </FlexRow>
                </OtherCity>
            </>
        )
    }
}

export default CityWeather;