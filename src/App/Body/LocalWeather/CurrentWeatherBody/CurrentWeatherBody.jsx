import React from 'react';
import styled from 'styled-components';
import FlexColumn from '../../../../components/FlexColumn';
import FlexRow from '../../../../components/FlexRow';

const Body = styled(FlexRow)`
    align-items: baseline;
    border: 1px solid red;
    margin: 50px;
    padding:20px 0 50px 0;
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

const CurrentWeatherBody = ({city, weather_main, weather_icon, temp, temp_min, temp_max}) => {
    return (
        <>
            <Body>
                <FlexColumn>
                    <FlexColumn>
                        <City>{city}</City>
                        <WeatherDesc>
                            <WeatherMain>{weather_main}</WeatherMain>
                            <Img src={`http://openweathermap.org/img/w/${weather_icon}.png`} alt="weather" />
                        </WeatherDesc>
                    </FlexColumn>
                </FlexColumn>
                <FlexColumn>
                    <Temp>{`${temp} °C`}</Temp>
                    <MaxMin>
                        <p>{`${temp_min} °C`}</p>
                        <hr />
                        <p>{`${temp_max} °C`}</p>
                    </MaxMin>
                </FlexColumn>
            </Body>
        </>
    )
}

export default CurrentWeatherBody;