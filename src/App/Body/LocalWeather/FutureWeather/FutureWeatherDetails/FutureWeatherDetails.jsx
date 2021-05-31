import React from 'react';
import styled from 'styled-components';
import FlexColumn from '../../../../../components/FlexColumn';

const Details = styled(FlexColumn)`
    margin: 0 20px;
`

const Date = styled.p`
    font-size: 1.4rem;
`

const Temp = styled.p`
    font-size: 1.3rem;
`

const Img = styled.img`
    width: 60px;
    height: 60px;
`

const Border = styled.div`
    border: 1px gray solid;
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