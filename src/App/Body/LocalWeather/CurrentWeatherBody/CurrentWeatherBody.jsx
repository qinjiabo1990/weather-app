import React from 'react';
import styled from 'styled-components';
import FlexColumn from '../../../../components/FlexColumn';
import FlexRow from '../../../../components/FlexRow';

const Body = styled(FlexRow)`
    flex-wrap: wrap;
    align-items: baseline;
    border-radius: 12px;
    margin: 50px;
    padding: 20px 0 50px 0;
    width: auto;
    background-color: rgba(19, 63, 85, 0.8);
    @media screen and (max-width: 600px) {
        margin: 20px 10px 50px 10px;
    }
`

const Left = styled(FlexColumn)`
    min-width: 220px;
`

const WeatherMain = styled(FlexColumn)`
    font-size: 1.5rem;
`

const WeatherDesc = styled(FlexRow)`
    align-items: center;
`

const Img = styled.img`
    width: 70px;
    height: 70px;
`

const MaxMin = styled(FlexRow)`
    font-size:1.2rem;
    justify-content: center;
    width:170px;
`

const Temp = styled.p`
    text-align: center;
    font-size: 3rem;
`

const City = styled.h1`
    font-size: 3rem;
`

const CurrentWeatherBody = ({ city, weather_main, weather_icon, temp, temp_min, temp_max }) => {
    return (
        <>
            <Body>
                <Left>
                    <FlexColumn>
                        <City>{city}</City>
                        <WeatherDesc>
                            <WeatherMain>{weather_main}</WeatherMain>
                            <Img src={`http://openweathermap.org/img/w/${weather_icon}.png`} alt="weather" />
                        </WeatherDesc>
                    </FlexColumn>
                </Left>
                <Left>
                    <Temp>{`${Math.round(temp)} °C`}</Temp>
                    <MaxMin>
                        <p>{`${Math.round(temp_min)} °C`}</p>
                        <hr />
                        <p>{`${Math.round(temp_max)} °C`}</p>
                    </MaxMin>
                </Left>
            </Body>
        </>
    )
}

export default CurrentWeatherBody;