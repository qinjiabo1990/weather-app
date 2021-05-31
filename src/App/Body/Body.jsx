import React, { Component } from 'react';
import LocalWeather from './LocalWeather'


class Body extends Component {
    render() {
        return (
            <>
                <LocalWeather
                    city='Brisbane'
                //lat='-27.4679'
                //lon='153.0281'
                />
            </>
        )
    }
}

export default Body;