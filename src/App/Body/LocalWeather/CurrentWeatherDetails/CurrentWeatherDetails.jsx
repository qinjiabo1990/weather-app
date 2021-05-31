import React from 'react';
import styled from 'styled-components';
import FlexColumn from '../../../../components/FlexColumn';
import FlexRow from '../../../../components/FlexRow';

const Details = styled(FlexRow)`
    border-top: 1px gray solid;
    width: 250px;
    justify-content: space-between;
    font-size: 1.2rem;
`

const CurrentWeatherDetails = ({
    feels, wind, humidity, pressure
}) => {
    return (
        <>
            <FlexColumn>
                <h2>Weather</h2>
                <FlexColumn>
                    <Details>
                        <p>Feels Like</p>
                        <p>{`${feels} °C`}</p>
                    </Details>
                    <Details>
                        <p>Humidity</p>
                        <p>{`${humidity} %`}</p>
                    </Details>
                    <Details>
                        <p>Pressure</p>
                        <p>{`${pressure} mb`}</p>
                    </Details>
                    <Details>
                        <p>Wind</p>
                        <p>{`${wind} Km/h`}</p>
                    </Details>
                </FlexColumn>
            </FlexColumn>
        </>
    )
}

export default CurrentWeatherDetails;