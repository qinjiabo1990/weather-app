import React from 'react';
import styled from 'styled-components';
import FlexRow from '../../components/FlexRow';

const Copyright = styled(FlexRow)`
    padding: 10px 0;
`

const Footer = () => {
    return (
        <>
            <hr />
            <Copyright>
                <p>© 2021 Weather App. All Rights Reserved. Designed by Bob</p>
            </Copyright>
        </>
    )

};

export default Footer;