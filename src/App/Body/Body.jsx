import React, {Component} from 'react';
import CurrentWeather from './CurrentWeather'
import FutureWeather from './FutureWeather'

class Body extends Component {
    render(){
        return(
            <>
            <FutureWeather />
                <CurrentWeather />
                
            </>
        )
    }
}

export default Body;