import React, {Component} from 'react'

class CurrentWeather extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: null,
            temp: null,
            temp_max: null,
            temp_min: null,
            weather_description: null,
            weather_main: null,
            weather_icon: null,
        }
    }

    componentDidMount(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Brisbane&units=metric&appid=fc7bad7f2b3d44a5fcfcb097beea3a05',{method: 'GET'})
        .then((response) => response.json())
        .then((data) => this.setState({
            city: data.name,
            temp: data.main.temp,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
            weather_description: data.weather[0].description,
            weather_main: data.weather[0].main,
            weather_icon: data.weather[0].icon,
        }))
    }

    render(){
        const {city, temp, temp_max, temp_min, weather_description, weather_main, weather_icon} = this.state;
        return(
            <>
                <img src={`http://openweathermap.org/img/w/${weather_icon}.png`} alt="" />
                <p>{city}</p>
                <p>{temp}</p>
                <p>{temp_max}</p>
                <p>{temp_min}</p>
                <p>{weather_description}</p>
                <p>{weather_main}</p>
            </>
        )
    }
}

export default CurrentWeather;