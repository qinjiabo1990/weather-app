import React, { Component } from "react";
import styled from 'styled-components';
import Logo from './Logo';
import Time from './Time';
import FlexRow from '../../components/FlexRow'

const Nav = styled(FlexRow)`
    align-items: center;
    width: 100%;
    min-width: 300px;
    position: fixed;
    background-color: rgba(19, 63, 85, 0.3);
    top: 0;
    left: 0;
`

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Nav>
                    <Logo />
                    <Time />
                </Nav>
            </>
        )
    }
}

export default Header;