import React from 'react';
import styled from 'styled-components';
import FlexColumn from '../../../../../components/FlexColumn';

const Details = styled(FlexColumn)`
    margin: 0 25px;
`

const Date = styled.p`
    font-size: 1.6rem;
`

const Temp = styled.p`
    font-size: 1.4rem;
`

const Img = styled.img`
    width: 70px;
    height: 70px;
`

const FutureWeatherDetails = ({ date, max_temp, weather_icon }) => {
    return (
        <>
            <Details>
                <Date>{date}</Date>
                <Img src={`http://openweathermap.org/img/w/${weather_icon}.png`} alt="weather" />
                <Temp>{`${max_temp} °C`}</Temp>
            </Details>
        </>
    )
}

export default FutureWeatherDetails;