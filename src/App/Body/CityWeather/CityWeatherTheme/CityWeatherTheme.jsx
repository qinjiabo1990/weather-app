import React from 'react';
import styled from 'styled-components';
import FlexColumn from '../../../../components/FlexColumn'

const Cities = styled(FlexColumn)`
    margin: 0 30px;
`

const Temp = styled.p`
    font-size: 1.2rem;
`

const City = styled.h3`
    font-size: 1.4rem;
`

const Img = styled.img`
    width: 60px;
    height: 60px;
`

const CityWeatherTheme = ({ city, weather_icon, temp, cityHandler }) => {

	const citySelectHandler = () => {
		cityHandler(city)
	}
	
	return (
		<>
			<Cities onClick={citySelectHandler}>
				<City>{city}</City>
				<Img src={`http://openweathermap.org/img/w/${weather_icon}.png`} alt="weather" />
				<Temp>{`${Math.round(temp)} °C`}</Temp>
			</Cities>
		</>
	)
}

export default CityWeatherTheme;