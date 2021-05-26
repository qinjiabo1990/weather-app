import React, {Component} from 'react';
import CurrentWeather from './CurrentWeather'
import FutureWeather from './FutureWeather'

class Body extends Component {
    render(){
        return(
            <>
            <CurrentWeather 
                city = ''
                lat='-27.4679'
                lon='153.0281'
            />
            <FutureWeather 
                city = ''
                lat='-27.4679'
                lon='153.0281'
            />
            </>
        )
    }
}

export default Body;