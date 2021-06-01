import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 70px;
    height: 70px;
    padding-left: 60px;
`;

const Logo = () => (
    <>
        <Img src='../../../../Img/Logo.png' alt="Logo" />
    </>
)

export default Logo; 