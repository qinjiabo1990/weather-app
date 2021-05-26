import React, {Component} from 'react';

class FutureWeather extends Component {
    constructor(props){
        super(props);
        this.state = {
            fiveDayWeather: [],
        }
        //this.handleDataSelector = this.handleDataSelector.bind(this)
    }

    handleLocationSelector(city, lat, lon){
        let url;
        const API_Key = 'fc7bad7f2b3d44a5fcfcb097beea3a05';
        if(city){
            url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_Key}`
        }
        else{
            url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_Key}`
        }
        return url;
    }

    componentDidMount(){
        fetch(this.handleLocationSelector(this.props.city, this.props.lat, this.props.lon),{method: 'GET'})
        .then((response) => response.json())
        .then((data) => this.setState({
            fiveDayWeather: this.handleDateSelector(data.list),
        }))
    }

    //Select 12pm's forecast of each day
    handleDateSelector(data){
        let i;
        const array = [];
        for (i = 0; i < data.length; i++) {
            if (i%8===0){
                array.push(data[i+4]);
            }
        }
        return array;
    }

    render(){
        return(
            <>
            {this.state.fiveDayWeather.map((data)=>(
                // <li key={data.dt}>{data.main.temp}</li>
                <li key={data.dt}>{data.dt_txt}</li>
            ))}
            </>
        )
    }
}

export default FutureWeather;