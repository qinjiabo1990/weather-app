import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/img/Logo.png'

const Img = styled.img`
    width: 70px;
    height: 70px;
    padding-left: 60px;
`;

const Logo = () => (
    <>
        <Img src={logo} alt="Logo" />
    </>
)

export default Logo; 